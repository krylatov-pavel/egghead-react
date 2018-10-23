import React from 'react';

const FetchError = ({errorMessage, onRetry}) => {
    return (<div>
        <p>Failed to detch todos: {errorMessage}</p>
        <button type="button" onClick={onRetry}>Retry</button>
    </div>);
};

export default FetchError;
