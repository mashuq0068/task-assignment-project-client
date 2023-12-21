import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const {user , logOutUser} = useContext(AuthContext)
    const links = 
    <>
    <ul className=" flex lg:flex-row 2xl:text-lg flex-col gap-[6vw]">
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/dashboard'>Dashboard</NavLink>
       <NavLink to='/faq'>Faq</NavLink>
    </ul>
    </>
    const handleLogout = () => {
      logOutUser()
      .then(res => {
         console.log(res) 
          
      })
      .catch((error) => {
        console.error(error.message)
      })
    }
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar  drop-shadow-xl shadow-lg  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100  w-24 pl-4">
        {links}
      </ul>
    </div>
    <p className=" font-bold 2xl:text-xl">Task Manager</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
     !user ?   <Link to='/login' className="btn 2xl:text-base ">Login</Link> :
        <button onClick={handleLogout}  className="btn 2xl:text-base ">Logout</button>
        
        }
  </div>
</div>
        </div>
    );
};

export default Navbar;