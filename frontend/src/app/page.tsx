"use client"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { BASE_URL } from "./utils/utils";
import TaskList from "./components/TaskList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import CalendarPicker from './components/DateRangePicker';
import AddTask from './components/AddTask';
import { useUser } from './context/AuthContext';

export default function Home() {

  const [date, setDate] = useState([new Date(), new Date()]); 
  const router = useRouter();    
  const [userData, setUserData] = useState({})
  const {loading ,token } = useUser();


  useEffect(() => {
    const token =  localStorage.getItem("token")
    if (!loading && !token) {
      router.push('/login'); 
    } else {
     const fetchUserInfo = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUserInfo();
    }    
    
  }, [token, router]); 
  if(loading) return (<div>Loading...</div>)
  return (
    <div className="flex flex-col gap-4 mx-2 md:mx-15">
      <h1 className="text-3xl text-center mx-auto mt-3"><span className="font-bold">Hello,{userData?.username}, </span><span>Start planning today</span> </h1>
      <div className="flex max-h-[400px] overflow-auto">
          <div className="w-[40%] hidden md:block">
            <CalendarPicker date={date} setDate={setDate}/> 
            </div>
          <div className="flex flex-col gap-4 w-full">
            <AddTask  userId={userData?.id}   date={date}/>
            <TaskList userInfo={userData} />
          </div>
      </div>

      <TaskStatus/>
    </div>
  );
}