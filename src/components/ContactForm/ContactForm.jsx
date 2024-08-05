import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

function ContactForm({ onAdd }) {
  const initialContact = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const FormScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "To0 long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "To0 long!")
      .required("Required!"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    onAdd(newContact);
    console.log(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={FormScheme}
    >
      <Form className={css.form}>
        <label className={css.input} htmlFor={nameFieldId}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            placeholder="Egor Shvachko"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label className={css.input} htmlFor={numberFieldId}>
          <span>Number</span>
          <Field
            type="tel"
            name="number"
            placeholder="068-595-73-12"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
