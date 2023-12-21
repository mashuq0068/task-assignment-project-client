import axios from "axios";


const UseAxiosDefault = () => {
    const defaultAxios = axios.create({
        baseURL : 'https://task-server-tan.vercel.app'
})
    return (
        defaultAxios
    );
};

export default UseAxiosDefault;