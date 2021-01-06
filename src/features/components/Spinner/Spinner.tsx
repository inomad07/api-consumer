import React from 'react';

export default function Spinner() {
    return (
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
