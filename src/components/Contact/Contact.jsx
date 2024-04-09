import css from "./Contact.module.css";
import { AiFillContacts } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; 
import toast from 'react-hot-toast';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  
  return (
    <>
      <li className={css.listItem}>
        <div className={css.iconContainer}>
          <AiFillContacts size={22}/>
          <AiFillPhone size={22}/>
        </div>
        <div className={css.textContainer}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
        </div>
        <button className={css.btn} onClick={() => dispatch(deleteContact(id))
        .unwrap()
        .then(() => {
        toast.success('Contact deleted');
      })
        .catch(() => {
        toast.error('Error deleting contact');
      })}>Delete</button>
      </li>
    </>
  );
};

export default Contact;
