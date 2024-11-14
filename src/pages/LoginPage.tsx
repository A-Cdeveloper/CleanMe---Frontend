import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import LoginRegisterForm from "../features/auth/LoginRegisterForm";
import { useUrlParams } from "../hooks/useUrlParams";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const { mode } = useUrlParams();

  if (isAuthenticated || !mode) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="w-full h-[80%] flex flex-col items-center justify-center px-9">
      <LoginRegisterForm mode={mode} />
    </div>
  );
};

export default LoginPage;
