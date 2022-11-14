import React, {useEffect} from 'react'
import {ModalFooter} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Select from 'react-select'
import useModalAddForm from '../../hooks/components/inventory/useModalAddForm'
import useModal from '../../hooks/pages/useModal'
import useCategorySelect from '../../hooks/utils/useCategorySelect'
import useProviderSelect from '../../hooks/utils/useProviderSelect'
import '../../static/css/style.css'
import ModalScanner from './ModalScanner'

/*
properties of the add-product form
 */
interface Props {
    value: boolean
    handleClose: () => void
}

/**
 *
 * @param {boolean} value -
 * @param handleClose
 * @constructor
 */
export default function ModalAdd({value, handleClose}: Props) {
    const {product, handleProduct, handleChange, handleSubmit} =
        useModalAddForm()
    const {category, categoryOptions, categorySearch, handleCategory} =
        useCategorySelect({product, handleProduct})
    const {provider, providerOptions, providerSearch, handleProvider} =
        useProviderSelect({product, handleProduct})
    const {modal, handleScanner} = useModal.useModalScanner()

    return (
        <Modal show={value} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-center align-items-center'>
                    <form className='Auth-form'>
                        <div className='Auth-form-content'>
                            <div className='form-group mt-3'>
                                <label>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control mt-1'
                                    name={'name_product'}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mt-3'>
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
                            <div className='form-group mt-3'>
                                <label>Categoria</label>
                                <Select
                                    name={'id_categories'}
                                    options={category.options}
                                    inputValue={category.search}
                                    onChange={handleCategory}
                                    onInputChange={categorySearch}
                                    onKeyDown={categoryOptions}
                                    isSearchable={true}
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Proveedor</label>
                                <Select
                                    name={'id_providers'}
                                    options={provider.options}
                                    inputValue={provider.search}
                                    onChange={handleProvider}
                                    onInputChange={providerSearch}
                                    onKeyDown={providerOptions}
                                    isSearchable={true}
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Stock</label>
                                <input
                                    type='number'
                                    className='form-control mt-1'
                                    name={'stock'}
                                    defaultValue={0}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Precio</label>
                                <input
                                    type='number'
                                    className='form-control mt-1'
                                    name={'price'}
                                    defaultValue={0}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Costo</label>
                                <input
                                    type='number'
                                    className='form-control mt-1'
                                    name={'price'}
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
                <Button variant='secondary' onClick={handleClose}>
                    Cerrar
                </Button>
                <Button
                    variant='primary'
                    onClick={() => {
                        handleSubmit()
                        handleClose()
                    }}
                >
                    Agregar
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
        </Modal>
    )
}
