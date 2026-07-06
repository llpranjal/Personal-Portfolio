import type { AnchorHTMLAttributes, ReactNode } from "react";

interface AnimatedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

/**
 * Subtle Grandeur #3 — Link underline.
 * A single thread of Aged Brass, drawn from left to right on hover.
 */
export default function AnimatedLink({
  children,
  className = "",
  ...rest
}: AnimatedLinkProps) {
  return (
    <a className={`group relative inline-block w-fit ${className}`} {...rest}>
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-expo group-hover:scale-x-100" />
    </a>
  );
}
