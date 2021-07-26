import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { fetchAllResults } from "../redux/repositories";

const Dispacher = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllResults(
        ))
    }, [dispatch])

    return null
}

export default Dispacher