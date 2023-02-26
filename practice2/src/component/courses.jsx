import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Courses = () => {
return (
	<div className="Page">
	<h1>You are in the Courses page!</h1>
	<h3>React-courses</h3>
	<div className="courses-nav">
		<NavLink to="/courses/search">Search</NavLink>
		<NavLink to="/courses/list">List</NavLink>
	</div>
	<Outlet />
	</div>
)
}

export default Courses
