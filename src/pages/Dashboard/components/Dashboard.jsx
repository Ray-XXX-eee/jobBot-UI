import React, { useState } from "react";
import ContextProvider from "../../../store/AppContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import PostList from "./PostList";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState("Home");

  return (
    <div>
      <ContextProvider>
        <div className="appContainer">
          <Sidebar selectedContent={selectedContent} setSelectedContent={setSelectedContent}></Sidebar>
          <div className="contentContainer">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
        <h1>test</h1>
      </ContextProvider>
    </div>
  );
};

export default Dashboard;
