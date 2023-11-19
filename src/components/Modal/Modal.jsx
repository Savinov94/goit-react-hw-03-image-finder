import css from './Modal.module.css';

const Modal = ({ selectedImage, onClose }) => {
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.container} onClick={handleOverlayClick}>
      <div className={css.modalContent}>
        <img className={css.images} src={selectedImage} alt="images" />
      </div>
    </div>
  );
};

export default Modal;
