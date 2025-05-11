
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NotificationDebugCardProps {
  debugInfo: any;
}

const NotificationDebugCard = ({ debugInfo }: NotificationDebugCardProps) => {
  if (!debugInfo) return null;
  
  return (
    <Card className="bg-muted/50 mb-4">
      <CardHeader>
        <CardTitle className="text-sm">Debug Information</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="text-xs overflow-auto max-h-40">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );
};

export default NotificationDebugCard;
