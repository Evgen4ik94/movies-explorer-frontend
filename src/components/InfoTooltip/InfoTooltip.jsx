import './InfoTooltip.css';

import usePressEsc from '../../hooks/usePressEsc.jsx';

function InfoTooltip({ onClose, status: { isOpen, successful, text } }) {
  
  function handleCloseByOverlay(evt) {
    console.log('Done!')
    evt.stopPropagation();
  }

  usePressEsc(onClose, isOpen);

  return (
    <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`} onClick={onClose}>
      <div className="info-tooltip__block" onClick={handleCloseByOverlay}>
        <div className={`info-tooltip__status ${ successful ? 'info-tooltip__status_success' : 'info-tooltip__status_fail' }`}></div>
        <h2 className="info-tooltip__text">{text}</h2>

        <button type="button" className="info-tooltip__btn_close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
