import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    //console.log('usr=',user);
    const handleLogout = () => {
        logOut()
        .then(()=>{ })
        .catch(error => console.log(error));
    }

    return (

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">BDBook.com</a>
  </div>
  <div className="flex-none gap-2">
  <Link to='/'>Home</Link>
  <Link to='/messanger'>Messanger</Link>
  <Link to='/notifications'>Notifications</Link>
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    

    {user?.email && <span>{user.email}</span>}
    
    
    {console.log(user)}



    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            <Link to='/profile'>Profile</Link>
            <span className="badge">View</span>
          </a>
        </li>
        <li><Link to='/setting'>Setting</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/signin'>Sign in</Link></li>
        <li><a><button onClick={handleLogout}>Sign out</button></a></li>
      </ul>
    </div>
  </div>
</div>

    );
};

export default Navbar;