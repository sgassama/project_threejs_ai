import {motion} from 'framer-motion';
import {pageTransitionsAnimation} from "../config/motion.js";
import {ContactMeForm} from "../components/ContactMeForm.tsx";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const Contact = () => {
  const emptyForm = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(emptyForm);
  const data = {
    requesterName: formData.name,
    requesterEmail: formData.email,
    requesterMessage: formData.message,
  };
  const shouldDisableForm = !formData.name || !formData.email ||
    !formData.message;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    const toastOpts = {duration: 3000};
    try {
      await axios.post(`/api/send-contact-email`, {
        requesterName: data.requesterName,
        requesterEmail: data.requesterEmail,
        requesterMessage: data.requesterMessage,
        headers,
      });
      toast.success('Your email has been sent!', toastOpts);
      setFormData(() => emptyForm);

    } catch (e) {
      toast.error(
        'There was a problem processing your request. Please try again later.',
        toastOpts);
      return;
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <motion.main className={`essgee-page !pb-[100px]`}
                 variants={pageTransitionsAnimation}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 key="contact"
    >
      <ContactMeForm onSubmit={handleSubmit}
                     formData={formData}
                     onChange={handleChange}
                     disabled={shouldDisableForm}
      />
    </motion.main>
  );
};

export default Contact;
