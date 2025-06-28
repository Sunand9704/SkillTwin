import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-9xl font-bold text-blue-700 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-700 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold" size="lg">
          <a href="/">Go to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
