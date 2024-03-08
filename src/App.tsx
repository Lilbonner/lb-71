import './App.css';
import Admin from './Pages/Admin';
import {Route, Routes} from 'react-router-dom';
import List from './Components/Admin/Dishes/List';
import Form from "./Components/Admin/Dishes/Form";

function App() {

  return (
    <>
      <div>
        <Admin/>
      </div>
      <Routes>
          <Route path="/admin/list" element={<List/>} />
          <Route path="/admin/form" element={<Form/>} />
      </Routes>
    </>
  );
}

export default App;
