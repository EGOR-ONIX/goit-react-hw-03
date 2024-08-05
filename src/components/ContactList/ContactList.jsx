import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css["contact-item"]}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
