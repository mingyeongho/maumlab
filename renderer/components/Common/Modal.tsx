import { ModalProps } from "../utils/interface";

const Modal = ({ children, setIsModal }: ModalProps) => {
  const onClick = () => {
    const portal = document.getElementById("portal");
    portal.style.display = "none";
    setIsModal(false);
  };

  return (
    <>
      <div className="modal">
        <span className="x_mark" onClick={onClick}>
          X
        </span>
        {children}
      </div>
      <style jsx>
        {`
          .modal {
            width: 250px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 10px;
            position: relative;
          }

          .x_mark {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-weight: bolder;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

export default Modal;
