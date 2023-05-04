import React from 'react';
import ChefCards from '../../assets/asset/chefcard/ChefCards';
import PopularCategories from '../service/PopularCategories';

const Home = () => {
    return (
        <div>
             <div className="container mt-4">
                    <div className="w-full lg:flex justify-between">
                       <div className='lg:w-6/12 ml-7 mt-12'>
                        <h1 className='text-5xl font-semibold'><span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-red-50 to-red-950 '>Maxican</span> Recipes <br />
                        Available
                         </h1>
                         <p className='mt-4 pr-2'>
                         Here at EatingWell, you’ll find a variety of all your favorite traditional and authentic <br />
                         Mexican recipes as well as Tex-Mex and Mexican-inspired dishes. The recipes reflect my experience growing up as a first generation Mexican-American and the types of dishes I enjoy eating. Many of the more traditional recipes are directly from my family’s kitchen, and others are fun creations that are inspired by my favorite Mexican flavors.
                         Whether you’re brand new to Mexican food or you’ve been around it your whole life, I’m confident you’ll find a recipe you love.    
                        </p>
                       </div>
                        <div className='rounded lg:w-6/12'>
                            <img className='image-full rounded-lg' src="https://i.ibb.co/qmfLp93/Max-hpicrure.jpg" alt="" />
                        </div>
                    </div>
                </div> 
         <div className='ml-6 mt-20'>
            <h1 className='font-semibold text-2xl'>Our Chefs</h1>
            <ChefCards></ChefCards>
         <PopularCategories></PopularCategories>
         </div>
        </div>
    );
};

export default Home;