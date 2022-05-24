import {Outlet} from "react-router-dom";
import classes from "../assets/styles/App.module.css";

const DashboardLayout = () => {
    return (
        <div className={`${classes['App']} ${classes['App-header']}`}>
            <h1>Dashboard Layout</h1>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout