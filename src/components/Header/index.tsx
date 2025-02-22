import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  size?: "normal" | "small";
}

export default function Header({ size = "normal" }: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[size]}`}>
      <Link href="/">
        <h1 className={size === "small" ? styles.alignLeft : styles.center}>Semeando a Palavra</h1>
      </Link>
    </header>
  );
}
