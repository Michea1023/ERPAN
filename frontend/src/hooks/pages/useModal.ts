import React, {useState} from "react";

const useModal = () => {
    const [modal, setModal] = useState<{
        add: boolean,
        edit: boolean
    }>({add: false, edit: false})

    const handleEdit = (input: boolean) => {
        setModal({
            ... modal,
            ["edit"]: input
        })
    }

    const handleAdd = (input: boolean) => {
        setModal({
            ...modal,
            ["add"]: input
        })
    }

    return {modal, handleAdd, handleEdit}
}

export default useModal