import React, { useEffect } from 'react'
import { ModalFooter } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
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
export default function ModalAdd({ value, handleClose }: Props) {
  const { product, handleProduct, handleChange, handleSubmit } =
    useModalAddForm()
  const { category, categoryOptions, categorySearch, handleCategory } =
    useCategorySelect({ product, handleProduct })
  const { provider, providerOptions, providerSearch, handleProvider } =
    useProviderSelect({ product, handleProduct })
  const { modal, handleScanner } = useModal.useModalScanner()

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
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-camera'
                        viewBox='0 0 16 16'
                      >
                        <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z' />
                        <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z' />
                      </svg>
                    </div>
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
                  name={'cost'}
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
            ...product,
            ['bar_code']: bar_code,
          })
        }}
        value={modal.scanner}
        handleClose={() => handleScanner(false)}
      />
    </Modal>
  )
}
