import Link from "next/link";
import styles from "styles/logo.module.css";

export default function Logo(props) {
  const { boxOn = false } = props;
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      STYM
    </Link>
  );
}
