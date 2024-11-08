import { useEffect, useState } from "react";
import { Users, Calendar, MessageSquare } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "BIG STEPPERS | Contact Us";
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-[100dvh] pt-20 sm:pt-24 bg-black text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-10 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 text-white">
            Connect With Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in creating sustainable employment opportunities in
            agriculture?
            <br />
            Discover how our solutions can enhance economic resilience and
            support your community's growth.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white italic text-center">
              We'd love to hear from you!
            </h2>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-gray-900 rounded-[2rem] shadow-xl p-8 lg:p-12 border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-6 py-4 rounded-full bg-black border border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 rounded-full bg-black border border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-full bg-black border border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-6 py-4 rounded-full bg-black border border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-3xl bg-black border border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full p-3">
              <Users className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Let's Build Together
            </h3>
            <p className="text-gray-400">
              Interested in fostering sustainable employment and resilience in
              agriculture? Our team is here to help you make an impact.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full p-3">
              <Calendar className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Schedule a Consultation
            </h3>
            <p className="text-gray-400">
              Learn how our solutions can support Zimbabwe's agricultural
              workforce. Book a personalized session to explore what we can
              achieve together.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full p-3">
              <MessageSquare className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Connect with Us
            </h3>
            <p className="text-gray-400">
              Ready to start a journey toward economic resilience? Reach
              out—we'd love to discuss how we can work together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
