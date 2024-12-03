/** @format */

import { ReactNode } from "react";
import Layout from "../Layout/Layout";

type Props = {
  children: ReactNode;
};
const PageWrapper = ({ children }: Props) => {
  return (
    <div>
      <Layout />
      {children}
    </div>
  );
};
export default PageWrapper;
