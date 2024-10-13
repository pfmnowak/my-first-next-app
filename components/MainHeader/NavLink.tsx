"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./NavLink.module.scss";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${classes.link} ${
          path.startsWith(href) ? classes.active : undefined
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
