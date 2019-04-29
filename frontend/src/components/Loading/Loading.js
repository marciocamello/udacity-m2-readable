import React from 'react';

import './Loading.css';

const Loading = props => {

    const {isLoading} = props;

    return (
        <div>
            {isLoading ? (
                <div className="loading">
                    <div className="lds-dual-ring"> </div>
                </div>
            ) : ''}
        </div>
    );
};

export default Loading;

