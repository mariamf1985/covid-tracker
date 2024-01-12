import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getData = async (url) => {
            let response = await fetch(url)
            // console.log(response)
            let responseJson = await response.json()
            setData(responseJson)
            setLoading(false);

        }
        getData(url)
    }, [url]);
    return {data, loading}
    return {data, loading}
}

export default useFetch