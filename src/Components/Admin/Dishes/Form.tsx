import React from 'react';
import Admin from '../../../Pages/Admin';

const Form: React.FC = () => {
    return (
        <div>
          <Admin/>
            <div>
              <h3 className="text-2xl ml-32 mb-4 mt-5">Add/Edit dishes</h3>
              <form className="border-black border-2 rounded-md w-96 h-80 ml-6 bg-blue-100">
                <div className="ml-10 mt-10">
                  <label>Title: <input className="border-2 border-black rounded-md ml-3 bg-gray-100"/></label>
                </div>
                <div className="ml-10 mt-10">
                  <label>Price: <input className="border-2 border-black rounded-md ml-2 bg-gray-100"/></label>
                </div>
                <div className="ml-10 mt-10">
                  <label>Image: <input className="border-2 border-black rounded-md ml-0.5 bg-gray-100"/></label>
                </div>
                <button className="bg-gray-300 ml-36 mt-10 w-28 h-12">Save</button>
              </form>
            </div>
        </div>
    );
};

export default Form;