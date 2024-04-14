import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<AddRecipe/>} />
          <Route path ='/Search' element={<SearchRecipe/>}/>
          <Route path ='/View' element={<ViewRecipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
