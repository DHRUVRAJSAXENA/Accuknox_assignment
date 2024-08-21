import React from "react"
import Widget from "./Widget"
import "./Category.css"

function Category({ title, widgets, onAddWidget, onRemoveWidget }) {
  return (
    <div className="category">
      <div className="category-header">
        <h3>{title}</h3>
        <button onClick={onAddWidget}>+ Add Widget</button>
      </div>
      <div className="category-widgets">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.title}
            content={widget.content}
            onRemove={() => onRemoveWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Category
