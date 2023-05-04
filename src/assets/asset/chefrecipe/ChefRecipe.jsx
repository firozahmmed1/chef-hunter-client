import React from 'react';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipe = () => {
    const notify = () => {
        toast('Add To Favourite')
    }
    const [accepted, setAcepted] = useState(false)
    const handleFavBotton = (btnValue) => {
        setAcepted(btnValue)
        notify();
    }

    const data = useLoaderData();
    const {chef_name, chef_bio, chef_img, experiences, likes, number_of_recipe, recipe} = data;
    return (
        <>

            <div className='lg:flex lg:ml-8 ml-1 lg:mt-10 mt-2'>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <figure><img className='lg:rounded-2xl' src={chef_img} alt="Shoes" /></figure>
                    </div>
                </div>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{chef_name}</h2>
                            <p>{chef_bio}</p>
                            <p><span className='text-xl font-bold text-blue-600'>{likes}</span> Likes</p>
                            <p>Number of recipes: {number_of_recipe}</p>
                            <p><span className='text-pink-600 text-2xl'>{experiences}</span> Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-10'>
                {
                    recipe.map(re => 
                        <div 
                        key ={re.id}
                        className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{re.recipe_name}</h2>
                            <p className='font-semibold'>Ingredients:</p>
                            <li>{re.ing_1}</li>
                            <li>{re.ing_2}</li>
                            <li>{re.ing_3}</li>
                            <li>{re.ing_4}</li>
                            <li>{re.ing_5}</li>
                            <h5 className='font-semibold'>Cooking Method:</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero asperiores deleniti voluptas quidem nulla officiis amet repellendus non distinctio, beatae optio cum quae vitae exercitationem architecto debitis ab ipsum nostrum consequatur eligendi rem perspiciatis ad pariatur. Dignissimos libero nulla iusto adipisci dicta provident mollitia, excepturi neque eveniet sunt delectus beatae!</p>
                            <div className='mt-4 flex'>
                                <Rating
                                    placeholderRating={re.rating}
                                    emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                                <p className='ml-1'>{re.rating}</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={() => handleFavBotton(true)} className="btn bg-red-400 normal-case lg:w-3/6 w-full" disabled={accepted}>Add To Favourite</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                        )
                }
              
            </div>
        </>
    );
};

export default ChefRecipe;