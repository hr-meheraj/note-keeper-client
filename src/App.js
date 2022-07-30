import Navbar from "./components/Navbar";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
function App() {
  return (
    <div className="mx-auto w-[95%] rounded-md max-w-[1200px]">
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
