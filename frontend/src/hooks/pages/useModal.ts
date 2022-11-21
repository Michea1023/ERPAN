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

const useModalDetail = () => {
  const [modal, setModal] = useState<{
    detail: boolean
  }>({ detail: false })

  const handleDetail = (input: boolean) => {
    setModal({
      ...modal,
      ['detail']: input,
    })
  }

  return { modal, handleDetail }
}

const useModalResume = () => {
  const [modalResume, setModal] = useState<{
    resume: boolean
  }>({ resume: false })

  const handleResume = (input: boolean) => {
    setModal({
      ...modalResume,
      ['resume']: input,
    })
  }

  return { modalResume, handleResume }
}

export default { useModal, useModalScanner, useModalDetail, useModalResume }
