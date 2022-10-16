import React, {useState} from "react";
import search_categories from "../../services/categories/search_categories";

const INITIAL_VALUE = {
    search: "",
    options: [{
        id: 0,
        value: "",
        label: ""
    }]
}

const useCategorySelect = () => {
    const [state, setState] = useState(INITIAL_VALUE)

    const handleOptions = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key === " ") {
            // search_categories(state.search).then((response) => {
            //     // set options
            // })
        }
    }

    const handleSearch = (newValue: string) => {
        setState({
            ...state,
            search: newValue
        })
    }

    return {category: state, handleOptions, handleSearch}
}

export default useCategorySelect