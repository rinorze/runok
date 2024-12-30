import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import "../../assets/styles/Button.scss";

export default function Button() {
  return (
    <div className="button">
      <Link to="/Contact">Get Started Now </Link>
      <IoMdArrowUp className="arrow" />
    </div>
  );
}
