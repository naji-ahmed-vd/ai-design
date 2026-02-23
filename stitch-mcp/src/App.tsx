import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HospitalDashboard from './components/HospitalDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HospitalDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
