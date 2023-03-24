import { useState, useCallback } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export default function useValidationForm() {

  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeForm = (evt) => {
    const input = evt.target;
    const { value, name } = input;

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя может содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (isEmail(value)) {
        input.setCustomValidity('');
      } else {
          input.setCustomValidity('Введен некорректый адрес электронной почты.');
      }
    }

    setValues({ ...values, [name]: value }); // Обработка полей
    setErrors({ ...errors, [name]: input.validationMessage }); // Обработка ошибок
    setIsValid(input.closest('form').checkValidity()); // Проверка полей на валидность
  };

  

  // Функция для сброса полей формы, ошибок
  const resetFormInputs = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChangeForm, resetFormInputs, setIsValid, errors, isValid };
}
