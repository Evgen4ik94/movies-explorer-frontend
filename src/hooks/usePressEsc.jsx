import { useEffect } from 'react';

function usePressEsc(callback, dependency) {
  useEffect(() => {
    if (dependency) {
      const closeOnEsc = evt => {
        if (evt.key === 'Escape') {
          callback()
        }
      }
      // Добавим обработчик
        document.addEventListener('keyup', closeOnEsc);
      // Удаляем обработчик
        return () => {
        document.removeEventListener('keyup', closeOnEsc)
      };
    }
  // eslint-disable-next-line
  }, [dependency])
}

export default usePressEsc;