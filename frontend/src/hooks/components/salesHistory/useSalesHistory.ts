import { useEffect, useState } from 'react'
import all_tickets from '../../../services/orders/all_tickets'
import { TicketList } from '../../../types/response_types'


const useSalesHistory = () => {
  const [tickets, setTicket] = useState<TicketList>([])

  useEffect(() => {
    all_tickets().then((res) => {
      if (res == undefined) return

      setTicket(res)
    })
  }, [])
  return { tickets }
}

export default useSalesHistory
