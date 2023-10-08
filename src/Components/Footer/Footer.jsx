import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="grid grid-cols-2 md:grid-cols-3 p-6 md:p-10  bg-cyan-600 text-white text-lg">
        <nav className="flex flex-col">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Weddings</a>
          <a className="link link-hover">Birthdays</a>
          <a className="link link-hover">Anniversaries</a>
          <a className="link link-hover">Holiday</a>
        </nav>
        <nav className="flex flex-col text-right md:text-left">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="mt-6 md:mt-0 text-center md:text-left mx-auto col-span-2 md:col-auto">
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
    </div>
  );
};

export default Footer;
