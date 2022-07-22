import Input from "./components/Input";
import "./styles/styles.css";
const MyModal = ({ show, children }) => {
  if (!show) return <></>;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
