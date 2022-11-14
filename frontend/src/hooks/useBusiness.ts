import {useState} from "react";

/*
null state for the business entity
 */
const null_value = {
    name: "",
    logged: false
}

/*
logged state for the business entity
 */
const logged_value = {
    name: String(window.localStorage.getItem("nameERPAN")),
    logged: true
}

/**
 * handle business entity
 * @returns {Business, (Business) => void}
 */
const useBusiness = () => {
    const [business, setBusiness] = useState<{
        name: string,
        logged: boolean
    }>((window.localStorage.getItem('nameERPAN') != null) ? logged_value : null_value)

    /*
    set a new business state
    @params {Business} new_business -> new business state
     */
    const handleBusiness = (new_business: typeof logged_value) => {
        setBusiness(new_business)
    }

    return {business, handleBusiness}
}

export default useBusiness