
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, subtitle, children, className = "" }: PageHeaderProps) => {
  return (
    <div className={`bg-gray-50 py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
