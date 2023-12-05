import { Link, NavLink } from "react-router-dom";
import React, { createContext } from "react";

const Asidebar = () => {
  return (
    <>
      <div className="border-end" id="sidebar-wrapper">
        <div className="sidebar-heading d-flex justify-content-center">
          <img src="/images/logo.png" alt="Sidebar Logo" height="34" />
        </div>
        <div className="list-group list-group-flush">
          <NavLink
            className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-center"
            activeClassName="selected"
            to="/dashboard"
          >
            <i className="bi bi-house-door me-2"></i> Pagina Inicial
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-center"
            activeClassName="selected"
            to="/empresas"
          >
            <i className="bi bi-shop-window me-2"></i> Empresas
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-center"
            activeClassName="selected"
            to="/anuncios"
          >
            <i className="bi bi-megaphone me-2"></i> Anuncios
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
