import { useNavigate } from "react-router-dom";

const BackButton = ({ to = "/" }: { to?: string | number }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4 border-b-1 border-secondary-500/30">
      <button
        onClick={() => navigate(to as string)}
        className="border-transparent text-secondary-500"
      >
        {" "}
        ← Nazad
      </button>
    </div>
  );
};

export default BackButton;
