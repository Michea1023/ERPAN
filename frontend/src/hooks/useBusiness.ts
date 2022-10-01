import {useState} from "react";

const null_value = {
    name: "",
    logged: false
}

const logged_value = {
    name: String(window.localStorage.getItem("nameERPAN")),
    logged: true
}

const useBusiness = () => {
    const [business, setBusiness] = useState<{
        name: string,
        logged: boolean
    }>((window.localStorage.getItem('nameERPAN') != null) ? logged_value: null_value)

    const handleBusiness = (new_business: typeof logged_value) => {
        setBusiness(new_business)
    }

    return {business, handleBusiness}
}

export default useBusiness