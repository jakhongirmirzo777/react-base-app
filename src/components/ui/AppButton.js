import PropTypes from 'prop-types'

const AppButton = ({children, onClick}) => {
    return (
        <button onClick={onClick}>{children}</button>
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