import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App/Store';
import DishItem from '../DishItem/DishItem';
import { fetchDishes } from '../../../Store/dishesSlice';
import Admin from '../../../Containers/Admin';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state: RootState) => state.dishes.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);


  return (
    <div>
      <Admin/>
      <div className="bg-blue-200 h-12 flex justify-between items-center">
        <h3 className="text-2xl ml-10 pt-2">Dishes</h3>
        <button className="mr-10 border-2 bg-gray-200 w-40">
          <Link to="/admin/dish/new-form">add new dish</Link>
        </button>
      </div>
      {dishes.map(dish => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default List;
