import {useState} from "react";
import {useNavigate} from "react-router-dom";

const useInventory = () => {
    const [filter, setFilter] = useState<string>("")
    const navigate = useNavigate()

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(evt.target.value)
    }

    const handleClick = () => {
        navigate("/inventory/"+filter.replaceAll(" ", "+"))
    }

    return {handleChange, handleClick}
}

export default useInventory