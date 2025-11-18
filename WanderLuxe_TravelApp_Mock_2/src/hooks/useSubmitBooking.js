// src/hooks/useSubmitBooking.js
import { useContext, useState } from "react";
import API from "../api/api"; // expects baseURL http://localhost:4000
import { BookingContext } from "../context/BookingContext";

export default function useSubmitBooking() {
  const { addBooking } = useContext(BookingContext);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (values) => {
    setSubmitting(true);
    try {
      const res = await API.post("/bookings", values);
      addBooking(res.data);
      return { success: true, data: res.data };
    } catch (err) {
      return { success: false, error: err };
    } finally {
      setSubmitting(false);
    }
  };

  return { submitting, submit };
}
