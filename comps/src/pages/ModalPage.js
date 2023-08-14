import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [isShowModal, setIsShowModal] = useState(false);
    const showModal = () => {
        setIsShowModal(true);
    }

    const closeModal = () =>{
        setIsShowModal(false);
    };

    const actionBar = <div>
        <p>
            <Button primary onClick={closeModal}> Accept </Button>
        </p>
    </div>;

    const modal = <Modal onClose={closeModal} actionBar={actionBar}>
        <p>
            Actions
        </p>
    </Modal>;

  return (
    <div className="relative">
        <Button primary onClick={showModal}> Open Modal</Button>
        {isShowModal && modal}
    </div>
  );
}

export default ModalPage;
