import React from "react";
import AnúnciosData from "./Anúncios.json";
import { HiDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

const Anuncios = () => {
  const tableHeaders = [
    "name",
    "position",
    "office",
    "age",
    "date",
    "salary",
    "",
  ];

  return (
    <div className="card mt-3">
      <div className="card-datatable">
        <div className="dataTables_wrapper dt-bootstrap5">
          <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-4">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  // placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                &nbsp;
                <div className="input-group-append custom-input-group">
                  <span className="input-group-text custom-input-group" id="basic-addon2">
                    <FaSearch />
                  </span>
                </div>
                &nbsp;
                <div className="input-group-append custom-input-group">
                  <span className="input-group-text custom-input-group" id="basic-addon2">
                    <RiEqualizerFill />
                  </span>
                </div>
              </div>
            </div>
            <div>
            Mostrando 13 anúncios
            </div>
          </div>
          <div className="table-responsive">
            <table id="data-table-basic" className="table">
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AnúnciosData && AnúnciosData.length > 0 ? (
                  AnúnciosData.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle">{user?.name}</td>
                        <td className="align-middle">{user?.position}</td>
                        <td className="align-middle">{user?.city}</td>
                        <td className="align-middle">{user?.age}</td>
                        <td className="align-middle">{user?.date}</td>
                        <td className="align-middle">{user?.salary}</td>
                        <td>
                          <HiDotsVertical />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontSize: "larger",
                      }}
                    >
                      <h4 className="pb-5" style={{ marginTop: "150px" }}>
                        No record found!
                      </h4>
                      <br />
                      <br />
                      <br />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
