import React, { useState } from 'react';
import Admin from '../../../Containers/Admin';
import axiosApi from '../../../axiosApi';
import {useNavigate} from 'react-router-dom';

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.post('/dishes.json', { title, price, image });
      setTitle('');
      setPrice(0);
      setImage('');
      navigate("/admin/dish/list")

    } catch (error) {
      console.error('Error sending data to Firebase: ', error);
    }
  };

  return (
    <div>
      <Admin/>
      <div>
        <h3 className="text-2xl ml-32 mb-4 mt-5">Add/Edit dishes</h3>
        <form className="border-black border-2 rounded-md w-96 h-80 ml-6 bg-blue-100" onSubmit={handleSubmit}>
          <div className="ml-10 mt-10">
            <label>Title: <input value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-black rounded-md ml-3 bg-gray-100"/></label>
          </div>
          <div className="ml-10 mt-10">
            <label>Price: <input type="number" value={isNaN(price) ? '' : price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="border-2 border-black rounded-md ml-2 bg-gray-100"/></label>
          </div>
          <div className="ml-10 mt-10">
            <label>Image: <input value={image} onChange={(e) => setImage(e.target.value)} className="border-2 border-black rounded-md ml-0.5 bg-gray-100"/></label>
          </div>
          <button type="submit" className="bg-gray-300 ml-36 mt-10 w-28 h-12">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
