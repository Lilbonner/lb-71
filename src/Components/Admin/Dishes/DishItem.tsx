import React from 'react';

const DishItem:React.FC = () => {
    return (
        <div className="dish-item bg-blue-100 mx-20 mt-5 h-24 rounded-md">
            <div className="flex justify-between px-4 items-center pt-8">
              <p className="ml-10">dish title</p>
              <p className="ml-64">dish price</p>
              <button className="ml-64 bg-gray-300 w-28 h-9">edit</button>
              <button className="mr-32 bg-gray-300 w-28 h-9">delete</button>
            </div>
        </div>
    );
};

export default DishItem;