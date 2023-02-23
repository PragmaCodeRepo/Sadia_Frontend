import React, { useContext } from "react";
import ProfileContext from "../components/context/ProfileContext";
import { useParams } from "react-router-dom";
// import "./ProfileViewer.css";
import UserViewer from "./UserViewer";
const Profile = () => {
  const context = {
    add_date: "",
    designation: "",
    address: "",
    city: "",
    education: "",
    email_address: "",
    first_name: "",
    last_name: "",
    introduction: "",
    linkdin_profile: "",
    mobile_number: "",
    practice_names: "",
    rating: "",
    speciality: "",
    state: "",
    zip_code: "",
    link: "",
    image: "",
  };
  const { profiles } = useContext(ProfileContext);
  const { id } = useParams();
  const checkProfile = (profile) => {
    return profile["id"] === +id;
  };
  const data = profiles.find(checkProfile);
  console.log(data);
  if (data) {
    context.first_name = data.first_name;
    context.last_name = data.last_name;
    context.address = data.address;
    context.introduction = data.introduction;
    context.city = data.city;
    context.zip_code = data.zip_code;
    context.mobile_number = data.mobile_number;
    context.email_address = data.email_address;
    context.education = data.education;
    context.image = data.image;
    context.linkdin_profile = data.linkdin_profile;
    context.designation = data.designation;
    context.speciality = data.speciality;
    context.practice_names = data.practice_names;
    context.state = data.state;
    context.mapaddress = data.mapaddress;
    context.rating = data.rating;
  }
  return (
    <>
      <UserViewer
        designation={context.designation}
        address={context.address}
        city={context.city}
        education={context.education}
        email_address={context.email_address}
        first_name={context.first_name}
        last_name={context.last_name}
        introduction={context.introduction}
        linkdin_profile={context.linkdin_profile}
        mobile_number={context.mobile_number}
        practice_names={context.practice_names}
        rating={context.rating}
        speciality={context.speciality}
        state={context.state}
        zip_code={context.zip_code}
        link={context.link}
        image={context.image}
        mapaddress={context.mapaddress}
      />
    </>
  );
};

export default Profile;
