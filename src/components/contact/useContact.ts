import { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

export const useContact = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [senderPhone, setSenderPhone] = useState<string>("");
  const [allowGettingEmail, setAllowGettingEmail] = useState<boolean>(true);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value);
  };

  const handleSenderNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSenderName(event.target.value);
  };

  const handleSenderEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSenderEmail(event.target.value);
  };

  const handleSenderPhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSenderPhone(event.target.value);
  };

  const handleallowGettingEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAllowGettingEmail(event.target.checked);
  };

  const addToSubscribers = async () => {
    let name = senderName.trim();
    if (name.length < 2) {
      setError("שם מלא חייב להכיל לפחות שני תווים");
      return;
    }

    let phone = senderPhone ? senderPhone.replace(/\D/g, "") : "";
    if (phone && !/^\d{9,10}$/.test(phone)) {
      setError("מספר טלפון לא תקין");
      return;
    }

    if (phone && !/^\d{3}-\d{7}$/.test(phone)) {
      setError("מספר טלפון לא תקין");
      return;
    }

    try {
      setIsLoading(true);
      const mylistId = import.meta.env.VITE_MAIN_LIST_ID;
      const subscriber = {
        name: name,
        email: senderEmail,
        phone: phone,
      };

      await axios.post(
        `https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`,
        subscriber
      );
      setIsMessageSent(true);
      setError("");
    } catch (err) {
      console.log(err);
      setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !message || !senderName || !senderEmail) {
      setError("יש למלא את כל השדות המסומנים בכוכבית");
      return;
    }
    if (!senderEmail.includes("@")) {
      setError("כתובת המייל אינה חוקית");
      return;
    }

    setIsLoading(true);
    setError("");

    let formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("senderName", senderName);
    formData.append("senderEmail", senderEmail);
    formData.append("senderPhone", senderPhone);

    const form = document.createElement("form");
    formData.forEach((value, key) => {
      const field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", key);
      field.setAttribute("value", value.toString());
      form.appendChild(field);
    });

    try {
      if (allowGettingEmail) {
        await addToSubscribers();
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form,
          import.meta.env.VITE_PUBLIC_KEY
        );
      } else {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form,
          import.meta.env.VITE_PUBLIC_KEY
        );
      }

      setIsMessageSent(true);
    } catch (err) {
      console.error(err);
      setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
    } finally {
      setIsLoading(false);
      setTitle("");
      setMessage("");
      setSenderEmail("");
    }
  };

  return {
    title,
    message,
    senderName,
    senderEmail,
    senderPhone,
    allowGettingEmail,
    isMessageSent,
    isLoading,
    error,
    handleTitleChange,
    handleMessageChange,
    handleSenderNameChange,
    handleSenderEmailChange,
    handleSenderPhoneChange,
    handleallowGettingEmailChange,
    handleSubmit
  };
};
