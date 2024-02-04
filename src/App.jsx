import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navbar, Main, Profile, Studies, Info} from './components';

const App = () => {
  return (
    <main className="bg-backgroundImg bg-cover bg-center w-full h-[100vh] overflow-auto">
      <BrowserRouter>
        <section className="w-full h-19 bg-transparent mt-10">
          <Navbar />
        </section>
        <section>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Studies' element={<Studies />} />
            <Route path='/Info' element={<Info />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  )
}

export default App