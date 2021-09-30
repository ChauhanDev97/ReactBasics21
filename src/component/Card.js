import React from 'react';
import DateTime from './DataTime'

function Card(props) {
    console.log(props)
    return (
        <div className="card m-3">
            <h5 className="card-header"><DateTime/></h5>
            <div className="card-body">
                <h5 className="card-title">{props.name } ({ props.age})</h5>
                <p className="card-text">{props.body}</p>
                <a className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;
