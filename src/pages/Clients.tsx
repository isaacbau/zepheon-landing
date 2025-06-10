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
      number: 4,
      description: "Startups accelerated in San Francisco",
    },
    { number: 2, description: "Enterprise solutions deployed" },
    { number: 14, description: "AI project integrations" },
    {
      number: 3,
      description: "Industries served: Legal Tech, Consumer, Architecture",
    },
  ];

  const aiProjects = [
    {
      title: "Distributed Analytics Mesh Platform",
      description:
        "Enterprise-grade distributed computing framework implementing graph-based data processing pipelines with real-time ETL capabilities. Features automated schema inference, multi-node orchestration, and predictive analytics using ensemble learning methods.",
    },
    {
      title: "Generative AI Design Studio",
      description:
        "Image generation platform for Architectural design leveraging different Generative custom models, ControlNet architectures and several other techniques. Implemented AI inference backend, custom fine-tuning pipelines, and real-time image conditioning with low-rank adaptation techniques.",
    },
    {
      title: "Neural Knowledge Synthesis Engine",
      description:
        "Real-time information retrieval system powered by RAG architecture, live web search, vector embeddings and LLMs to perform dynamic knowledge synthesis across multiple data streams with recursive retrieval capabilities.",
    },
  ];

  return (
    <div className="min-[90vh] pt-16">
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
            Some of our AI Solutions
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
