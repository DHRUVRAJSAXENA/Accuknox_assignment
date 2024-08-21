import React, { useState } from "react"
import "./AddWidgetModal.css"

function AddWidgetModal({ onClose, onSave, category }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSave = () => {
    const newWidget = {
      id: Date.now(),
      title,
      content,
    }
    onSave(newWidget)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Widget to {category}</h3>
        <input
          type="text"
          placeholder="Widget Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Widget Content"
          className="Widget-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddWidgetModal
