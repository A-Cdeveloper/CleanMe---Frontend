import { type User } from "../../types";

const ProblemUser = ({
  user,
}: {
  user: Pick<User, "firstname" | "lastname" | "email">;
}) => {
  return (
    <>
      <div className="tablecaption">Prijavio:</div>
      <div>{user.firstname + " " + user.lastname}</div>
    </>
  );
};

export default ProblemUser;
