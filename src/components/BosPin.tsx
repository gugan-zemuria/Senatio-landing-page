"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const stages = [
  {
    num: "01",
    tag: "Build",
    verb: "Build",
    desc: "Hire and onboard engineers in 2 weeks or less. Define the right team structure, align roles to goals, and get your India team launched fast — with seniority mix and starting structure shaped intelligently from day one.",
    items: [
      "Define the right team structure",
      "Map roles to current engineering priorities",
      "Hire engineers in 2 weeks or less",
      "Onboard and align to tools, workflows, goals",
    ],
  },
  {
    num: "02",
    tag: "Operate",
    verb: "Operate",
    desc: "Run the team with delivery rhythm, reporting, continuity, and execution oversight. Prevent the team from becoming another management problem on the client side.",
    items: [
      "Delivery rhythm",
      "Reporting & visibility",
      "Continuity support",
      "Execution oversight",
    ],
  },
  {
    num: "03",
    tag: "Scale",
    verb: "Scale",
    desc: "Add engineers quickly, reduce team size cleanly when needed, and grow with more control and less operational friction. Quality stays stable while team shape changes over time.",
    items: [
      "Scale up cleanly",
      "Reduce without churn",
      "Maintain quality",
      "Hold operating shape",
    ],
  },
];

export default function BosPin() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const morphProgressRef = useRef(0);

  // Scroll-based stage transitions — independent of Three.js
  const updateProgress = useCallback(() => {
    const pin = pinRef.current;
    if (!pin) return;

    const r = pin.getBoundingClientRect();
    const total = pin.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -r.top);
    const progress = Math.max(0, Math.min(1, scrolled / total));
    morphProgressRef.current = progress;

    let stage = 0;
    if (progress > 0.66) stage = 2;
    else if (progress > 0.33) stage = 1;
    setActiveStage(stage);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  // Three.js particle morph — separate effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (getComputedStyle(canvas).display === "none") return;

    let disposed = false;
    let animId: number;
    let resizeHandler: () => void;

    import("three").then((THREE) => {
      if (disposed) return;

      function getCSSVar(name: string) {
        return getComputedStyle(document.documentElement)
          .getPropertyValue(name)
          .trim();
      }
      function threeColor(varName: string) {
        return new THREE.Color(getCSSVar(varName));
      }
      function getCSSNumber(name: string, fallback: number) {
        const value = parseFloat(getCSSVar(name));
        return Number.isFinite(value) ? value : fallback;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0.4, 0.5, 5.6);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const COUNT = 2400;

      // State 0 — Scattered cloud (Build)
      const stateBuild = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const r = 2.4 + (Math.random() - 0.5) * 0.6;
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        stateBuild[i * 3] =
          r * Math.sin(phi) * Math.cos(theta) * (0.4 + Math.random() * 0.6);
        stateBuild[i * 3 + 1] =
          r * Math.sin(phi) * Math.sin(theta) * (0.4 + Math.random() * 0.6);
        stateBuild[i * 3 + 2] =
          r * Math.cos(phi) * (0.4 + Math.random() * 0.6);
      }

      // State 1 — Grid lattice (Operate)
      const stateOperate = new Float32Array(COUNT * 3);
      {
        const side = Math.ceil(Math.cbrt(COUNT));
        const step = 3.2 / (side - 1);
        let idx = 0;
        for (let x = 0; x < side; x++)
          for (let y = 0; y < side; y++)
            for (let z = 0; z < side; z++) {
              if (idx >= COUNT) break;
              stateOperate[idx * 3] = x * step - 1.6;
              stateOperate[idx * 3 + 1] = y * step - 1.6;
              stateOperate[idx * 3 + 2] = z * step - 1.6;
              idx++;
            }
      }

      // State 2 — Expanded outward (Scale)
      const stateScale = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const gx = stateOperate[i * 3];
        const gy = stateOperate[i * 3 + 1];
        const gz = stateOperate[i * 3 + 2];
        const len = Math.sqrt(gx * gx + gy * gy + gz * gz) || 1;
        const factor = 3.2;
        stateScale[i * 3] =
          (gx / len) * (len + 0.8) * factor * 0.55 + gx * 0.4;
        stateScale[i * 3 + 1] =
          (gy / len) * (len + 0.8) * factor * 0.55 + gy * 0.4;
        stateScale[i * 3 + 2] =
          (gz / len) * (len + 0.8) * factor * 0.55 + gz * 0.4;
      }

      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(COUNT * 3);
      pos.set(stateBuild);
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      const col = new Float32Array(COUNT * 3);
      const initFg = threeColor("--three-fg");
      for (let i = 0; i < COUNT; i++) {
        col[i * 3] = initFg.r;
        col[i * 3 + 1] = initFg.g;
        col[i * 3 + 2] = initFg.b;
      }
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.04,
        transparent: true,
        opacity: getCSSNumber("--three-point-opacity", 0.95),
        sizeAttenuation: true,
        vertexColors: true,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const cubeGeo = new THREE.BoxGeometry(3.4, 3.4, 3.4);
      const cubeWireMat = new THREE.LineBasicMaterial({
        color: threeColor("--three-wire"),
        transparent: true,
        opacity: getCSSNumber("--three-wire-opacity", 0.4),
      });
      const cubeWire = new THREE.LineSegments(
        new THREE.EdgesGeometry(cubeGeo),
        cubeWireMat
      );
      scene.add(cubeWire);

      resizeHandler = () => {
        const r = canvas.getBoundingClientRect();
        renderer.setSize(r.width, r.height, false);
        camera.aspect = r.width / r.height;
        camera.updateProjectionMatrix();
      };
      resizeHandler();
      window.addEventListener("resize", resizeHandler);

      function lerpStates(
        a: Float32Array,
        b: Float32Array,
        t: number,
        out: Float32Array
      ) {
        for (let i = 0; i < a.length; i++) out[i] = a[i] + (b[i] - a[i]) * t;
      }

      const tmp = new Float32Array(COUNT * 3);
      const fgC = threeColor("--three-fg");
      const acC = threeColor("--three-accent");

      function render(now: number) {
        if (disposed) return;

        const p = morphProgressRef.current;
        let A: Float32Array, B: Float32Array, t: number;
        if (p < 0.5) {
          A = stateBuild;
          B = stateOperate;
          t = p / 0.5;
        } else {
          A = stateOperate;
          B = stateScale;
          t = (p - 0.5) / 0.5;
        }
        const eased =
          t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        lerpStates(A, B, eased, tmp);

        const time = now / 1000;
        for (let i = 0; i < COUNT; i++) {
          const x = tmp[i * 3];
          const y = tmp[i * 3 + 1];
          const z = tmp[i * 3 + 2];
          pos[i * 3] = x + Math.sin(time * 0.6 + i * 0.05) * 0.04;
          pos[i * 3 + 1] = y + Math.cos(time * 0.7 + i * 0.06) * 0.04;
          pos[i * 3 + 2] = z + Math.sin(time * 0.5 + i * 0.07) * 0.04;
        }
        geo.attributes.position.needsUpdate = true;

        const c = p < 0.5 ? p / 0.5 : 1;
        fgC.set(getCSSVar("--three-fg") || "#ecedef");
        acC.set(getCSSVar("--three-accent") || "#d4ff3d");
        for (let i = 0; i < COUNT; i++) {
          col[i * 3] = fgC.r + c * (acC.r - fgC.r);
          col[i * 3 + 1] = fgC.g + c * (acC.g - fgC.g);
          col[i * 3 + 2] = fgC.b + c * (acC.b - fgC.b);
        }
        geo.attributes.color.needsUpdate = true;
        cubeWireMat.color.copy(threeColor("--three-wire"));
        mat.opacity = getCSSNumber("--three-point-opacity", 0.95);
        cubeWireMat.opacity = getCSSNumber("--three-wire-opacity", 0.4);

        const isLight =
          document.documentElement.getAttribute("data-theme") === "light";
        if (window.innerWidth < 768) {
          cubeWire.visible = false;
        } else {
          cubeWire.visible = !isLight;
        }

        points.rotation.y = time * 0.12 + p * Math.PI * 0.4;
        points.rotation.x = Math.sin(time * 0.2) * 0.1;
        cubeWire.rotation.copy(points.rotation);

        camera.position.x = 0.4;
        camera.position.z = 5.6 + p * 3.5;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        animId = requestAnimationFrame(render);
      }

      animId = requestAnimationFrame(render);
    });

    return () => {
      disposed = true;
      if (animId) cancelAnimationFrame(animId);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section className="bos-pin" id="bos-pin" ref={pinRef}>
      <div className="bos-stage">
        <canvas id="morph-canvas" ref={canvasRef} aria-hidden="true" />

        <div className="bos-content">
          <div className="bos-text">
            <div className="bos-stages-content" id="bos-stages-content">
              {stages.map((stage, i) => (
                <div
                  className={`bos-stage-block bos-stage-card${
                    i === activeStage ? " active" : ""
                  }`}
                  data-stage={i}
                  key={stage.tag}
                >
                  <div className="bos-stage-meta">
                    <span className="num">{stage.num}</span>
                    <span className="rule" />
                    <span className="tag">{stage.tag}</span>
                  </div>
                  <h2 className="bos-stage-verb">{stage.verb}</h2>
                  <p className="bos-desc">{stage.desc}</p>
                  <ul className="bos-list">
                    {stage.items.map((item, j) => (
                      <li key={j}>
                        <span className="n">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
