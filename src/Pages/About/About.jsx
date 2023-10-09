import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";

const About = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto py-10 px-2 lg:px-0">
                <Navbar></Navbar>
                <h2 className="text-5xl font-extrabold text-center mt-6 text-cyan-800 mb-8">About Us</h2>
                <p>Welcome to <b>DreamDayDesigners</b>, where celebrations are transformed into unforgettable experiences that tell unique stories. Founded with a passion for creativity and a commitment to excellence, we are dedicated to crafting events that go beyond the ordinary, leaving a lasting impression on you and your guests.</p>
                <h4 className="text-2xl font-bold text-cyan-800 mt-4">Our Mission</h4>
                <p>At <b>DreamDayDesigners</b>, our mission is to transform your dreams and ideas into extraordinary events. We believe in the power of thoughtful details and creative concepts. Every event we plan is a reflection of your vision, personality, and style. Our goal is to create immersive experiences that captivate the senses, evoke emotions, and leave a lasting imprint on everyone involved.</p>
                <h4 className="text-2xl font-bold text-cyan-800 mt-4">Our Promise</h4>
                <p>When you choose <b>DreamDayDesigners</b>, you are not just hiring a service; you are gaining a partner in your event planning journey. We promise to be with you every step of the way, offering guidance, support, and creativity. Your trust means the world to us, and we are committed to exceeding your expectations and creating moments that you and your guests will cherish forever.</p>
                <h4 className="text-2xl font-bold text-cyan-800 mt-4">Get In Touch</h4>
                <p>Ready to embark on your event planning adventure? Contact us today to schedule a complimentary consultation. Let us discuss your dreams, ideas, and aspirations. Together, we will create an event that tells your story, captures your essence, and leaves a lasting legacy. Thank you for considering <b>DreamDayDesigners</b> as your event partner. We look forward to bringing your vision to life and being a part of your special day.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;