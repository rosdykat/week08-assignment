import Link from "next/link";
import headerStyles from "@/app/Components/header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.nav}>
      <Link href={`/`} className={headerStyles.link}>
        <h1>Home</h1>
      </Link>
      <Link href={`/casestudies`} className={headerStyles.link}>
        <h1>Case Studies</h1>
      </Link>
      <Link href={`/about`} className={headerStyles.link}>
        <h1>About</h1>
      </Link>
    </div>
  );
}
