import SalesTable from '../components/salesHistory/SalesTable'
import useModal from '../hooks/pages/useModal'
/*
renders the sales history page
@params {Props} ...
@returns {JSX.Element}
*/
export default function SalesHistory() {
  const { modal, handleDetail } = useModal.useModalDetail()
  return (
    <>
      <SalesTable detail={modal.detail} handleDetail={handleDetail} />
    </>
  )
}
