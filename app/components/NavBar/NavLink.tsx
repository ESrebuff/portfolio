import Link from "next/link";

const NavLink = ({ href, title }: { href: string, title: string }) => {
    return (
        <Link className="block p-2 pl-3 pr(4 text-muted sm:text-xl rounded md:p-0 hover:text-white" href={href}>{title}</Link>
    );
}

export default NavLink