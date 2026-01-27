import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalLayout from '@/components/Layout/GlobalLayout'
import Home from '@/components/Pages/Home'
import QuienesSomos from '@/components/Pages/QuienesSomos'
import PreescolarInfo from '@/components/Pages/PreescolarInfo'
import PrimariaInfo from '@/components/Pages/PrimariaInfo'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='quienes-somos'
            element={<QuienesSomos />}
          />

          {/* <Route
            path='preescolar'
            element={<PreescolarInfo />}
          /> */}
          <Route
            path='primaria'
            element={<PrimariaInfo />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
