import OrderItem from '../components/order/OrderItem'
import '../static/css/style.css'
import { useState } from 'react'
import ModalScanner from '../components/inventory/ModalScanner'
import useModal from '../hooks/pages/useModal'
import useOrderFetch from '../hooks/components/order/useOrderFetch'
/*
renders the orders page
@params {Props} ...
@returns {JSX.Element}
*/
export default function Order() {
  const { fetch, handleChange, handleBarCode, handleSubmit } = useOrderFetch()
  const { modal, handleScanner } = useModal.useModalScanner()

  return (
    <>
      <div className='container mt-5'>
        <nav className='navbar navbar-light bg-light'>
          <form className='d-flex flex-row' onSubmit={handleSubmit}>
            <div className='custom-search'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                defaultValue={fetch.search}
                onChange={handleChange}
              ></input>
              <button
                type='button'
                className='align-self-center ms-auto btn btn-outline-success custom-search-botton'
                onClick={() => handleScanner(true)}
              >
                Camara
              </button>
            </div>

            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </nav>
      </div>
      {fetch.result != null ? (
        fetch.result.map((item) => {
          return <OrderItem item={item} />
        })
      ) : (
        <></>
      )}
      <div className='ContainerHR container mt-5'>
        <div className=' w-50 border border-dark text-light bg-dark'></div>
      </div>

      <div className='ContainerProduct'>
        <div className='Product'>
          <div className='name'>Total</div>
          <div className='price'> {fetch.sum} </div>
        </div>

        <div className='ColumnCount'>
          <button className='btn btn-success' type='button'>
            Finalizar Compra
          </button>
        </div>
      </div>
      <ModalScanner
        handleBarCode={(bar_code: string) => {
          handleBarCode(bar_code)
        }}
        value={modal.scanner}
        handleClose={() => handleScanner(false)}
      />
    </>
  )
}
