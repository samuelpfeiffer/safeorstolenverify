
export const AuthPageLoading = () => {
  return (
    <div className="bg-sos text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sos-orange mx-auto mb-4"></div>
        <p className="text-foreground/90">Loading...</p>
      </div>
    </div>
  );
};
