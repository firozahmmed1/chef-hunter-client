import React from 'react';

const PopularCategories = () => {
    return (
       <div className=''>
         <h1 className='font-bold text-5xl text-center mt-32'>Our Popular Recipe</h1>
         <div className='lg:container lg:grid lg:grid-cols-3 gap-7'>
            <div className="card w-full bg-base-100 shadow-xl mt-8">
                <figure><img src="https://i.ibb.co/Wz6TDpz/mexican-meatball-subs-41393-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Mexican meatball subs
                    </h2>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-8">
                <figure><img src="https://i.ibb.co/pf4RJnF/easy-chicken-empanadas-35645-2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Spicy chicken empanadas
                    </h2>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-8">
                <figure><img src="https://i.ibb.co/126W9pX/spicy-chorizo-enchiladas-47378-2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Spicy chorizo enchiladas
                    </h2>
                </div>
            </div>
        </div>
       </div>
    );
};

export default PopularCategories;