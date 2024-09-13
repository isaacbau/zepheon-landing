import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    inquiry: "",
    name: "",
    email: "",
    company: "",
    title: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    // For this example, we'll just open the user's email client
    const subject = encodeURIComponent("Zepheon Contact Form Submission");
    const body = encodeURIComponent(`
      Inquiry: ${formData.inquiry}
      Name: ${formData.name}
      Email: ${formData.email}
      Company: ${formData.company}
      Title: ${formData.title}
    `);
    window.location.href = `mailto:about@zepheon.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold font-playfair mb-12 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-gray-600 mb-6 font-playfair">
              Thank you for your interest in Zepheon. Please fill out the form
              below to ask a question or discuss your project needs.
            </p>
            <p className="text-gray-600 mb-6 font-playfair">
              Required fields are marked with an asterisk (*).
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I'm interested in:*
                </label>
                <div className="space-y-2">
                  {[
                    "Software Consulting",
                    "AI Integration",
                    "Enterprise Software Solutions",
                    "Other Business Inquiries",
                  ].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="inquiry"
                        value={option}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#B5A642] focus:ring-[#B5A642]"
                        required
                      />
                      <label className="ml-2 text-sm text-gray-600 font-playfair">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {[
                { name: "name", label: "Name*", type: "text" },
                { name: "email", label: "Email*", type: "email" },
                { name: "company", label: "Company or School", type: "text" },
                { name: "title", label: "Title", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    onChange={handleChange}
                    required={field.label.includes("*")}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#B5A642] focus:border-[#B5A642] sm:text-sm"
                  />
                </div>
              ))}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#B5A642] hover:bg-[#9A8C3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B5A642]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold font-playfair mb-2">
                Our Expertise
              </h2>
              <p className="text-gray-600 font-playfair">
                Zepheon specializes in cutting-edge AI integration, custom
                software solutions, and strategic tech consulting for businesses
                of all sizes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-playfair mb-2">
                Office Hours
              </h2>
              <p className="text-gray-600 font-playfair">
                Our team is available Monday through Friday, 9am to 6pm PST. We
                strive to respond to all inquiries within one business day.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-playfair mb-2">
                Report Security Vulnerabilities
              </h2>
              <p className="text-gray-600 font-playfair">
                If you see a technical security or privacy vulnerability on any
                of our websites, please let us know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
