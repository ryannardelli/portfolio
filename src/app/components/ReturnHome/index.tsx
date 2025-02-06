import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export const ReturnHome = () => {
  return (
    <nav className="flex justify-end p-4">
      <Link href="/">
        <i className="bi bi-house text-3xl font-bold"></i>
      </Link>
    </nav>
  );
};
