import footerStyles from "@/app/Components/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <h1>Ross Fletcher</h1>
      <Link href={`/casestudies`} className={footerStyles.link}>
        <h1>LinkedIn</h1>
      </Link>
      <Link href={`/casestudies`} className={footerStyles.link}>
        <h1>Github</h1>
      </Link>
    </div>
  );
}
