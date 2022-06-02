const LogError = (error, errorInfo) => {
    console.error(`
    ${error.toString()}
    ${errorInfo.componentStack}
    `)
}

export default LogError