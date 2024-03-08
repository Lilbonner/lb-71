import './App.css';
import {Route, Routes} from 'react-router-dom';
import List from './Components/Admin/Dishes/List';
import Form from './Components/Admin/Form/Form';
import Orders from './Containers/Orders';
import EditDish from './Components/Admin/EditForm/EditForm';
import Client from "./Containers/Client";

function App() {

    return (
        <>
            <div>
            </div>
            <Routes>
                <Route path="/" element={<Client/>}/>
                <Route path="/admin/dish/list" element={<List/>}/>
                <Route path="/admin/dish/new-form" element={<Form/>}/>
                <Route path="/admin/dish/edit-form/:id" element={<EditDish/>}/>
                <Route path="/admin/orders" element={<Orders/>}/>
            </Routes>
        </>
    );
}

export default App;
