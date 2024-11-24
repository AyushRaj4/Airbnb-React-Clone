import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

const index = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
