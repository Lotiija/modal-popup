import React from 'react'

const Index = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className='close-modal-icon'>&times;</span>
          <h2>{header ? header : <h3>Header</h3>}</h2>
        </div>
        <div className="body">
          {
            body ? body : <div>This is the body content</div>
          }
        </div>
        <div className="footer">
          {
            footer ? footer : <h2>Footer</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Index;