import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./components/MainHeaderBackground";
import NavLink from "./components/NavLink";

import classes from "./mainHeader.module.css";

const MainHeader = () => {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logoImg} alt="NextLevel Food" priority />
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
