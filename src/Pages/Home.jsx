import HeroImage from "../assets/Images/ppppp.jpeg";

export default function Home() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 lg:px-28 mt-4 bg-gradient-to-r from-teal-100 to-blue-100">
      {/* Text Section - w-5/12 */}
      <div className="w-full md:w-5/12 max-w-lg text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hey! I am a Web Developer
        </h2>
        <p className="mt-4 text-gray-700 text-md sm:text-md">
       I am a Frontend Developer with 8 months of experience in building responsive and dynamic web applications. My expertise lies in creating and designing modern user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS to deliver seamless user experiences.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-teal-600 cursor-pointer text-white px-10 sm:px-12 py-2.5 rounded-full font-semibold hover:bg-gray-900 transition">
            LEARN MORE
          </button>
          <button className="bg-gray-900 cursor-pointer text-white px-8 sm:px-10 py-2.5 rounded-full font-semibold hover:bg-teal-600 transition">
            HIRE ME
          </button>
        </div>
      </div>

      {/* Image Section - w-7/12 */}
      <div className="w-full md:w-7/12 flex justify-center md:justify-end mt-8 md:mt-8 sm px-4">
        <div className="relative w-full h-auto max-w-[90%] sm:max-w-[60%] md:max-w-[45vw] lg:max-w-[35vw] max-h-[100vh] rounded-lg overflow-hidden">
          <img
            src={HeroImage}
            alt="Profile"
            className="w-full h-auto object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
