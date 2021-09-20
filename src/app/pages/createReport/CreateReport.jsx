import React from "react";
import { useState } from "react";
import ModalConfirm from "../../components/modalConfirm/ModalConfirm";

const CreateReport = () => {

    const [openModal, setOpenModal] = useState(true);

    return(
        <>
        <h1>Create will be soon...</h1>
        <button 
        className="openModalBtn" 
        onClick={() => {setOpenModal(true)}}>Open modal</button>
        {openModal && <ModalConfirm closeModal={setOpenModal} />}
        </>
    )
};

export default CreateReport;