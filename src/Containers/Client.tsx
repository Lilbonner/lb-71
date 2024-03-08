import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../Store/dishesSlice';
import Item from '../Components/Client/DishItem-cl/Item';

const Client = () => {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.dishes.dishes);
    const status = useSelector((state) => state.dishes.status);
    const error = useSelector((state) => state.dishes.error);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-amber-500 h-16 text-2xl text-white flex items-center justify-between">
                <h3 className="ml-36">Turtle pizza</h3>
                <h4 className="text-white text-2xl mr-44">Order total:</h4>
            </div>
            <div className="flex flex-col">
                {dishes.map((dish: any) => (
                    <Item key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default Client;
