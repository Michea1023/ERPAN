import React from 'react'
import '../static/css/style.css'
import ModalAdd from '../components/inventory/ModalAdd'
import useModal from '../hooks/pages/useModal'
import InventoryTable from '../components/inventory/InventoryTable'
import useInventory from "../hooks/pages/useInventory";

/*
renders the inventory page
@returns {JSX.Element}
*/
export default function Inventory() {
    const {modal, handleAdd, handleEdit} = useModal.useModal()
    const {handleChange, handleClick} = useInventory()

    return (
        <>
            <div>
                <div className='container mt-2'>
                    <div className='container'>
                        <nav className='navbar navbar-light bg-light'>
                            <form className='d-flex flex-row'>
                                <input
                                    className='form-control mr-sm-2'
                                    type='search'
                                    placeholder='Search'
                                    aria-label='Search'
                                    onChange={handleChange}
                                ></input>
                                <div className='m-2'></div>
                                <button
                                    className='btn btn-outline-success my-2 my-sm-0'
                                    type='submit'
                                    onClick={handleClick}
                                >
                                    Search
                                </button>
                            </form>
                        </nav>
                    </div>
                </div>

                <div className='container mt-3'>
                    <div className='d-flex flex-row-reverse justify-content-center align-items-center'>
                        <button
                            type='button'
                            className='align-self-center ms-auto btn btn-outline-success item3'
                            onClick={() => handleAdd(true)}
                        >
                            Nuevo producto +
                        </button>
                    </div>
                </div>

                <InventoryTable edit={modal.edit} handleEdit={handleEdit}/>
            </div>

            <ModalAdd value={modal.add} handleClose={() => handleAdd(false)}/>
        </>
    )
}
