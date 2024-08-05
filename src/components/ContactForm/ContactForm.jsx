import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import "yup-phone";

function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const FormScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "*The contact name is quite short!")
      .max(50, "*The contact name is quite long!")
      .required("*Contact name is a required field!"),
    number: Yup.string()
      .matches(phoneRegExp, "*The number does not match the format: xxx-xx-xx")
      .required("*Contact number is a required field!"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormScheme}
    >
      <Form className={css.form}>
        <label className={css["wrapper-input"]} htmlFor={nameFieldId}>
          <span>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Egor Shvachko"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label className={css["wrapper-input"]} htmlFor={numberFieldId}>
          <span>Number</span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
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
