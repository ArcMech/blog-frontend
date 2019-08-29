import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact_page}>
      <h1>Napisz, jeśli chcesz abym pomógł</h1>
      <p>
        Funkcja jeszcze nie działa :(, skontaktuj się poprzez media
        społecznościowe.
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={() => (
          <Form>
            <label htmlFor="firstName">Imię</label>
            <Field name="firstName" placeholder="Imię" />

            <label htmlFor="lastName">Nazwisko</label>
            <Field name="lastName" placeholder="Nazwisko" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="email@acme.com" type="email" />

            <label htmlFor="message">Twoja wiadomość</label>
            <Field
              component="textarea"
              name="message"
              placeholder="Czego potrzebujesz?"
              type="message"
            />
            <button type="submit">Wyślij gołębia! Grru!</button>
          </Form>
        )}
      />
    </section>
  );
};

export default Contact;
