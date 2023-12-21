import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
         <h1 className=" text-2xl font-bold text-center mt-[5vh]"> Task management dashboard</h1>
         <Link to='/createTask' className=" btn flex justify-center items-center fixed right-5 bg-white 2xl:text-lg rounded-xl font-bold drop-shadow-xl shadow-xl"><p className=" text-2xl 2xl:text-3xl">+</p> <p>Create Task</p></Link>
        </div>
    );
};

export default Dashboard;