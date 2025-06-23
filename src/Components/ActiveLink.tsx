import type React from "react";
import { Link, useMatch } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  activeClassName: string;
  className: string;
};

export function ActiveLink({
  to,
  children,
  activeClassName,
  className,
}: Props) {
  const match = useMatch(to);
  console.log(to, match);

  return (
    <Link to={to}>
      <span className={`${className} ${match ? activeClassName : ""}`}>
        {children}
      </span>
    </Link>
  );
}
