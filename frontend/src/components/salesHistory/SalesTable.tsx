import useSalesHistory from '../../hooks/components/salesHistory/useSalesHistory'
import ModalDetail from './ModalDetail'
import {useState} from "react";
import {Ticket} from "../../types/response_types";

interface Props {
    detail: boolean
    handleDetail: (detail: boolean) => void
}

const INITIAL_VALUE = {
    id: 0,
    id_business: 0,
    general_price: 0,
    selled_date: '',
    selled_time: '',
}

export default function SalesTable({detail, handleDetail}: Props) {
    const {tickets} = useSalesHistory()
    const [ticket, setTicket] = useState<Ticket>(INITIAL_VALUE)

    const detailsButton = (ticket: Ticket) => {
        return (
            <button
                type='button'
                className='btn btn-outline-success'
                onClick={() => {
                    setTicket(ticket)
                    handleDetail(true)
                }}
            >
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        className='bi bi-plus'
                        viewBox='0 0 16 16'
                    >
                        <path
                            d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/>
                    </svg>
                </div>
            </button>
        )
    }
    return (
        <div className='container mt-3 table-responsive'>
            <div className='row'>
                <div className='col'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Monto</th>
                            <th>Detalles</th>
                        </tr>
                        </thead>
                        <tbody>
                        <>
                            {tickets.map((ticket) => {
                                return (
                                    <tr>
                                        <td>{ticket.id.toString()}</td>
                                        <td>{ticket.selled_date}</td>
                                        <td>{ticket.selled_time}</td>
                                        <td>{ticket.general_price}</td>
                                        <td>{detailsButton(ticket)}</td>
                                    </tr>
                                )
                            })}
                        </>
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalDetail ticket={ticket} value={detail} handleClose={() => handleDetail(false)}/>
        </div>
    )
}
