import {Fragment, useRef} from "react";
import HomeCards from "../components/pages/HomeCards";
import AppInput from "../components/ui/AppInput";
import AppButton from "../components/ui/AppButton";

const HomePage = () => {
    const inputRef = useRef(null)
    const onFocus = () => {
        inputRef.current.focus()
    }
    return (
        <Fragment>
            <h2>Home Page</h2>
            <AppInput ref={inputRef}/>
            <AppButton onClick={onFocus}>Log ref</AppButton>
            <HomeCards/>
        </Fragment>
    )
}

export default HomePage