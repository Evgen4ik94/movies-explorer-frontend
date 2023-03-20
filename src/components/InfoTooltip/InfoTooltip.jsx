import './InfoTooltip.css';

import usePressEsc from '../../hooks/usePressEsc.jsx';

function InfoTooltip({ onClose, status: { isOpen, successful, text } }) {

  // Закрытие попапа клавишей Esc
  usePressEsc(onClose, isOpen);

  // Функция закрытия попапа кликом по оверлею (за счет всплытия)
  function handleCloseByOverlay(evt) {
    evt.stopPropagation();
  }

  return (
    <>
      <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`} onClick={onClose}>
        <div className="info-tooltip__block" onClick={handleCloseByOverlay}>
          <div className={`info-tooltip__status info-tooltip__status_${ successful ? 'success' : 'fail' }`}></div>
            <h2 className="info-tooltip__text">{text}</h2>
          <button type="button" className="info-tooltip__btn_close" onClick={onClose}></button>
        </div>
      </div>
    </>
  );
}

export default InfoTooltip;
