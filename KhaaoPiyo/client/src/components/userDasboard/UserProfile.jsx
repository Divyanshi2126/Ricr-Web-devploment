import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditprofileModal from "./modals/EditprofileModal";

const UserProfile = () => {
  const{isEditProfileModalOpen , setIsEditProfileModalOpen}=useState(false);
  const{user} =useAuth();
  return <>
  <div className="flex gap-10">
    <div>
      <span>Name:</span> <span>{user.fullname}</span>
    </div>
     <div>
      <span>email:</span> <span>{user.email}</span>
    </div>
     <div>
      <span>phone:</span> <span>{user.mobileNumber}</span>
    </div>

    <button className="border px-5 py-2" onClick={()=>setIsEditProfileModalOpen(true)}>Edit Profile</button>
  </div>

  {isEditProfileModalOpen && <EditprofileModal onClose ={()=>setIsEditProfileModalOpen(false)}/>}


  </>;
};

export default UserProfile;
