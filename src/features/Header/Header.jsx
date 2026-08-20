import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div>d</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
