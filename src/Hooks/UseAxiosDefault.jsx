import axios from "axios";


const UseAxiosDefault = () => {
    const defaultAxios = axios.create({
        baseURL : 'http://localhost:5000'
})
    return (
        defaultAxios
    );
};

export default UseAxiosDefault;