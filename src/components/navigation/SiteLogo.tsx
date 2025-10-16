
import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="font-bold text-2xl text-jax-primary">JAX</div>
      <div className="hidden md:flex flex-col leading-tight">
        <span className="font-semibold text-sm">Premier Health Center</span>
        <div className="flex text-xs text-gray-500 font-medium">
          <span>Internal Medicine</span>
        </div>
      </div>
    </Link>
  );
};

export default SiteLogo;
