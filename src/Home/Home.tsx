/** @format */
import floki from "../images/_DSC8430.jpg";
import PageWrapper from "../PageWrapper/PageWrapper";
import classes from "./styles.module.css";

const Home = () => {
  return (
    <PageWrapper>
      <div className={classes.container}>
        <div className={classes.home}>&#10084; HOME &#x2764;</div>
      </div>
    </PageWrapper>
  );
};
export default Home;
