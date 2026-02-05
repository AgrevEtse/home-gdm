import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalLayout from '@/components/Layout/GlobalLayout'
import Escolaridades from '@/components/Pages/Escolaridades'
import Home from '@/components/Pages/Home'
import PreescolarInfo from '@/components/Pages/PreescolarInfo'
import PrimariaInfo from '@/components/Pages/PrimariaInfo'
import SecundariaInfo from '@/components/Pages/SecundariaInfo'
import BachilleratoInfo from '@/components/Pages/BachilleratoInfo'
import IdukayInfo from '@/components/Pages/IdukayInfo'
import MattildaInfo from '@/components/Pages/MattildaInfo'
import NotFound404 from '@/components/Pages/NotFound404'

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
            path='escolaridades'
            element={<Escolaridades />}
          />

          <Route
            path='preescolar'
            element={<PreescolarInfo />}
          />

          <Route
            path='primaria'
            element={<PrimariaInfo />}
          />

          <Route
            path='secundaria'
            element={<SecundariaInfo />}
          />

          {/* <Route
            path='bachillerato'
            element={<BachilleratoInfo />}
          /> */}

          <Route
            path='idukay'
            element={<IdukayInfo />}
          />

          <Route
            path='mattilda'
            element={<MattildaInfo />}
          />

          <Route
            path='*'
            element={<NotFound404 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
