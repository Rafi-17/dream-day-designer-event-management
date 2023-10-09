
import Navbar from "../../Components/Shared/Navbar";

const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto px-2 mb-4 lg:mb-0 lg:px-0">
        <h2 className="text-center text-2xl md:text-5xl text-cyan-800 font-extrabold my-8">Contact Us</h2>
        <p className="text-lg md:text-xl font-medium mb-4">
          We would love to hear from you! Whether you are planning an event or
          just have a question, feel free to reach out to us. Here is how you
          can get in touch:
        </p>
        <h4 className="text-xl md:text-3xl font-semibold mb-2">Send Us a Message:</h4>
        <p className="text-lg md:text-xl mb-4">
          Have a question or a specific inquiry about our services? Fill out the
          form below, and we will get back to you as soon as possible.
        </p>
        <h4 className="text-xl md:text-3xl font-semibold mb-2">Connect With Us:</h4>
        <p className="text-lg md:text-xl">
          Follow us on social media for the latest updates, event inspiration,
          and exclusive offers: 
        </p>
          <ul className="list-disc cursor-pointer text-blue-600 underline mb-4">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
        </ul>   
        <h4 className="text-xl md:text-3xl font-semibold mb-2">Stay Updated:</h4>
        <p className="text-lg md:text-xl  mb-4">
          Subscribe to our newsletter to receive event planning tips, exclusive
          offers, and news about upcoming events. Enter your email address below
          to subscribe:
        </p>
        <input className="border-2 border-black px-4 w-64 py-2 text-white rounded-sm" placeholder="Email.." type="email" name="" id="" />
      </div>
    </div>
  );
};

export default Contact;
