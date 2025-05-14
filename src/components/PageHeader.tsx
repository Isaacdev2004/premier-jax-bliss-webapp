
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
      className={`relative bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-20 transform transition-all duration-500 ease-in-out hover:shadow-xl ${className}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 mb-4 animate-slide-in">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 animate-slide-in" 
             style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>
        )}
        <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
          {children}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-4 top-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-40 float-animation"></div>
      <div className="absolute right-8 bottom-1/4 w-12 h-12 bg-teal-300 rounded-full opacity-30 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute right-1/4 top-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-20 float-animation" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default PageHeader;
