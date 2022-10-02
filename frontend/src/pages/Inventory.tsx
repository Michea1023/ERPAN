import React from 'react';
import "../static/css/style.css";

export default function Inventory () {
    return <div>
        <div className='container mt-2'>
            <div className='container'>
                <nav className="navbar navbar-light bg-light">
                    <form className="d-flex flex-row">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        

            <div className='gridButton'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle item1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle item2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <button type="button" className="btn btn-outline-success item3">Nuevo producto +</button>
            </div>
        </div>        
        <div className='container mt-2'>
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
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Coca Cola 1L</td>
                        <td>Bebida</td>
                        <td>Coca Cola</td>
                        <td>10</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Coca Cola 1L</td>
                        <td>Bebida</td>
                        <td>Coca Cola</td>
                        <td>10</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Coca Cola 1L</td>
                        <td>Bebida</td>
                        <td>Coca Cola</td>
                        <td>10</td>
                        <td>1500</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


}