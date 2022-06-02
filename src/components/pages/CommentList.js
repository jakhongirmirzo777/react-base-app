const CommentList = ({data, handleChange, greeting}) => {
    return (
        <>
            <h4>{greeting}</h4>
            {data.map((item, i) => (<div key={i}>{item}</div>))}
            <button onClick={handleChange}>Click me</button>
        </>
    )
}

export default CommentList