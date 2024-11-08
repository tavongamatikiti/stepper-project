import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-zinc-900 rounded-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 border border-zinc-800">
    <div className="text-green-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white text-center">
      {title}
    </h3>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
