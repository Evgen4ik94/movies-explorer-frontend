import { useEffect, useCallback, useState } from 'react';

function useWidthScreen() {
    //Получаем текущую ширину экрана
  const getWidth = useCallback(() => window.innerWidth, []);
    
  const [screenWidth, setScreenWidth] = useState(getWidth());
  

  useEffect(() => {
    function handleChangeScreenWidth() {
        setScreenWidth(getWidth());
      };

    window.addEventListener('resize', resizeController, false); // Устанавливаем обработчик на изменение ширины

    let timeResize;

    function resizeController() {
        if (!timeResize) {
            timeResize = setTimeout(() => {
                timeResize = null;
            handleChangeScreenWidth();
        }, 1000); // 1 кадр/с
        }
    };

    return () => window.removeEventListener('resize', handleChangeScreenWidth);  // Удаляем обработчик
  }, [getWidth]);

  return screenWidth;
}

export default useWidthScreen;