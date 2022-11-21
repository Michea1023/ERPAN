import useChangePassword from '../hooks/pages/useChangePassword'

/*
properties of the forgot password page
 */
interface Props {
  handleBusiness: (new_business: { name: string; logged: boolean }) => void
}

/*
renders the forgot password page
@param {Props} handleBusiness - params coming from above
@returns {JSX.Element}
*/
export default function ChangePassword({ handleBusiness }: Props) {
  const { navigate, handleSubmit, handleChange } = useChangePassword()
  return (
    <>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Cambiar contraseña</h3>
            <div className='form-group mt-3'>
              <label>Ingrese la contraseña actual.</label>
            </div>
            <div className='form-group mt-3'>
              <input
                type='text'
                className='form-control mt-1'
                name={'password'}
                placeholder='Ingrese contraseña'
                onChange={handleChange}
              />
            </div>

            <div className='form-group mt-3'>
              <label>Ingrese la contraseña nueva.</label>
            </div>
            <div className='form-group mt-3'>
              <input
                type='text'
                className='form-control mt-1'
                name={'passwordNew'}
                placeholder='Ingrese contraseña'
                onChange={handleChange}
              />
            </div>

            <div className='form-group mt-3'>
              <label>Repite la nueva contraseña.</label>
            </div>
            <div className='form-group mt-3'>
              <input
                type='text'
                className='form-control mt-1'
                name={'passwordConfirm'}
                placeholder='Ingrese contraseña'
                onChange={handleChange}
              />
            </div>

            <div className='row mt-3 justify-content-end'>
              <button
                className='m-3 col btn btn-danger'
                onClick={() => navigate('/')}
              >
                Cancelar
              </button>
              <button type='submit' className='m-3 col btn btn-success'>
                Cambiar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
