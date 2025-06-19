const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold font-playfair mb-12 text-center text-gray-900">
          About Zepheon
        </h1>

        <div className="mb-16">
          <p className="text-xl text-gray-700 font-playfair mb-6 leading-relaxed">
            Zepheon is a technology company focused on bringing practical AI
            solutions and custom software development to businesses worldwide.
            Drawing from experience at leading German industrial firms, American
            tech companies, and renowned venture capital firms, this work
            represents a synthesis of diverse professional backgrounds.
          </p>
          <p className="text-xl text-gray-700 font-playfair mb-6 leading-relaxed">
            What distinguishes this approach is an international perspective and
            varied expertise, enabling deep understanding of complex business
            challenges across different markets and industries. Our research
            initiatives focus specifically on consumer AI, exploring how local
            mini models can transform fashion, health, and consumer product
            industries by running entirely on user devices without requiring
            expensive GPU infrastructure.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            The Mission
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            At Zepheon, the belief centers on making advanced technology
            accessible and practical. The focus is helping organizations
            implement meaningful tech solutions that create real value and drive
            sustainable growth. Through our research, we're specifically working
            to democratize AI for all founders by eliminating the traditional
            barriers of GPU requirements and complex infrastructure, making
            powerful AI capabilities available to every entrepreneur regardless
            of technical resources or budget.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Background & Expertise
          </h2>
          <p className="text-xl text-gray-700 font-playfair leading-relaxed">
            This work draws from diverse experiences across the globe. Having
            built systems at major German automotive companies, American tech
            firms, and international enterprises, combined with insights gained
            from leading venture capital environments, brings strategic
            perspective to every project. The approach integrates technical
            expertise with user-centered design principles, offering a
            comprehensive view of technological innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
