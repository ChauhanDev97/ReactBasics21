import React, { small } from 'react'

function DataTime() {
    return (
        <div>
            <small>
                {new Date().toDateString()} | {new Date().toTimeString()}
            </small>
        </div>
    )
}

export default DataTime;