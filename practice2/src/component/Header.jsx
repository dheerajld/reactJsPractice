import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Employe Details
        </Link>
        <Link to="/user" style={{ padding: 5 }}>
          User Detials
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
    </div>
  );
};
export default Header;
