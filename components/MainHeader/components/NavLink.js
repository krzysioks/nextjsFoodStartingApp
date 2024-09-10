"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";

const NavLink = (props) => {
	const { href, children } = props;
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={
				pathname.startsWith(href)
					? `${classes.link} ${classes.active}`
					: classes.link
			}
		>
			{children}
		</Link>
	);
};

export default NavLink;
