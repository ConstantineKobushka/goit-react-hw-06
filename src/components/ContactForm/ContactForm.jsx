import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid/non-secure';

import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const name = useId();
  const number = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Only digits allowed')
      .min(12, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const onFormSubmit = (values, actions) => {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={contactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={name}>
          Name
        </label>
        <Field className={styles.input} type="text" name="name" id={name} />
        <ErrorMessage className={styles.error} name="name" component="span" />
        <label
          className={`${styles.label} ${styles.labelNumber}`}
          htmlFor={number}
        >
          Number
        </label>
        <Field className={styles.input} type="tel" name="number" id={number} />
        <ErrorMessage className={styles.error} name="number" component="span" />
        <button className={styles.btn} type="submit">
          Add contact{' '}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
