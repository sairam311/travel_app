import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function AdminRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const [ok, setOk] = useState(false);

  const authCheck = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/admin-auth`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", 
      });

      const data = await res.json();
      if (data.check) {
        setOk(true);
      } else {
        setOk(false);
      }
    } catch (err) {
      console.error("Authentication check failed", err);
      setOk(false);
    }
  };

  useEffect(() => {
    if (currentUser !== null) authCheck();
  }, [currentUser]);

  return ok ? <Outlet /> : <Spinner />;
}
