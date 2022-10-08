import React from "react";
import IronHackLogo from "../images/ironhack-logo-xs-dark.png";
import MenuImg from "../images/menu-top-xs-dark.png";

export const NavCover = ({ title, summary, icon }) => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column color-container">
      <header className="mb-auto">
        <div className="container-fluid ">
          <img
            className="navbar-brand rounded float-start"
            alt={"ironhacklogo"}
            src={IronHackLogo}

            />
        </div>
        <div>
        <div >
            <img className="rounded float-end" alt={"menuimg"} src={MenuImg}></img>
          </div>

         
          <nav className="nav nav-masthead justify-content-center float-md-end">
          
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>
        Say hello to 
        ReactJS
        </h1>
        <p className="lead">
          You will learn a Frontend 
          framework from scratch, to 
          becaome an Ninka Developer.
        </p>
        <p className="lead">
          
          <a
            input="submit"
            href="/"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"
          >
            Awesome!
          </a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>
          Cover template for{" "}
          <a href="https://getbootstrap.com/" className="text-white">
            Bootstrap
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
