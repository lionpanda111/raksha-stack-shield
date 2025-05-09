
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 py-16">
        <div className="text-center">
          <Shield className="h-16 w-16 text-blue-accent mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary text-lg px-8 py-3">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
