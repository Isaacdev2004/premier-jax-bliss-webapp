
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
    <div className={`max-w-3xl ${alignClass} mb-12 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionHeader;
