
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  children, 
  className = "",
  align = "center" 
}: SectionHeaderProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 ${className} fade-in`}>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 slide-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
      {children && (
        <div className="slide-up" style={{ animationDelay: '0.3s' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
