import ProblemCategory from "./ProblemCategory";
import { Problem } from "../../types";
import User from "../users/User";
import StatusBadge from "../../ui/StatusBadge";
import { formattedDate } from "../../utils/timeFunctions";

const ProblemHeader = ({ problem }: { problem: Problem }) => {
  return (
    <div className=" bg-secondary/30 my-4 py-2 px-3 grid grid-cols-2 gap-1 text-[14px] rounded-md leading-[1.4]">
      <ProblemCategory problemId={problem.cat_id} />
      <div>Prijavljeno:</div>
      <div>{formattedDate(problem?.createdAt)}</div>
      <User userId={problem!.uid} />
      {problem.updatedAt && (
        <>
          <div>Rešeno:</div>
          <div>{formattedDate(problem?.updatedAt)}</div>
        </>
      )}
      <div>Status:</div>
      <div>
        <StatusBadge status={problem?.solved} className="inline-block" />
      </div>
    </div>
  );
};

export default ProblemHeader;
