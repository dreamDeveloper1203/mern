import { Link, useNavigate } from "react-router-dom";
import { InputField, SubmitButton } from "../../components/FormElements";
import React, { useContext } from "react";
import Context from "../../components/Context";

const Login = () => {
  const navigate = useNavigate();
  const [context, setContext] = useContext(Context);

  const submitForm = () => {
    localStorage.setItem("dashboard-token", true);
    setContext((prevstate) => ({
      ...prevstate,
      auth: { login: true },
    }));
    navigate("/");
  };
  return (
    <>
      <div className="auth-page-wrapper login pt-5 vh-100">
        <div className="auth-page-content h-100">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4 login-card-bg-fill">
                  <div className="card-body p-4 px-5">
                    <div className="text-center mt-2">
                      <Link to="/">
                        <img
                          src="./images/logo.png"
                          alt="Login Logo"
                          className="login-logo"
                        />
                      </Link>
                      <h1 className="text-white fw-bold mb-0">turismo</h1>
                      <p className="fs-2 text-white">intelligente</p>
                    </div>
                    <div className="p-2 mt-4 mx-2">
                      <InputField
                        type="email"
                        name="email"
                        title="Telefone, nome de usuario ou email"
                      />
                      <InputField
                        type="password"
                        name="password"
                        title="Senha"
                      />
                      <SubmitButton
                        type="button"
                        title="Entrar"
                        action={() => submitForm()}
                      />
                      <div className="text-center mt-2">
                        <Link
                          className="text-decoration-none text-white"
                          to="forgot-password"
                        >
                          Esqueceu sua senha?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
