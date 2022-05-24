import {Outlet} from "react-router-dom";
import classes from "../assets/styles/App.module.css";

const DefaultLayout = () => {
    return (
        <div className={`${classes['App']} ${classes['App-header']}`}>
            <h1>Default Layout</h1>
            <Outlet/>
        </div>
    )
}

export default DefaultLayout