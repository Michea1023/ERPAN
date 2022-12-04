import React from 'react'
import { Button, ModalFooter } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Select from 'react-select'
import useCategorySelect from '../../hooks/utils/useCategorySelect'
import useProviderSelect from '../../hooks/utils/useProviderSelect'
import { ProductResponse } from '../../types/response_types'
import useModalEditForm from '../../hooks/components/inventory/useModalEditForm'

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
export default function ModalEdit({
  product: item,
  value,
  handleClose,
}: Props) {
  const { product, handleProduct, handleChange, handleSubmit, handleDelete } =
    useModalEditForm(item)
  const { category, categorySearch, handleCategory } = useCategorySelect({
    product,
    handleProduct,
  })
  const { provider, providerSearch, handleProvider } = useProviderSelect({
    product,
    handleProduct,
  })

  return (
    <Modal show={value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar producto</Modal.Title>
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
                  defaultValue={item.name_product}
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
                    defaultValue={item.bar_code}
                    required
                  />
                </div>
              </div>
              <div className='form-group mt-3'>
                <label>Categoria</label>
                <Select
                  name={'id_categories'}
                  options={category.options}
                  inputValue={category.search}
                  defaultValue={{
                    value: item.id_categories,
                    label: item.id_categories,
                  }}
                  onChange={handleCategory}
                  onInputChange={categorySearch}
                  isSearchable={true}
                />
              </div>
              <div className='form-group mt-3'>
                <label>Proveedor</label>
                <Select
                  name={'id_providers'}
                  options={provider.options}
                  inputValue={provider.search}
                  defaultValue={{
                    value: item.id_providers,
                    label: item.id_providers,
                  }}
                  onChange={handleProvider}
                  onInputChange={providerSearch}
                  isSearchable={true}
                />
              </div>
              <div className='form-group mt-3'>
                <label>Stock</label>
                <input
                  type='number'
                  className='form-control mt-1'
                  name={'stock'}
                  defaultValue={item.stock}
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
                  defaultValue={item.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group mt-3'>
                <label>Cost</label>
                <input
                  type='number'
                  className='form-control mt-1'
                  name={'costo'}
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
        <Button
          className='btn-danger'
          variant='secondary'
          onClick={() => {
            handleDelete()
            handleClose()
          }}
        >
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-trash'
              viewBox='0 0 16 16'
            >
              <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
              <path
                fill-rule='evenodd'
                d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
              />
            </svg>
          </div>
        </Button>
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
          Guardar cambios
        </Button>
      </ModalFooter>
    </Modal>
  )
}
