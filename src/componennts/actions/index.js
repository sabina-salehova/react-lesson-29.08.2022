import axios from "axios";

const baseUrl="https://630cee00b37c364eb7fce4e3.mockapi.io";

export const getAllPosts=async (setUsers)=>{
    const {data:usersData} = await axios.get(`${baseUrl}/posts`);

    setUsers(usersData)
}