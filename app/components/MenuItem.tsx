"use client";

import Link from "next/link";

interface MenuItemProps {
  section: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ section, label }) => {
  return (
    <Link
      href={section}
      
      className="px-4 py-3 hover:bg-emerald-400 transition font-semibold cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default MenuItem;
