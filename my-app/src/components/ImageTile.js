import React from 'react'

export const ImageTile = ({ title, summary, icon }) => {
    return (
     <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <img className="bi" alt='random' src={icon} />
        </div>
        <h3 className="fs-2">{title}</h3>
        <p>{summary}</p>
      </div>
    )
}