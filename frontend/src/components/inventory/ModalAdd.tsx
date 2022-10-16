import React, {useState} from "react";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import useModalAddForm from "../../hooks/components/inventory/useModalAddForm";
import useCategorySelect from "../../hooks/utils/useCategorySelect";
import useProviderSelect from "../../hooks/utils/useProviderSelect";

interface Props {
    value: boolean
    handleClose: () => void
}

export default function ModalAdd ({value, handleClose}: Props) {
    const {product, handleProduct, handleChange, handleSubmit} = useModalAddForm()
    const {category, categoryOptions, categorySearch, handleCategory} =
        useCategorySelect({product, handleProduct})
    const {provider, providerOptions, providerSearch, handleProvider} =
        useProviderSelect({product, handleProduct})


    return (
        <Modal show={value} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex justify-content-center align-items-center">
                <form className="Auth-form" >
                    <div className="Auth-form-content">
                        <div className="form-group mt-3">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                name={"name_product"}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Codigo de Barras</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                name={"bar_code"}
                                onChange={handleChange}
                                required
                            />
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
                                defaultValue={0}
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
                                defaultValue={0}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={
                () => {
                    handleSubmit()
                    handleClose()
                }}>
                Agregar
            </Button>
        </ModalFooter>
        </Modal>
    )
}