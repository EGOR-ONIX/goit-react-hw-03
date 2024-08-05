import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <ul className={css.information}>
        <li>
          <FaUser />
          <span>{name}</span>
        </li>
        <li>
          <FaPhoneAlt />
          <span>{number}</span>
        </li>
      </ul>

      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
