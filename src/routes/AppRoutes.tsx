import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Toolkit } from '../pages/Toolkit'
import { OurWork } from '../pages/OurWork'
import { Gallery } from '../pages/Gallery'
import { Team } from '../pages/Team'
import { Media } from '../pages/Media'
import { Journal } from '../pages/Journal'
import { BlogDetail } from '../pages/BlogDetail'
import { Donate } from '../pages/Donate'
import { NotFound } from '../pages/NotFound'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pehal-toolkit" element={<Toolkit />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/media" element={<Media />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/:slug" element={<BlogDetail />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

