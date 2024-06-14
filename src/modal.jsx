import React, { useState } from 'react'
import Index from './modalpopup.jsx'
import './index.css';

const ModalPopup = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const onClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={handleShowModal}>ShowModal</button>
      <div>
        {
          showModal && <Index onClose={onClose}
          id={'custom-id'} 
          body={<div> Customized body</div>}
          // header={<div>Customised Header</div>}
          // footer={<div>Customised Footer</div>}
          />
        }
      </div>
    </div>
  )
}

export default ModalPopup