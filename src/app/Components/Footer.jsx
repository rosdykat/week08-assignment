import footerStyles from "@/app/Components/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Link href={`https://www.linkedin.com/in/ross-fletcher-12a31b1b3/`} className={footerStyles.link}>
        <h1>LinkedIn</h1>
      </Link>
      <Link href={`https://github.com/rosdykat`} className={footerStyles.link}>
        <h1>Github</h1>
      </Link>
    </div>
  );
}
