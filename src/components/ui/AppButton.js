import PropTypes from 'prop-types'
const AppButton = ({children, isLarge}) => {
    return (
        <button>{children}</button>
    )
}

AppButton.defaultProps = {
    children: 'Click me',
    isLarge: false,
};

AppButton.propTypes = {
    children: PropTypes.string,
    isLarge: PropTypes.bool
}

export default AppButton