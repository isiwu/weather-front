import React from "react";
import awLogo from "../assets/image/aw-logo.jpg";

const Footer = ({pathname}) => {
  return (
    <footer>
      <p className="bg-dark text-white text-center p-4">
      <span className="copyright">Copyright &copy; Weather Info</span>
        { pathname !== "/" && <span className="powered-by ml-1"><span className="text-success font-weight-bold">|</span> Powered by <img src={awLogo} alt="accurate weather logo" width="120"
          /></span>
        }
      </p>
    </footer>
  )
};

export default Footer;