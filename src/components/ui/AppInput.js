import PropTypes from "prop-types";
import {forwardRef, useRef, useImperativeHandle} from "react";

const AppInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    const focus = () => {
        inputRef?.current?.focus()
    }
    useImperativeHandle(ref, () => ({
        focus
    }));
    return (
        <input type={props.type} ref={inputRef}/>
    )
})

AppInput.defaultProps = {
    type: 'text'
};

AppInput.propTypes = {
    type: PropTypes.string,
}

export default AppInput