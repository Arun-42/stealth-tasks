import React from 'react';
import './modal.css'

export const Modal = (props) => {
  return(
    <div className="modal">{props.children}</div>
  )
}

