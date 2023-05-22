import React from "react"
import { useState, useEffect } from "react"

const BacktoTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className='btn rounded-circle btn-theme text-white'
          style={{
            position: "fixed",
            right: "20px",
            bottom: "50px",
            width: "50px",
            height: "50px",
          }}
        >
          <i className='bi bi-arrow-up-circle fs-4'></i>
        </button>
      )}
    </div>
  )
}

export default BacktoTopButton
