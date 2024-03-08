import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../App/Store';
import { updateDish } from '../../../Store/formSlice';
import Admin from '../../../Containers/Admin';

const EditDish: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dishes = useSelector((state: RootState) => state.dishes.dishes);
  const [formData, setFormData] = useState({ title: '', price: 0, image: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedDish = dishes.find(dish => dish.id === id);
    if (selectedDish) {
      setFormData({ title: selectedDish.title, price: selectedDish.price, image: selectedDish.image });
    }
  }, [dishes, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(updateDish({ id, data: formData }));
      navigate('/admin/dish/list'); // Переход на список блюд после успешного обновления
    } catch (error) {
      console.error('Error updating dish:', error);
    }
  };

  return (
    <div>
      <Admin/>
      <div>
        <h3 className="text-2xl ml-32 mb-4 mt-5">Edit Dish</h3>
        <form onSubmit={handleSubmit} className="border-black border-2 rounded-md w-96 h-80 ml-6 bg-blue-100">
          <div className="ml-10 mt-10">
            <label>Title: <input name="title" value={formData.title} onChange={handleChange} className="border-2 border-black rounded-md ml-3 bg-gray-100"/></label>
          </div>
          <div className="ml-10 mt-10">
            <label>Price: <input type="number" name="price" value={formData.price} onChange={handleChange} className="border-2 border-black rounded-md ml-2 bg-gray-100"/></label>
          </div>
          <div className="ml-10 mt-10">
            <label>Image: <input name="image" value={formData.image} onChange={handleChange} className="border-2 border-black rounded-md ml-0.5 bg-gray-100"/></label>
          </div>
          <button type="submit" className="bg-gray-300 ml-36 mt-10 w-28 h-12">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditDish;
