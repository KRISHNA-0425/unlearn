import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface px-4 py-16">
      <div className="text-center max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full bg-primary-container text-on-surface mx-auto flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined text-5xl">explore_off</span>
        </div>
        <div className="font-display-hero text-6xl font-extrabold text-primary">
          404
        </div>
        <h1 className="font-headline-sm text-2xl font-bold text-on-surface">
          Page Not Found
        </h1>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
          The dispatch, toolkit, or resource page you are looking for has been moved or does not exist.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button to="/" variant="primary" size="md" icon="home">
            Return to Homepage
          </Button>
          <Button to="/pehal-toolkit" variant="outline" size="md" icon="auto_stories">
            Explore Toolkit
          </Button>
        </div>
      </div>
    </div>
  )
}

