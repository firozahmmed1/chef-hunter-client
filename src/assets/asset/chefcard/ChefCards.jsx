import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ChefCards = () => {
    const [accepted, setAccepted] = useState(false);
    const [chefdata, setChefData] = useState([]);
    const handleFavBotton = (btnValue) => {
        setAccepted(btnValue)
        notify();
    }
    const notify = () => {
        toast('Add To Favourite')
    }

    useEffect(() => {
        fetch('https://assign-10-server-firozahmmed1.vercel.app/data')
            .then(res => res.json())
            .then(data => setChefData(data));
    }, [])
    return (
        <div className='mt-10 lg:grid grid-cols-3 gap-6'>
            {
                chefdata.map(data =>
                    <div 
                       key={data._id}
                    className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.chef_img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body  ">
                            <h2 className="card-title">{data.chef_name}</h2>
                            <p> <span className='text-pink-600 text-2xl'>{data.experiences}</span> years of experience</p>
                            <p>Numbers of recipes: {data.number_of_recipe}</p>
                            <div className="card-actions">
                                <ToastContainer></ToastContainer>
                                <button onClick={() => handleFavBotton(true)} className="btn bg-red-400 normal-case w-full" disabled={accepted}>Add To Favourite</button>
                                <Link to={`chefrecipe/${data._id}`} className="btn bg-fuchsia-400 normal-case w-full">View Recipes</Link>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default ChefCards;