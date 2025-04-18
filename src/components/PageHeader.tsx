
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
  backgroundImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
}: PageHeaderProps) => {
  return (
    <div 
      className={`relative bg-gray-50 py-12 md:py-20 ${className}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
