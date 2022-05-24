import {Link, Outlet} from "react-router-dom";
import classes from "../assets/styles/App.module.css";

const DashboardLayout = () => {
    return (
        <div className={`${classes['App']} ${classes['App-header']}`}>
            <h1>Dashboard Layout</h1>
            <Link to='/dashboard/'>Dashboard</Link>
            <Link to='login/'>Login</Link>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout