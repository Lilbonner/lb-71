import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosApi from '../../../axiosApi';
import { useDispatch } from 'react-redux';
import { deleteDish } from '../../../Store/dishesSlice';
import { ThunkDispatch } from 'redux-thunk';

interface Dish {
  id: string;
  title: string;
  price: number;
}

interface DishItemProps {
  dish: Dish;
}

const DishItem: React.FC<DishItemProps> = ({ dish }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axiosApi.get(`/dishes/${dish.id}/image.json`);
        const imageUrl = response.data;
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();

    return () => {};
  }, [dish.id]);

  const handleDelete = () => {
    dispatch(deleteDish(dish.id));
  };

  return (
    <div className="dish-item bg-blue-100 mx-20 mt-5 h-24 rounded-md">
      <div className="flex justify-between px-4 items-center pt-2">
        <img src={imageUrl} alt={dish.title} className="w-20 h-20 rounded-md" />
        <p className="ml-10">{dish.title}</p>
        <p className="ml-64">{dish.price} kgs</p>
        <Link to={`/admin/dish/edit-form/${dish.id}`}>
          <button className="ml-64 bg-gray-300 w-28 h-9 rounded-md">
            Edit
          </button>
        </Link>
        <button onClick={handleDelete} className="mr-32 bg-gray-300 w-28 h-9">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DishItem;
