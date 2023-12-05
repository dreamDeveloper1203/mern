import React, { useContext } from "react";
import Context from "./Context";
import Asidebar from "./Asidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

const Layouts = () => {
  const [context] = useContext(Context);

  return (
    <>
      {context && context.auth ? (
        <>
          <div className="d-flex" id="wrapper">
            <Asidebar />
            <div id="page-content-wrapper">
              <Topbar />
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layouts;
