import { useState, useCallback } from 'react';

export default function useValidationForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeForm = (e) => {
    const input = e.target;
    const { value, name } = input;
    setValues({ ...values, [name]: value }); // универсальный обработчик полей
    setErrors({ ...errors, [name]: input.validationMessage }); // ошибок
    setIsValid(input.closest('form').checkValidity()); // проверка валидности
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => { // это метод для сброса формы, полей, ошибок
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChangeForm, resetForm, errors, isValid };
}
