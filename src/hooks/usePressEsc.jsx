import { useEffect } from 'react';

//Функция, осуществляющая закрытие по нажатию на Esc
function usePressEsc(callback, dependence) {
  useEffect(() => {
    if (dependence) {
      function closeOnEsc (evt) {
        if (evt.key === 'Escape') {
          callback() // Колбэк функция, вызываемая при нажатии на Esc
        }
      }
      // Добавим обработчик 
        document.addEventListener('keyup', closeOnEsc);
      // Удаляем обработчик
      return () => { document.removeEventListener('keyup', closeOnEsc)};
    }
  // eslint-disable-next-line
  }, [dependence])
}

export default usePressEsc;