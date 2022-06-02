import React from "react";
const CommentList = React.forwardRef(({data, handleChange, onClick, greeting}, ref) => {
    return (
        <>
            <h4 ref={ref}>{greeting}</h4>
            {data.map((item, i) => (<div key={i}>{item}</div>))}
            <button onClick={onClick}>Click me</button>
        </>
    )
})

export default CommentList