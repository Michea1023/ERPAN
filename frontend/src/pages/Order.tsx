import "../static/css/style.css";
import {useState} from 'react';
/*
renders the order page
@params {Props} ...
@returns {JSX.Element}
*/
export default function Order() {
  
  const[cantidad,setCantidad] = useState(0)
  
  return (
  
  <>
  
      <div className="container mt-5">
        <nav className='navbar navbar-light bg-light'>

        <form className="d-flex flex-row">
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
      
          <div className="ContainerProduct">
              <div className="Product">
                arroz
              </div>
              
              <div className="ColumnCount">
                <button type="button" className="btn btn-danger " onClick={() => {setCantidad(cantidad-1)}}>-</button>

                <p className= "Count">
                {cantidad}
                </p>  
                

                <button type="button" className="btn btn-success" onClick={() => {setCantidad(cantidad+1)}}>+</button>
                
              </div>

              
              
        
          </div>
          <div className="ContainerHR container mt-5">
          <div className=" w-50 border border-dark text-light bg-dark"></div>
          </div>

          <div className="ContainerProduct">
               <div className="Product">
                total
              </div>
          </div>
    
  </>
  
  )
}