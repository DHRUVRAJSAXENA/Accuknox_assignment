import React from "react"
import "./Widget.css"

function Widget({ title, content, onRemove }) {
  return (
    <div className="widget">
      <div className="widget-header">
        <h4>{title}</h4>
        <button onClick={onRemove} className="remove-button">
          ✖
        </button>
      </div>
      <div className="widget-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Widget
