import useForgotPassword from '../hooks/pages/useForgotPassword'

export default function ForgotPassword() {
  const { navigate, handleSubmit, handleChange } = useForgotPassword()

  return (
    <>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Cambiar contraseña</h3>
            <div className='form-group mt-3'>
              <label>Ingrese el email para cambiar la contraseña.</label>
            </div>
            <div className='form-group mt-3'>
              <input
                type='text'
                className='form-control mt-1'
                name={'email'}
                placeholder='Ingrese su correo electronico'
                onChange={handleChange}
              />
            </div>
            <div className='row mt-3 justify-content-end'>
              <button
                className='m-3 col btn btn-danger'
                onClick={() => navigate('/login')}
              >
                Cancelar
              </button>
              <button type='submit' className='m-3 col btn btn-success'>
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
