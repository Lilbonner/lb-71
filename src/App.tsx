import './App.css';
import Admin from './Pages/Admin';
import {Route, Routes} from 'react-router-dom';
import List from './Components/Admin/Dishes/List';
import Form from "./Components/Admin/Dishes/Form";
import Orders from "./Components/Admin/Orders/Orders";

function App() {

  return (
    <>
      <div>
      </div>
      <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/dish/list" element={<List/>} />
          <Route path="/admin/dish/form" element={<Form/>} />
          <Route path="/admin/orders" element={<Orders/>} />
      </Routes>
    </>
  );
}

export default App;
