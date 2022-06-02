import {useMemo, useState} from "react";
import OptimisedComponent from "../components/pages/OptimisedComponent";

const DashboardPage = () => {
    const [name, setName] = useState('My first name')
    const handleChange = () => {
        setName('My second name')
    }
    const neverChangedName = useMemo(() => ([1, 2, 3]), [])
    return (
        <>
            <h2>
                Dashboard Page
            </h2>
            <p>{name}</p>
            <OptimisedComponent name={neverChangedName}/>
            <button onClick={handleChange}>Change and update</button>
        </>
    )
}

export default DashboardPage