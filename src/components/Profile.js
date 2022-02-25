import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalData } from '../App';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    let gData = useContext(GlobalData);

    // useEffect(()=>{
    //     gData.setUserInfo(user);
    // },[])

    return (
        isAuthenticated?(
            <div>
                {/* {gData.setUserInfo(user)} */}
                <img src={user.picture} alt={user.name} />
                {JSON.stringify(user, null, 2)}
            </div>
        ):<></>
    )
}

export default Profile;