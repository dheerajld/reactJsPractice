import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

export const About = () => {
  return <div>
    
    
    <h1>About Us</h1>
    
		<NavLink to="/about/userDetial"></NavLink>

    
	

	<Outlet />

    </div>;
};
