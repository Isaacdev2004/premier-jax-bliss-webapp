
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  children, 
  className = "", 
  backgroundImage = "/lovable-uploads/34d28798-6a3b-4bfc-8144-7527883a3bd9.png" 
}: PageHeaderProps) => {
  return (
    <div 
      className={`relative bg-gray-50 py-12 md:py-20 transform transition-all duration-500 ease-in-out hover:shadow-xl ${className}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 animate-slide-in">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 animate-slide-in" 
             style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>
        )}
        <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
