import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Specialist from './component/Specialist';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path ='/specialist/:type' element={<Specialist/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
