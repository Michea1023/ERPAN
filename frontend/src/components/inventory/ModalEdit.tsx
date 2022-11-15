import React from "react";
import {ModalFooter} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import useCategorySelect from "../../hooks/utils/useCategorySelect";
import useProviderSelect from "../../hooks/utils/useProviderSelect";
import {ProductResponse} from "../../types/response_types";
import useModalEditForm from "../../hooks/components/inventory/useModalEditForm";
import useModal from "../../hooks/pages/useModal";
import ModalScanner from "./ModalScanner";

/*
properties of the edit-product form
 */
interface Props {
    product: ProductResponse
    value: boolean
    handleClose: () => void
}

/*
renders the edit-product form
@param {Props} product, value, handleClose - params coming from above
@returns {JSX.Element}
 */
export default function ModalEdit({product: item, value, handleClose}: Props) {
    const {product, handleProduct, handleChange, handleSubmit, handleDelete} = useModalEditForm(item)
    const {category, categoryOptions, categorySearch, handleCategory} =
        useCategorySelect({product, handleProduct})
    const {provider, providerOptions, providerSearch, handleProvider} =
        useProviderSelect({product, handleProduct})
    const {modal, handleScanner} = useModal.useModalScanner()

    return (<Modal show={value} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex justify-content-center align-items-center">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <div className="form-group mt-3">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name={"name_product"}
                                onChange={handleChange}
                                defaultValue={item.name_product}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Codigo de Barras</label>
                            <div className='custom-search'>
                                <input
                                    type='number'
                                    className='form-control mt-1 custom-search-input'
                                    name={'bar_code'}
                                    onChange={handleChange}
                                    defaultValue={product.bar_code}
                                    required
                                />
                                <button
                                    type='button'
                                    className='align-self-center ms-auto btn btn-outline-success custom-search-botton'
                                    onClick={() => handleScanner(true)}
                                >
                                    Camara
                                </button>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Categoria</label>
                            <Select
                                name={"id_categories"}
                                options={category.options}
                                inputValue={category.search}
                                onChange={handleCategory}
                                onInputChange={categorySearch}
                                onKeyDown={categoryOptions}
                                isSearchable={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Proveedor</label>
                            <Select
                                name={"id_providers"}
                                options={provider.options}
                                inputValue={provider.search}
                                onChange={handleProvider}
                                onInputChange={providerSearch}
                                onKeyDown={providerOptions}
                                isSearchable={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Stock</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"stock"}
                                defaultValue={item.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Precio</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"price"}
                                defaultValue={item.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Cost</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"cost"}
                                defaultValue={item.cost}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <ModalFooter>
            <Button className="btn-danger" variant="secondary" onClick={() => {
                handleDelete()
                handleClose()
            }}>
                Eliminar producto
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={() => {
                handleSubmit()
                handleClose()
            }}>
                Guardar cambios
            </Button>
        </ModalFooter>
        <ModalScanner
            handleBarCode={(bar_code: string) => {
                handleProduct({
                    ... product,
                    ["bar_code"]: bar_code
                })
            }}
            value={modal.scanner}
            handleClose={() => handleScanner(false)}
        />
    </Modal>)
}