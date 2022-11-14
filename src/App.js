import HomePage from "./Components/HomePage";
import { Routes, Route, Link } from 'react-router-dom'
import RecipePage from "./Components/RecipePage";

function App() {

  return (
    <div className='main-container'>
      <Routes>
        <Route to='/' element={<HomePage />} />
        <Route to='/:id' element={<RecipePage />} />
      </Routes>
      <h1 className="text-3xl font-bold underline p-7">Food Buddy</h1>
        <HomePage />
    </div>
  );
}

export default App;
