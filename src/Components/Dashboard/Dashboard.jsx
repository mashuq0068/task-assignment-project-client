import { Link } from "react-router-dom";
import useTasks from "../../Hooks/UseTasks";
import Draggable from "react-draggable";



const Dashboard = () => {
    const {tasks} = useTasks()
    console.log(tasks)
    return (
        <div>
         <h1 className=" text-2xl mb-[5vh] font-bold text-center mt-[5vh]"> Task management dashboard</h1>
         <Link to='/createTask' className=" btn flex justify-center items-center fixed right-5 bg-white 2xl:text-lg rounded-xl font-bold "><p className=" text-2xl 2xl:text-3xl">+</p> <p>Create Task</p></Link>
         <div className="flex absolute flex-wrap">
         <div className= "  space-y-5 lg:w-[30vw] p-[2%] ">
         <h3  className=" text-xl font-bold text-center"> to-do list Tasks</h3>
         <div>
           {
            tasks?.map(task => 
               
               
          
             <Draggable key={task?._id}>
                <div className=" grid px-[2%] py-[1%] rounded-lg border border-gray-300 grid-cols-3 " key={task._id}>
                <p>{task?.taskTitle?.slice(0,6)}</p>
                <button className="btn btn-ghost">See Details</button>
                <button className="btn btn-ghost">Delete</button>
               
            </div>
          
            </Draggable>
        
            )
            }
            </div>
      
         </div>
         <h3  className=" text-xl absolute top-0 left-[40vw] w-[10vw] font-bold text-center"> Ongoing Tasks</h3>
         <h3  className=" text-xl absolute top-0 left-[70vw] w-[10vw] font-bold text-center"> completed Tasks</h3>
        </div>
        </div>
    );
};

export default Dashboard;