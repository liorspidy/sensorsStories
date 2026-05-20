import { useState, useEffect } from "react";
import axios from "axios";

export const useCommunity = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [subscriberName, setSubscriberName] = useState<string>("");
  const [subscriberEmail, setSubscriberEmail] = useState<string>("");
  const [subscriberPhone, setSubscriberPhone] = useState<string>("");
  const [subscriberError, setSubscriberError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sumbitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let name = subscriberName.trim();
    if (name.length < 2) {
      setSubscriberError("שם מלא חייב להכיל לפחות שני תווים");
      return;
    }

    let phone = subscriberPhone.replace(/\D/g, "");
    if (!/^\d{9,10}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }

    phone = phone.replace(/^0?(\d{2})(\d{3})(\d{4})$/, "0$1-$2$3");

    if (!/^\d{3}-\d{7}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }

    try {
      setIsLoading(true);
      const mylistId = import.meta.env.VITE_MAIN_LIST_ID;
      const subscriber = {
        name: name,
        email: subscriberEmail,
        phone: phone,
      };

      await axios.post(
        `https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`,
        subscriber
      );

      setIsSubmitted(true);
      setSubscriberError("");
      setSubscriberName("");
      setSubscriberEmail("");
      setSubscriberPhone("");
    } catch (err) {
      console.log(err);
      setSubscriberError(
        "קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים"
      );
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 200000);
    }
  };

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          "https://sensorsstoriesbackend.glitch.me/ravmesser/getLists"
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getSubscribers = async () => {
      try {
        const mylistId = import.meta.env.VITE_MAIN_LIST_ID;
        const res = await axios.get(
          `https://sensorsstoriesbackend.glitch.me/ravmesser/getSubscribers/${mylistId}`
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // getLists();
    // getSubscribers();
  }, []);

  return {
    isSubmitted,
    subscriberName,
    setSubscriberName,
    subscriberEmail,
    setSubscriberEmail,
    subscriberPhone,
    setSubscriberPhone,
    subscriberError,
    isLoading,
    sumbitHandler
  };
};
