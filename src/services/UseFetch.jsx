import { useState, useEffect } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async (url) => {
            let response = await fetch(url)
            console.log(response)
            let responseJson = await response.json()
            setData(responseJson)
        }
        getData(url)
    }, [url]);
    return {data}
}

export default UseFetch