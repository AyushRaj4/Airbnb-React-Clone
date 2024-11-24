import { Outlet, useLocation } from "react-router";
import { Modal, Navbar, Footer } from "../../components";

const HomeLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/wishlists" && location.pathname != "/login" && (
        <Navbar />
      )}
      <Modal />
      <Footer />
      <Outlet />
      {/* footer is fixed, so doesn't matter where we place it in component */}
    </>
  );
};

export default HomeLayout;
