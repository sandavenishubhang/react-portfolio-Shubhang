import logo from "../assets/sy-high-resolution-logo-transparent.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shubhang-yadav-sandaveni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sandavenishubhang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
