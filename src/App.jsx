import Home from './Pages/Home';
import Posts from './Components/Post'
import Table from './Components/Table';
import Counter from './Components/Counter';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cards' element={<Posts/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
