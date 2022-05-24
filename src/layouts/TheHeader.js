import {NavLink} from "react-router-dom";
import classes from "../assets/styles/layouts/TheHeader.module.css"

const TheHeader = () => {
    return (
        <header className={classes['header']}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) =>
                                +isActive && classes['active']
                            }
                            to="/">
                            Default layout
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) =>
                                +isActive && classes['active']
                            }
                            to="/dashboard">
                            Dashboard layout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default TheHeader