import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
            <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li> <Link to= '/dashboard'>My Appointment</Link> </li>
      {
        isAdmin && <>
        <li> <Link to= '/dashboard/users'>All Users</Link> </li>
        </>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;