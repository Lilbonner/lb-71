import React from 'react';
import {Link} from "react-router-dom";
import DishItem from "./DishItem";
import Admin from '../../../Pages/Admin';

const List:React.FC = () => {
  return (
      <div>
        <Admin/>
          <div className="bg-blue-200 h-12 flex justify-between items-center">
              <h3 className="text-2xl ml-10 pt-2">Dishes</h3>
              <button className="mr-10 border-2 bg-gray-200 w-40">
                  <Link to="/admin/dish/form">add new dish</Link>
              </button>
          </div>
          <DishItem/>
      </div>

  );
};

export default List;