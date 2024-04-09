import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";
import toast from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
  const contact = {
    name: values.name,
    number: values.number
  };

    dispatch(addContact(contact))
      .unwrap()
      .then(() => {
        toast.success('Contact added');
      })
      .catch(() => {
        toast.error('Error adding contact');
      });
  resetForm();
  };
  
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor='name'>Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor='number'>Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.formBtn}>Add Contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm;