import { Link } from "react-router-dom";
import { Problem } from "../../types";
import StatusBadge from "../../ui/StatusBadge";
import Headline from "../../ui/Headline";
import { formattedDate } from "../../utils/helpers";
import ProblemImage from "./ProblemImage";

const ProblemItem = ({ problem }: { problem: Problem }) => {
  const {
    id,
    title,
    position: { lat, lng },
    status,
    image,
  } = problem || {};

  return (
    <div className="px-2 py-[10px] my-[3px] bg-secondary-500/20 hover:bg-secondary-500/75 relative basis-full md:basis-1/2 lg:basis-full self-stretch">
      <Link to={`/problems/${id}/?lat=${lat}&lng=${lng}`}>
        <StatusBadge
          status={problem.status}
          className="ms-2 absolute end-[-3px] top-[3px] block"
        />
        <div className="flex justify-between gap-5">
          <div>
            <Headline level={4} className="mb-1">
              {title}
            </Headline>

            <span className="text-[12px] block mt-1 text-white/75">
              Prijavljeno: {formattedDate(problem?.createdAt)}
              <br />
              {status === "done" &&
                `Rešeno: ${formattedDate(problem?.createdAt)}`}
            </span>
          </div>

          <ProblemImage
            image={image || ""}
            alt={title || ""}
            className="w-[100px] h-[70px] overflow-hidden self-center border-double border-4 border-secondary-100"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProblemItem;
