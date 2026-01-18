import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalLayout from '@/components/Layout/GlobalLayout'
import Home from '@/components/Pages/Home'

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
            path='primaria'
            element={<>Primaria</>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
