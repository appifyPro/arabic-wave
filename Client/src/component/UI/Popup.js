import React from 'react';
import ReactDOM from 'react-dom';

export default function Popup(props) {
    if(!props.open) return null

    return ReactDOM.createPortal(
        <>
            <div className='blog-popup' onClick={props.onClose}>
                <div className="container" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <img src={props.img} alt="" />
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}
