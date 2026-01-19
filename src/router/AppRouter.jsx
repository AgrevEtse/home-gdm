import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalLayout from '@/components/Layout/GlobalLayout'
import Home from '@/components/Pages/Home'
import PreescolarInfo from '@/components/Pages/PreescolarInfo'

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
            path='preescolar'
            element={<PreescolarInfo />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
