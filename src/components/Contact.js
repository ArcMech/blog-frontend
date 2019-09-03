import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "../styles/contact.module.css";
import axios from "axios";

const Contact = () => {
  return (
    <section className={styles.contact_page}>
      <h1>Napisz, jeśli chcesz abym pomógł</h1>
      <p>
        Funkcja jeszcze nie działa :(, skontaktuj się poprzez media
        społecznościowe.
      </p>
      <Formik
        validate
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          content: ""
        }}
        onSubmit={values => {
          setTimeout(() => {
            axios
              .post("http://127.0.0.1:8000/api/questions/", values)
              .then(res => {
                alert("Wysłane", res.data);
              })
              .catch(err => {
                alert(err);
              });
            // console.log(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={() => (
          <Form>
            <label htmlFor="firstName">Imię</label>
            <Field name="firstName" placeholder="Imię" required />

            <label htmlFor="lastName">Nazwisko</label>
            <Field name="lastName" placeholder="Nazwisko" required />

            <label htmlFor="email">Email</label>
            <Field
              name="email"
              placeholder="email@acme.com"
              type="email"
              required
            />

            <label htmlFor="content">Twoja wiadomość</label>
            <Field
              component="textarea"
              name="content"
              placeholder="Czego potrzebujesz?"
              type="content"
              required
            />
            <button type="submit">Wyślij gołębia! Grrru!</button>
          </Form>
        )}
      />
    </section>
  );
};

export default Contact;
