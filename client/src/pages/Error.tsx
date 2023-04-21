import React from 'react';
import { isRouteErrorResponse,useRouteError} from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    let errorResponse = null;
    if(isRouteErrorResponse(error)) errorResponse = {...error}
    return(
        <div>
            <h3>Error 404</h3>
            <p>An unexpected error has occured</p>
            <p>{errorResponse.status || errorResponse.statusText}</p>
        </div>
    )
}

export default Error;