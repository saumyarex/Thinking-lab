import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication }) {
  console.log("Authication", authentication);
  const user = useSelector((state) => state.auth);
  console.log("User status:", user.status);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && user.status !== authentication) {
      navigate("/login");
    } else if (!authentication && user.status !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authentication, user.status, navigate]);

  return loading ? <Loader className="animate-spin" /> : <>{children}</>;
}

export default AuthLayout;
