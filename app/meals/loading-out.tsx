import classes from "./loading.module.scss";

// File renamed to loading-out because it wont't be used anymore
const MealsLoadingPage = () => {
  return <p className={classes.loading}>Fetching meals...</p>;
};

export default MealsLoadingPage;
