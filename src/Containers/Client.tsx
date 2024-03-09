import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDishes} from '../Store/dishesSlice';
import Item from '../Components/Client/DishItem-cl/Item';

const Client = () => {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.dishes.dishes);
    const status = useSelector((state) => state.dishes.status);
    const error = useSelector((state) => state.dishes.error);
    const deliveryCost = 150; // Стоимость доставки

    const [cart, setCart] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    const addToCart = (dishId) => {
        setCart(prevCart => ({
            ...prevCart,
            [dishId]: (prevCart[dishId] || 0) + 1
        }));
    };

    const removeFromCart = (dishId) => {
        const updatedCart = {...cart};
        delete updatedCart[dishId];
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        let total = 0;
        for (const dishId in cart) {
            const dish = dishes.find(dish => dish.id === dishId);
            if (dish) {
                total += dish.price * cart[dishId];
            }
        }
        return total + deliveryCost;
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-amber-500 h-16 text-2xl text-white flex items-center justify-between">
                <h3 className="ml-20">Turtle pizza</h3>
                <h4 className="text-white text-2xl ml-36">Order total: {calculateTotal()}</h4>
                <button className="mr-10 bg-gray-300" onClick={openModal}>Checkout</button>
            </div>
            <div className="flex flex-col">
                {dishes.map((dish) => (
                    <Item key={dish.id} dish={dish} addToCart={addToCart}/>
                ))}
            </div>
            {/* Моlальное окно */}
            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Preview заказа</h2>
                        <ul>
                            {Object.keys(cart).map((dishId) => (
                                <li key={dishId} className="flex justify-between items-center mb-2">
                                    <span>{dishes.find(dish => dish.id === dishId)?.name}</span>
                                    <button className="text-red-500" onClick={() => removeFromCart(dishId)}>Удалить
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Client;
