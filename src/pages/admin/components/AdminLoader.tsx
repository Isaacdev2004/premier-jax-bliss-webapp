
const AdminLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="animate-pulse space-y-3 flex flex-col items-center">
        <div className="h-16 w-16 rounded-full bg-muted"></div>
        <div className="h-4 w-48 bg-muted rounded"></div>
        <div className="h-3 w-32 bg-muted rounded"></div>
      </div>
    </div>
  );
};

export default AdminLoader;
