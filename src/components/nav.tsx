import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './themeToggle';

type NavItem = {
  name: string;
  path: string;
};

type NavItemProps = {
  item: NavItem;
  children?: React.ReactNode;
};

const navItemsList: NavItem[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'blog',
    path: '/blog',
  },
  {
    name: 'ask ai',
    path: '/ai',
  },
];

export function Navbar() {
  return (
    <nav>
      <div className="menu p-2 bg-base-200 menu-horizontal lg-horizontal mb-16 tracking-tight rounded-box">
        {navItemsList.map((navItem) => (
          <NavItem item={navItem} key={navItem.name} />
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export function NavItem({ item }: NavItemProps) {
  const { name } = item;
  return (
    <li className="ml-2">
      <Link href={item.path}>{name}</Link>
    </li>
  );
}
