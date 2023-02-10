import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navber from '../Pages/Shared/Navber/Navber';
import bgimage from '../assets/images/bg.png'
const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const backgroundImg = {
    backgroundImage: `url(${bgimage})`,
    backgroundRepeat: 'no-repeat'
  }

    return (
        <div style={backgroundImg} >
            <Navber></Navber>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
            <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
      
      <li> <Link to= '/dashboard'>My Appointment</Link> </li>
      {
        isAdmin && <>
        <li> <Link to= '/dashboard/users'>All Users</Link> </li>
        </>
      }
      {
        isAdmin && <>
        <li> <Link to= '/dashboard/adddoctor'>Add a Doctor</Link> </li>
        </>
      }
      {
        isAdmin && <>
        <li> <Link to= '/dashboard/managedoctors'>Manage Doctors</Link> </li>
        </>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;