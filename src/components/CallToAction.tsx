
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
}: CallToActionProps) => {
  return (
    <section className={`bg-jax-secondary py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-gray-800">{title}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-jax-primary hover:bg-jax-primary/90 w-full sm:w-auto" asChild>
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
