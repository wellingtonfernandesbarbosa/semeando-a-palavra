import styles from "./Header.module.css";

interface HeaderProps {
  size?: "normal" | "small";
}

export default function Header({ size = "normal" }: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[size]}`}>
      <h1 className={size === "small" ? styles.alignLeft : ""}>Semeando a Palavra</h1>
    </header>
  );
}
