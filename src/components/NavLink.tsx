const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
  >
    {children}
  </a>
);
export default NavLink;
