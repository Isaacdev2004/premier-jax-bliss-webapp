
import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="font-bold text-2xl text-jax-primary">JAX</div>
      <div className="hidden md:flex flex-col leading-tight">
        <span className="font-semibold text-sm">Premier Health Center</span>
        <div className="flex text-xs text-gray-500 font-medium">
          <span className="border-r border-gray-300 pr-2 mr-2">Internal Medicine</span>
          <span>Vivid Bliss Med Spa</span>
        </div>
      </div>
    </Link>
  );
};

export default SiteLogo;
