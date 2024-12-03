/** @format */
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/simple_form">Simple Form</Link>
        </li>
      </nav>
    </>
  );
};
export default Layout;
