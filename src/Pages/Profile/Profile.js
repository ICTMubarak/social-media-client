import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <h1>This is your profile page.</h1>
            <br /><br /><br />
            {user?.email && <span>{user.email}</span>}
            {console.log(user)}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Profile;