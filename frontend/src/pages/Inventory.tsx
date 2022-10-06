import React,{useState} from 'react';
import "../static/css/style.css";
import ModalEdit from '../components/inventory/ModalEdit';
import ModalAdd from '../components/inventory/ModalAdd';
import useModal from "../hooks/pages/useModal";

export default function Inventory () {
    const {modal, handleAdd, handleEdit} = useModal()

    const edit = () =>{
        return <button type="button" className="btn btn-outline-success"
                       onClick={() => handleEdit(true)}>Editar</button>
    }

    return <>
        <div>
            <div className='container mt-2'>
                <div className='container'>
                    <nav className="navbar navbar-light bg-light">
                        <form className="d-flex flex-row">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </div>
            </div>

            <div className='container mt-3'>
                <div className="d-flex flex-row-reverse justify-content-center align-items-center">
                    <button type="button" className="align-self-center ms-auto btn btn-outline-success item3"
                            onClick={() => handleAdd(true)}>Nuevo producto +</button>
                    <div className="dropdown">
                        <button className="m-3 btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categoria
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Bebida</button>
                            <button className="dropdown-item" type="button">Galletas</button>
                            <button className="dropdown-item" type="button">Salsas</button>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Proveedor
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">CCU</button>
                            <button className="dropdown-item" type="button">CCU</button>
                            <button className="dropdown-item" type="button">CCU</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mt-3 table-responsive'>
                <div className='row'>
                    <div className='col'>
                        <table className='table table-striped table-hover table-bordered'>
                        <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Proveedor</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Editar</th>
                        </tr>
                        </thead>
                        <tbody >
                        <tr>
                            <td>1</td>
                            <td>Pepsi 1L</td>
                            <td>Bebida</td>
                            <td>CCU</td>
                            <td>5</td>
                            <td>1000</td>
                            <td>{edit()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Coca Cola 1L</td>
                            <td>Bebida</td>
                            <td>Coca Cola</td>
                            <td>10</td>
                            <td>1500</td>
                            <td>{edit()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Coca Cola 1L</td>
                            <td>Bebida</td>
                            <td>Coca Cola</td>
                            <td>10</td>
                            <td>1500</td>
                            <td>{edit()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Coca Cola 1L</td>
                            <td>Bebida</td>
                            <td>Coca Cola</td>
                            <td>10</td>
                            <td>1500</td>
                            <td>{edit()}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <ModalEdit value={modal.edit} handleClose={() => handleEdit(false)}  />
        <ModalAdd value={modal.add} handleClose={() => handleAdd(false)} />
    </>

}