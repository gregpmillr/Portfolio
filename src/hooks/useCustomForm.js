import { useState, useEffect, useRef } from "react";

const useCustomForm = ({
  initialValues,
  onSubmit
}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useCustomForm;