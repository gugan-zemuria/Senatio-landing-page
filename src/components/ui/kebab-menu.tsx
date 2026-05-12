"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export interface KebabItem {
  label: string;
  href?: string;
  onClick?: () => void;
  destructive?: boolean;
}

export default function KebabMenu({ items }: { items: KebabItem[] }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="kebab-trigger" aria-label="Open menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="kebab-content" sideOffset={6} align="end">
          {items.map((item, i) => (
            <DropdownMenu.Item
              key={i}
              className={`kebab-item ${item.destructive ? "kebab-destructive" : ""}`}
              onClick={item.onClick}
              asChild={!!item.href}
            >
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
