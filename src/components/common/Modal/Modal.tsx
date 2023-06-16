import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (isOpen === false) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="relative bg-white">
        <div
          onClick={onClose}
          className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
