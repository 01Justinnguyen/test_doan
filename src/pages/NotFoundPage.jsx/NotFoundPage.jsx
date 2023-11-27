import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className="NotFoundPage">
      <div className="page-content">
        <img src="/404.png" alt="notfound" className="image" />
        <h1 className="heading">404 - Looks like you&apos;re lost.</h1>
        <p className="text-xl leading-6 description">Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?</p>
        <button onClick={() => navigate('/')} className="transition-all back hover:scale-105">
          Go back
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
