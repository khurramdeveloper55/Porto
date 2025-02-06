import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isAuthenticated) return <Outlet />;

  return null;
}
