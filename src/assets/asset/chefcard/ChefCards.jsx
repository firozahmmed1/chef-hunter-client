import React from 'react';

const ChefCards = () => {
    return (
        <div className='mt-10 lg:grid grid-cols-3 gap-6'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">Chef Name</h2>
                    <p>Years of experience</p>
                    <p>Numbers of recipes</p>
                    <div className="card-actions">
                        <button className="btn bg-red-400 normal-case w-full">Add To Favourite</button>
                        <button className="btn bg-fuchsia-400 normal-case w-full">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;