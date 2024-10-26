import NavLink from "./NavLink"

const MenuOverlay = ({ links }: { links: { title: string, path: string }[] }) => {
    return (
        <ul className="flex flex-col py-4 items-center md:hidden">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay