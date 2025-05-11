
import { Input } from "@/components/ui/input";

interface NotificationsSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const NotificationsSearch = ({ searchTerm, onSearchChange }: NotificationsSearchProps) => {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Search notifications..."
        className="max-w-sm"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default NotificationsSearch;
