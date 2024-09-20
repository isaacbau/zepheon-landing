const ClientStat = ({
  number,
  description,
}: {
  number: number;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <span className="text-5xl font-bold text-[#B5A642] mb-4">{number}</span>
    <p className="text-gray-700 text-md font-playfair">{description}</p>
  </div>
);

const AICard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6">
    <div className="w-1/4 h-0.5 bg-[#B5A642] mb-4"></div>
    <h3 className="text-2xl font-bold mb-3 font-playfair">{title}</h3>
    <p className="text-gray-700 text-md font-playfair">{description}</p>
  </div>
);

const Clients = () => {
  const stats = [
    {
      number: 5,
      description: "Startups accelerated in San Francisco",
    },
    { number: 3, description: "Enterprise solutions deployed" },
    { number: 11, description: "AI project integrations" },
    {
      number: 4,
      description:
        "Industries served: Legal Tech, Consumer, Architecture, Bio-Tech",
    },
  ];

  const aiProjects = [
    {
      title: "Autonomous Information Retrieval System",
      description:
        "Our advanced AI-powered search engine utilizes natural language processing and machine learning algorithms to autonomously gather, analyze, and synthesize information from vast datasets in real-time.",
    },
    {
      title: "AI-Driven Document Generation",
      description:
        "We've engineered a sophisticated system that leverages deep learning and natural language generation to automatically create context-aware, professionally formatted documents across various industries.",
    },
    {
      title: "Intelligent Mobile AI Integration",
      description:
        "Our cutting-edge mobile application framework seamlessly integrates AI capabilities, optimizing request routing and processing for enhanced performance and user experience.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ClientStat
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
        <div className="w-full h-px bg-gray-200 mb-16"></div>
      </div>
      <div className="bg-[#F5F1E3] py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
            Pioneering AI Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => (
              <AICard
                key={index}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
