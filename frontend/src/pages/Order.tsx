import OrderItem from '../components/order/OrderItem'
import '../static/css/style.css'
import { useState } from 'react'
import ModalScanner from '../components/inventory/ModalScanner'
import useModal from '../hooks/pages/useModal'
import useOrderFetch from '../hooks/components/order/useOrderFetch'
import useOrder from '../hooks/components/order/useOrder'
/*
renders the orders page
@params {Props} ...
@returns {JSX.Element}
*/
export default function Order() {
  const { fetch, handleChange, handleBarCode, handleSubmit } = useOrderFetch()
  const { order, handleAmount, handleOrder } = useOrder(fetch.result)
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
        order.products.map((item) => {
          return <OrderItem item={item} handleAmount={handleAmount} />
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
          <div className='price'> {order.general_price} </div>
        </div>

        <div className='ColumnCount'>
          <button
            className='btn btn-success'
            type='button'
            onClick={handleOrder}
          >
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
