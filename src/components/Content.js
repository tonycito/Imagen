import React from 'react'
import ImageOne from '../images/pasta.jpg'
import ImageTwo from '../images/plato.jpg'

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="pasta"
          className="max-h-98  rounded my-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Tallarines</h2>
          <p className="mb-2">Es la comida Nutritiva que todos queremos </p>
          <span className="text-red-500 text-4xl">S/.25</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="plato"
          className="max-h-98 rounded my-20 shadow "
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Tallarines</h2>
          <p className="mb-2">Es la comida Nutritiva que todos queremos </p>
          <span className="text-red-500 text-4xl">S/.25</span>
        </div>
      </div>
    </>
  )
}

export default Content
