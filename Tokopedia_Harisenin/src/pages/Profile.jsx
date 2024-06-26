import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/ProfileComponent/Sidebar";
import TabsMenu from "../components/ProfileComponent/TabsMenu";
import Footer from "../components/Footer/Footer";

const Profile = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center mt-40">
        <Sidebar />
        <TabsMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
