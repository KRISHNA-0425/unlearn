import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { AppRoutes } from './routes/AppRoutes'
import { Loader } from './components/common/Loader'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false)
  useSmoothScroll()

  return (
    <BrowserRouter>
      {/* Branded Initial Page Loader */}
      <Loader onComplete={() => setLoaderFinished(true)} />

      {/* Main Page Layout & Route Engine */}
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  )
}
