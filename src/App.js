import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#home" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
            Ajit's Portfolio
          </a>
          <div className="space-x-6 text-lg">
            <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
            <a href="#subjects" className="hover:text-yellow-300 transition duration-300">Subjects</a>
            <a href="#images" className="hover:text-yellow-300 transition duration-300">Gallery</a>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg')", // Replace with your books image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  opacity-80"></div>
        <div className="relative text-center text-white px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Master the Art of Mathematics <br />
            with <span className="text-yellow-400">Ajit</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200">
            Unlock concepts, build confidence, and excel in grades 10, 12, and beyond.
          </p>
          <p className="text-md md:text-lg mt-2 text-gray-300">
            Competitive exams | Personalized guidance | Proven results
          </p>
          <a href="#contact">
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-blue-800 font-bold rounded-lg hover:bg-yellow-500 hover:scale-105 transition duration-300 shadow-lg">
              Contact Now
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">About Ajit</h2>
          <p className="mt-6 text-gray-800 text-center max-w-3xl mx-auto">
            Ajit is a passionate mathematics educator with years of experience teaching students from basic levels to grades 10 and 12. He also specializes in preparing students for competitive exams like IIT-JEE, NTSE, and Olympiads.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-white shadow-lg rounded-md p-6 text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-600">Teaching Experience</h3>
              <p className="text-gray-600 mt-2">5+ years of proven success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Expertise in Mathematics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-blue-50 shadow-lg rounded-md p-6 text-center hover:bg-yellow-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">Basic Mathematics</h3>
              <p className="text-gray-600 mt-2">Perfect for beginners to build a strong foundation.</p>
            </div>
            <div className="bg-blue-50 shadow-lg rounded-md p-6 text-center hover:bg-yellow-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">Class 10 Mathematics</h3>
              <p className="text-gray-600 mt-2">Detailed coaching aligned with school syllabus.</p>
            </div>
            <div className="bg-blue-50 shadow-lg rounded-md p-6 text-center hover:bg-yellow-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">Class 12 Mathematics</h3>
              <p className="text-gray-600 mt-2">Comprehensive preparation for board exams.</p>
            </div>
            <div className="bg-blue-50 shadow-lg rounded-md p-6 text-center hover:bg-yellow-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600">Competitive Exams</h3>
              <p className="text-gray-600 mt-2">Specialized guidance for IIT-JEE, NTSE, and Olympiads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="images" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group relative">
                <img
                  src={`data:image/jpeg;base64,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`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-md shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg">Image {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Contact Me</h2>
          <form className="mt-10 max-w-lg mx-auto bg-gray-50 shadow-lg p-8 rounded-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
