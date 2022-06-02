import React from "react";

const OptimisedComponent = ({name}) => {
    console.log('Rendered OptimisedComponent')
    return (
       <>
           <div>Optimised Component</div>
           <p>{name}</p>
       </>
    )
}

export default React.memo(OptimisedComponent)
