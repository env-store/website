import Link from "next/link";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <div className="flex justify-center w-full h-12 border-b border-gray-50">
      <div className="max-w-7xl w-full flex flex-row gap-2">
        <NavbarButton href="/">Home</NavbarButton>
        <NavbarButton href="/download">Download</NavbarButton>
      </div>
    </div>
  );
};

const NavbarButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isLocal = !href.startsWith("http");
  const LinkElement = isLocal ? Link : "a";

  return (
    <div className="h-full w-min flex justify-center items-center">
      <LinkElement
        className={clsx(
          "flex justify-center items-center rounded px-4 py-1.5",
          "border border-transparent",
          "dark:hover:border-gray-50",
          "dark:active:bg-gray-700",
          "transition-all duration-200",
        )}
        href={href}
      >
        {children}
      </LinkElement>
    </div>
  );
};
