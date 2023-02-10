import React, { useState, useEffect } from "react";
import ProfileContext from "./ProfileContext";
import axios from "axios"

axios.defaults.baseURL="http://192.241.128.245";
// axios.defaults.baseURL="https://api2.pragma.how";


const ProfileContextProvider = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [isFound, setIsFound] = useState(false);
  // const profileData = async () => {
  //   const response = await fetch("http://192.241.128.245/api/Profiles/");
  //   // const response = await fetch("http://pragma.how:8000/api/Profiles/");
  //   // const response=await fetch("http://127.0.0.1:8000/api/Profiles/");

  //   // const response=await fetch("http://192.241.128.245/:8000/api/Profiles/");
  //   // const response=await fetch("http://127.0.0.1:8000/api/Profiles/");
  //   const data = await response.json();
  //   setProfiles(data);
  //   if (response.status === 200) {
  //     setIsFound(true);
  //   }
  // };
  const profileData=()=>{
    console.log("ok")
    // axios.get("http://192.241.128.245/api/Profiles/")
    axios.get("/api/Profiles/")

    .then((response)=>{
      setProfiles(response.data)

      if (response.status === 200) {
            setIsFound(true);
          }
    })

}
  useEffect(() => {
    profileData();
  }, []);
  const context = {
    profiles: profiles,
    isProfilesFound: isFound,
  };
  return (
    <ProfileContext.Provider value={context}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
