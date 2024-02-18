import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";

const HeaderWebsite = () => {
  const [user] = useLocalStorage("user", {});
  // console.log(user);
  const isUserLoggedIn = Object.keys(user).length > 0;
  // console.log(isUserLoggedIn);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    // localStorage.setItem("user", "");

    // window.location.reload();
    // Chuyển hướng hoặc làm bất kỳ điều gì khác sau khi đăng xuất
    navigate("/");
  };
  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 link-secondary">
                  Overview
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Inventory
                </a>
              </li>
              <li>
                <Link to="/abouts" className="nav-link px-2 link-body-emphasis">
                  Abouts
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="nav-link px-2 link-body-emphasis"
                >
                  Products
                </Link>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            {user && isUserLoggedIn == true ? (
              <div className="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width={32}
                    height={32}
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      onClick={handleLogout}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <a className="dropdown text-end text-decoration" href="/signin">
                <h6>Đăng nhập</h6>
              </a>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderWebsite;
