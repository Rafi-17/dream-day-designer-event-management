import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20">
      <footer className="footer p-10 bg-cyan-600 text-white text-lg">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a className="text-3xl">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a className="text-3xl">
                <AiFillYoutube></AiFillYoutube>
            </a>
            <a className="text-3xl">
                <FaFacebookF></FaFacebookF>
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
