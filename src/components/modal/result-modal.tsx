import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { Message } from '../../state/actions'
import './modal.css'

export interface ModalProps {
  isShown: boolean
  modalContent: string
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  modalContent,
}) => {
  const text = mapText(modalContent as Message)
  const modal = (
    <React.Fragment>
      <div className="Backdrop" />
      <div className="Wrapper">
        <div className="StyledModal">
          <div className="Header">
            <h1 className="HeaderText">{text}</h1>
          </div>

          <div className="Content">
            <img className="img" src="img/wrong.png" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

const mapText = (message: Message): string => {
  switch (message) {
    case 'duplicate':
      return 'It Duplicate!!!!'
    case 'english_only':
      return 'Please use english'
    case 'exceed':
      return 'Change Letter Exceed'
    case 'no_meaning':
      return 'Please use meaningful words.'
    default:
      return message
  }
}
