import styles from "./header.module.css";
import LogoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Link>
        <img src={LogoImg} alt="logo Cripto" />
        </Link>
      </div>
    </header>
  );
};
