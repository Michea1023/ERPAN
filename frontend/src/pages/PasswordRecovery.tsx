import { useNavigate } from 'react-router-dom'

export default function PasswordRecovered() {
  const navigate = useNavigate()
  return (
    <>
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Correo enviado</h3>
            <div className='form-group mt-4'>
              <label>
                Se le ha enviado un correo al email ingresado con la contraseña.
              </label>
              <label>Haga click en volver para iniciar sesion.</label>
            </div>

            <div className='row mt-3 justify-content-end'>
              <button
                type='submit'
                className='m-3 col btn btn-success'
                onClick={() => navigate('/login')}
              >
                Volver
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
