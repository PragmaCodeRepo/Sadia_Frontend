import React,{useState,useEffect} from 'react';
import ProfileContext from "./ProfileContext";

const ProfileContextProvider = (props) => {
    const [profiles,setProfiles]=useState([]);
    const profileData= async ()=>{
        const response=await fetch("http://127.0.0.1:8000/api/Profiles/");
        const data=await response.json();
        setProfiles(data)
    };
    useEffect(()=>{
        profileData();
    },[]);
    const context={
        profiles:profiles,
    };
  return (
    
    <ProfileContext.Provider value={context}>
        {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider;