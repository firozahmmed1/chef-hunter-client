import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipe = () => {
    const notify =()=>{
        toast('Add To Favourite')
    }
    const [accepted, setAcepted]= useState(false)
    const handleFavBotton =(btnValue)=>{
       setAcepted(btnValue)
       notify();
    }
    return (
        <>
        
            <div className='lg:flex lg:ml-8 ml-1 lg:mt-10 mt-2'>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <figure><img className='lg:rounded-2xl' src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Chef Name</h2>
                            <p>Description</p>
                            <p>Likes</p>
                            <p>Number of recipes</p>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-10'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Recipe name</h2>
                        <p className='font-semibold'>ingredients:</p>
                         <li>1</li>
                         <li>2</li>
                         <li>3</li>
                         <li>4</li>
                         <li>5</li>
                         <h5 className='font-semibold'>Cooking Method:</h5>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero asperiores deleniti voluptas quidem nulla officiis amet repellendus non distinctio, beatae optio cum quae vitae exercitationem architecto debitis ab ipsum nostrum consequatur eligendi rem perspiciatis ad pariatur. Dignissimos libero nulla iusto adipisci dicta provident mollitia, excepturi neque eveniet sunt delectus beatae!</p>
                         <div className='mt-4 flex'>
                            <span>Hello</span>
                            <p className='ml-1'>4.5</p>
                         </div>
                        <div className="card-actions">
                            <button onClick={()=>handleFavBotton(true)} className="btn bg-red-400 normal-case lg:w-3/6 w-full" disabled={accepted}>Add To Favourite</button>
                          <ToastContainer/>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default ChefRecipe;