const ReviewList = ({data, handleChange}) => {
    return (
        <>
            {data.map((item, i) => (<div key={i}>{item}</div>))}
            <button onClick={handleChange}>Click me</button>
        </>
    )
}

export default ReviewList