import React, { useState, useEffect } from "react";
import ProfileContext from "./ProfileContext";

const ProfileContextProvider = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const profileData = async () => {
    
    const response = await fetch("http://192.241.128.245/api/Profiles/");
    // const response = await fetch("http://pragma.how:8000/api/Profiles/");
    // const response=await fetch("http://127.0.0.1:8000/api/Profiles/");

    // const response=await fetch("http://192.241.128.245/:8000/api/Profiles/");
    // const response=await fetch("http://127.0.0.1:8000/api/Profiles/");
    const data = await response.json();
    setProfiles(data);
    if (response.status === 200) {
      setIsFound(true);
    }
  };
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
