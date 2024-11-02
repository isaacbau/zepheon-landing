const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold font-playfair mb-12 text-center text-gray-900">
          About Zepheon
        </h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Who We Are
          </h2>
          <p className="text-xl text-gray-700 font-playfair mb-6 leading-relaxed">
            We're a technology company focused on bringing practical AI
            solutions and custom software development to businesses worldwide.
            Our team brings together experienced professionals from leading
            German industrial firms, American tech companies, and renowned
            venture capital firms.
          </p>
          <p className="text-xl text-gray-700 font-playfair mb-6 leading-relaxed">
            What sets us apart is our international perspective and diverse
            expertise, allowing us to understand and solve complex business
            challenges across different markets and industries.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            At Zepheon, we believe in making advanced technology accessible and
            practical. Our goal is to help organizations implement meaningful
            tech solutions that create real value and drive sustainable growth.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Our Team
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            Our team brings together diverse talents from across the globe. Our
            engineers have built systems at major German automotive companies,
            American tech firms, and international enterprises. Our business
            team includes alumni from leading venture capital firms, bringing
            strategic insight to every project. Combined with our design team's
            expertise in creating user-centered digital experiences, we offer a
            well-rounded approach to technological innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
