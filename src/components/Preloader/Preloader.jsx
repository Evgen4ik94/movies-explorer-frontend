import './Preloader.css';

function Preloader({ isOpen }) {
  return (
    <>
      { isOpen && (
          <div className="preloader">
            <div className="preloader__block">
              <span className="preloader__rotate-circle"></span>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Preloader;