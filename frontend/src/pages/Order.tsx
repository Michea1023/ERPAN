import OrderTable from '../components/order/OrderTable'
import '../static/css/style.css'
/*
renders the order page
@params {Props} ...
@returns {JSX.Element}
*/
export default function Order() {
  return (
    <>
      <div className='container mt-5'>
        <nav className='navbar navbar-light bg-light'>
          <form className='d-flex flex-row'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            ></input>
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </nav>
      </div>
      <OrderTable />
      <div className='ContainerHR container mt-5'>
        <div className=' w-50 border border-dark text-light bg-dark'></div>
      </div>

      <div className='ContainerProduct'>
        <div className='Product'>
          <div className='name'>Total</div>
          <div className='price'>2000</div>
        </div>

        <div className='ColumnCount'>
          <button className='btn btn-success' type='button'>
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  )
}
