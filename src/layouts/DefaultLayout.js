import {Link, Outlet} from "react-router-dom";
import classes from "../assets/styles/App.module.css";

const DefaultLayout = () => {
    return (
        <div className={`${classes['App']} ${classes['App-header']}`}>
            <h1>Default Layout</h1>
            <Link to='/'>Home</Link>
            <Link to='users/'>Users Page</Link>
            <Outlet/>
        </div>
    )
}

export default DefaultLayout