import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="navlink">
    <div style={{ margin: '10px' }}>
    <NavLink to="/" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
        Home
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/user" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
        User
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/courses" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
        Courses
    </NavLink>
</div>
<div style={{ margin: '10px' }}>
    <NavLink to="/about" style={({ isActive }) => ({ 
        color: isActive ? 'greenyellow' : 'white' })}>
        About
    </NavLink>
</div>

</div>

</>
  );
};
export default Header;
