import { useState, useEffect } from 'react';
import axiosApi from "../../../axiosApi";

const Item = ({ dish }) => {
    const [imageUrl, setImageUrl] = useState('');

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



    return (
        <div className="dish-item bg-blue-100 mx-20 mt-5 h-24 rounded-md">
            <div className="flex justify-between px-4 items-center pt-2">
                <img src={imageUrl} alt={dish.title} className="w-20 h-20 rounded-md" />
                <p className="ml-10">{dish.title}</p>
                <p className="ml-64">{dish.price} kgs</p>
            </div>
        </div>
    );
};

export default Item;
