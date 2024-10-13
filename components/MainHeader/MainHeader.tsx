import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./MainHeader.module.scss";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
