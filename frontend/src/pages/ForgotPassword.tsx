interface Props {
    handleBusiness: (new_business: {name: string, logged: boolean}) => void
}
export default function ForgotPassword({handleBusiness}: Props) {
    return(
        <>
          <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Cambiar contraseña</h3>
                    <div className="form-group mt-3">
                    <label>Ingrese el email para cambiar la contraseña.</label>
                    </div>
                    <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control mt-1"
                        name={"email"}
                        placeholder="Ingrese su correo electronico"
                       
                        />
                    </div>
                    <div className="row mt-3 justify-content-end">
                        <button type="submit" className="m-3 col btn btn-danger">
                                Cancelar
                        </button>
                        <button type="submit" className="m-3 col btn btn-success">
                                Enviar
                                </button>
                    </div>


                </div>
            </form>
          </div>


        </>
    )

}