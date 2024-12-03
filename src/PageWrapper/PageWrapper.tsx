/** @format */

import { ReactNode } from "react";
import Layout from "../Layout/Layout";
import classes from "./styles.module.css";

type Props = {
  children: ReactNode;
};
const PageWrapper = ({ children }: Props) => {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.leftSide}>
        <Layout />
      </div>
      <div className={classes.rightSide}> {children}</div>
    </div>
  );
};
export default PageWrapper;
