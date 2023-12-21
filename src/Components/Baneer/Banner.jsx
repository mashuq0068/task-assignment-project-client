import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:min-h-[90vh] min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">We will help you to manage your tasks that will be helpful for your office life and personal projects</p>
            <Link to='/dashboard' className="btn btn-ghost border border-white">Let's Explore</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;