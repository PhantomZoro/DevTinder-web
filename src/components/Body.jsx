import {useEffect} from 'react';
import Navbar from './Navbar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userData = useSelector((store) => store.user)
  
  const fetchUser = async () =>{
    if(userData){
      return;
    }
    try{
      const res = await axios.get(BASE_URL + "profile", {
      withCredentials: true
    });
    //Add user in the user slice redux
    dispatch(addUser(res.data));

    } catch(err){
      if(err.status === 401){
        navigate("/login")
      }      
    console.error(err);
    } 
  }

  useEffect(()=>{
    if(!userData){
      fetchUser();
    }    
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body