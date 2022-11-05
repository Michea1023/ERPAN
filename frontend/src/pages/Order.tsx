import { Button } from 'react-bootstrap'

/*
renders the order page
@params {Props} ...
@returns {JSX.Element}
*/
export default function Order() {
  return (
    <>
      <div>
        <div className='container mt-2'>
          <div className='container'>
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
            <ul>
              <li>
                <div className='name'>uuuwu</div>
                <div className='price'>aaaaaaaaa</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
