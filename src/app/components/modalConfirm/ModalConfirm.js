import React from 'react'
import './modalConfirm.css'
// import { deleteReport } from '../../../services/deleteReport';
import "animate.css"

function ModalConfirm({ closeModal, id, deleteOnClick }) {
        
    return (
        <div className="modalBackground" onClick={closeModal}>
            <div className="modalContainer">

                <div className="titleCloseBtn">
                    <button onClick={closeModal}> X </button>
                </div>

                <div className="title">
                   <h2> Are you sure? </h2>
                </div>     

                <div className="body">
                    <p>Click continue if you really want to delete a report</p>    
                </div>  

                <div className="footer">
                    <button 
                    onClick={closeModal}
                    id="cancelBtn">Cancel</button>

                    <button 
                    onClick={()=>{deleteOnClick(id)}}
                    id="confirmBtn"
                    >Continue</button>
                </div>                   
            </div>         
        </div>
    )
}

export default ModalConfirm
