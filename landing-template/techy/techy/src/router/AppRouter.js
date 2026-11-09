import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollTopBehavior from '../components/ScrollTopBehavior'
import EUShieldHome from '../views/home-pages/EUShieldHome'
import EUShieldPrivacyPage from '../views/inner-pages/pages/EUShieldPrivacyPage'
import NotFound from '../views/NotFound'

const AppRouter = () => (
  <>
    <ScrollTopBehavior />
    <Routes>
      <Route path="/" element={<EUShieldHome />} />
      <Route path="/privacy-compliance" element={<EUShieldPrivacyPage />} />
      <Route path="/legal" element={<EUShieldPrivacyPage />} />
      <Route path="/cyber-security" element={<Navigate to="/" replace />} />
      <Route path="/software-development" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)

export default AppRouter
