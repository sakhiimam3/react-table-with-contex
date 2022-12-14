import React, {useState} from 'react';
import {useEffect} from 'react';
import Modal from 'react-modal';
import { useGlobalContex } from "../contexapi/TableContex"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "40%"
    }
};


function TableModal() {
   const {addtoTable}=useGlobalContex()
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: ""
    })


    console.log(inputField)
    useEffect(() => {
        Modal.setAppElement('body');
    }, [])


    function openModal() {
        setIsOpen(true);
    }
    console.log(inputField)


    function afterOpenModal() { // references are now sync'd and can be accessed.
        subtitle.style.color = 'white';
        subtitle.style.textalign = "center";
    }
    // inputs handler
    const inputsHandler = (e) => {

        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })

    }


    const addButton = (e) => {
        e.preventDefault()
        if (inputField ?. name !== "" && inputField ?. email !== "" && inputField ?. phone !== "" && inputField ?. address !== "" && inputField ?. city !== "") {
            addtoTable(inputField)

        } else {
            alert("please fill all input")
        }
        setInputField({
            name: "",
            email: "",
            phone: "",
            address: "",
            city: ""

        })
        setIsOpen(false);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Add Table</button>
            <Modal isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={
                    (_subtitle) => (subtitle = _subtitle)
                }>Add Table</h2>

                <form className='table_form'
                    onSubmit={addButton}>

                    <div className="mb-3">
                        <label>
                            Name</label>
                        <br/>
                        <input type="text" name="name" placeholder='name' defaultValue ={inputField?.name }
                            onChange={inputsHandler}/>

                    </div>
                    <div className="mb-3">
                        <label>
                            Email</label>
                        <br/>
                        <input type="text" name="email" placeholder='email' defaultValue ={inputField?.email}
                            onChange={inputsHandler}/>

                    </div>
                    <div className="mb-3">
                        <label>
                            Phone</label>
                        <br/>
                        <input type="text" name="phone" placeholder='number' defaultValue ={inputField?.phone}
                            onChange={inputsHandler}/>

                    </div>
                    <div className="mb-3">
                        <label>
                            address</label>
                        <br/>
                        <input type="text" name="address" placeholder='address' defaultValue ={inputField?.address}
                            onChange={inputsHandler}/>

                    </div>
                    <div className="mb-3">
                        <label>
                            City</label>
                        <br/>
                        <input type="text" name="city" placeholder='city' defaultValue ={inputField?.city}
                            onChange={inputsHandler}/>

                    </div>
                    <div className='modal_btn_bottom'>
                        <button type="submit">Add</button>
                        <button onClick={closeModal}>close</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default TableModal
