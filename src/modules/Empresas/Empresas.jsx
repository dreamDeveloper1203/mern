import React, { useEffect } from "react";
import { InputField } from "../../components/FormElements";
import { useContext } from "react";
import Context from "../../components/Context";

const Empresas = () => {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setContext((prevState) => ({
      ...prevState,
      pageTitle: "Epresas",
    }));
  }, []);

  return (
    <>
      <div className="container-fluid px-3">
        <div className="card rounded-4 pb-3 px-3 card-table-view">
          <div className="card-header border-0 py-4 position-sticky top-0 bg-light z-1">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-12">
                <form
                  action=""
                  className="d-flex justify-content-between gap-2"
                >
                  <InputField
                    type="text"
                    name="search"
                    title="Presquisar"
                    size="col-9"
                    className="form-control py-2"
                  />
                  <div className="col d-flex flex-shrink gap-2">
                    <button type="button" className="btn btn-secondary">
                      <i className="bi bi-search"></i>
                    </button>
                    <button type="button" className="btn btn-secondary">
                      <i className="bi bi-filter-square"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center justify-content-end">
                <span className="text-end">Mostrando 13 empresas</span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome da empresas</th>
                    <th>Data de criacao</th>
                    <th>Status</th>
                    <th>Local</th>
                    <th>Categoria Principal</th>
                    <th>Anuncios</th>
                    <th>CNPJ</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5 fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa ABC</td>
                    <td>00/00/2022</td>
                    <td>Rejeitada</td>
                    <td>Criciuma-SC</td>
                    <td>Restaurante</td>
                    <td>10</td>
                    <td>123456789</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical fw-bold fs-5"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye"></i> View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empresas;
