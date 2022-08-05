import { useState } from "react";

export const useForm = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const reset = () => setForm(initialValues);

  return { form, handleChange, handleSubmit, reset };
};
