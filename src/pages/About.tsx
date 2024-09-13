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
            We're a cutting-edge technology company, specializing in AI
            integration, custom software development, and strategic consulting.
            Our team of ex-FAANG engineers and top-tier designers from the world
            of architecture bring unparalleled expertise to every project.
          </p>
          <p className="text-xl text-gray-700 font-playfair mb-6 leading-relaxed">
            By leveraging our diverse backgrounds, we create innovative
            solutions that bridge the gap between advanced technology and
            real-world business needs.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            At Zepheon, we empower organizations to harness the full potential
            of cutting-edge technology. Our mission is to deliver bespoke AI
            solutions and enterprise software that drive innovation, efficiency,
            and growth.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Our Team
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            Zepheon's current team comprises world-class talent drawn from
            leading tech giants and innovative startups. Our engineers bring
            experience from FAANG companies, ensuring top-tier technical
            expertise in every project. Our design team, with backgrounds
            ranging from cutting-edge UX/UI to award-winning architecture,
            brings a unique perspective to creating intuitive and visually
            striking digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
