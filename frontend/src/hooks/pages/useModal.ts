import { useState } from 'react'

/*
selects the modal of inventory form
@returns    {
            {edit: boolean, add: boolean},
            (boolean) => void,
            (boolean) => void
            }
 */
const useModal = () => {
  const [modal, setModal] = useState<{
    add: boolean
    edit: boolean
  }>({ add: false, edit: false })

  /*
    sets edit's modal true or false
    @param {boolean} input
     */
  const handleEdit = (input: boolean) => {
    setModal({
      ...modal,
      ['edit']: input,
    })
  }

  /*
    sets add modal true or false
    @param {boolean} input
     */
  const handleAdd = (input: boolean) => {
    setModal({
      ...modal,
      ['add']: input,
    })
  }

  return { modal, handleAdd, handleEdit }
}

const useModalScanner = () => {
  const [modal, setModal] = useState<{
    scanner: boolean
  }>({ scanner: false })

  /*
    sets scanner modal true or false
    @param {boolean} input
     */
  const handleScanner = (input: boolean) => {
    setModal({
      ...modal,
      ['scanner']: input,
    })
  }

  return { modal, handleScanner }
}

export default { useModal, useModalScanner }
