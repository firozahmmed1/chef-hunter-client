import React from 'react';

const Footer = () => {
    return (
        <div className='lg: container mx-auto m-12'>
             <footer className="footer p-10 bg-red-20 text-base-content">
            <div>
                <span className="footer-title">About</span>
                <p>
                Here at EatingWell, you’ll find a variety of all your favorite traditional and authentic
                <br /> Mexican recipes as well as Tex-Mex and Mexican-inspired dishes. The recipes reflect my experience
                <br /> growing up as a first generation Mexican-American and the types of dishes
                <br /> I enjoy eating. Many of the more traditional recipes are directly from my family’s kitchen,
                <br /> and others are fun creations that are inspired by my favorite Mexican flavors.
                </p>
            </div>
            <div>
                <span className="footer-title">Recipes</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
        </div>
       
    );
};

export default Footer;