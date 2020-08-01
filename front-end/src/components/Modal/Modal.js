import React from 'react'

const Modal = ({message, type}) => {
    const colorType = type === "error" ? 'red' : 'green';
    return (
    <div className={`bg-${colorType} shadow-3 pa0 ma0`}>
        <p className="f3 pa1">{message}</p>
    </div>
)
};

export default Modal;