import { HOST } from '../../settings'
import { TicketList } from '../../types/response_types'

/*
send a request [GET] to HOST/products to get all products
@returns {Promise<Array<ProductList>>}
*/
const all_tickets = (): Promise<TicketList> => {
  return fetch(HOST + 'tickets', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('tokenERPAN'),
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error('Bad Response: ' + String(response.status))
      return response.json()
    })
    .then((response) => {
      return response
    })
    .catch((err) => {
      alert(err)
    })
}

export default all_tickets
