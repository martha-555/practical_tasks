/** @format */

import classes from "./styles.module.css";
/** @format */
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className={classes.navigation}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/simple_form">Simple Form</Link>
        </li>
        <li>
          <Link to="/hook_form">Hook Form</Link>
        </li>
        <li>
          <Link to="/zod_form">ZOD Form</Link>
        </li>
      </nav>
    </>
  );
};
export default Layout;
