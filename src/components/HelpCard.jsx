import PropTypes from "prop-types";

const HelpCard = ({ icon: Icon, title, description, color, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors group"
  >
    <Icon
      className={`w-12 h-12 mb-4 ${color} group-hover:scale-110 transition-transform`}
    />
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </button>
);

HelpCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

HelpCard.defaultProps = {
  description: "",
  color: "",
};

export default HelpCard;
