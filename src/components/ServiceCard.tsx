
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link: string;
  buttonText?: string;
  variant?: "default" | "feature";
}

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  link,
  buttonText = "Learn More",
  variant = "default",
}: ServiceCardProps) => {
  if (variant === "feature") {
    return (
      <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg">
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          {icon && <div className="mb-4 text-jax-primary">{icon}</div>}
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
          <Button variant="link" className="p-0 text-jax-primary" asChild>
            <Link to={link} className="inline-flex items-center">
              {buttonText} <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {icon && <div className="mb-4 text-jax-primary">{icon}</div>}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Button variant="link" className="p-0 text-jax-primary" asChild>
        <Link to={link} className="inline-flex items-center">
          {buttonText} <ArrowRight size={16} className="ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
