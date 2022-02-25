import { Modal } from "react-bootstrap";

export const ModalForm = ({ useFormRenderer, formData, isOpen, onClose }) => {
  const [title, form] = useFormRenderer(formData);

  return (
    <Modal
      dialogClassName="contained-modal"
      show={isOpen}
      onHide={onClose}
      aria-labelledby="modal-box"
    >
      <Modal.Header closeButton id="contained-modal-header">
        <Modal.Title>
          <h3 className="">{title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="contained-modal-body">{form}</Modal.Body>
    </Modal>
  );
};
