import React, { useState } from "react"
import Category from "./Category"
import AddWidgetModal from "./AddWidgetModal"
import "./Dashboard.css"

const initialData = {
  CSPM: [
    {
      id: 1,
      title: "Cloud Accounts",
      content: "Connected: 2, Not Connected: 2",
    },
    {
      id: 2,
      title: "Cloud Account Risk Assessment",
      content: "Passed: 7253, Failed: 1689",
    },
  ],
  CWPP: [
    {
      id: 3,
      title: "Top 5 Namespace Specific Alerts",
      content: "No data available",
    },
    { id: 4, title: "Workload Alerts", content: "No data available" },
  ],
  RegistryScan: [
    {
      id: 5,
      title: "Image Risk Assessment",
      content: "1470 Total Vulnerabilities",
    },
    { id: 6, title: "Image Security Issues", content: "2 Total Images" },
  ],
}

function Dashboard() {
  const [data, setData] = useState(initialData)
  const [showModal, setShowModal] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)

  const handleAddWidget = (category) => {
    setCurrentCategory(category)
    setShowModal(true)
  }

  const handleSaveWidget = (widget) => {
    setData({
      ...data,
      [currentCategory]: [...data[currentCategory], widget],
    })
    setShowModal(false)
  }

  const handleRemoveWidget = (category, widgetId) => {
    setData({
      ...data,
      [category]: data[category].filter((widget) => widget.id !== widgetId),
    })
  }

  return (
    <div className="dashboard">
      {Object.keys(data).map((category) => (
        <Category
          key={category}
          title={category}
          widgets={data[category]}
          onAddWidget={() => handleAddWidget(category)}
          onRemoveWidget={(widgetId) => handleRemoveWidget(category, widgetId)}
        />
      ))}
      {showModal && (
        <AddWidgetModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveWidget}
          category={currentCategory}
        />
      )}
    </div>
  )
}

export default Dashboard
