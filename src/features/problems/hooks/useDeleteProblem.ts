import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProblemApi } from "../api/problems";

import { Problem } from "../../../types";

const useDeleteProblem = (): UseMutationResult<Problem, Error, string> => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Problem, Error, string>({
    mutationFn: deleteProblemApi, // This is the function to delete the problem
    onSuccess: (data: Problem) => {
      toast.success(`Problem "${data.title}" je uklonjen!`);
      queryClient.invalidateQueries({ queryKey: ["problems"] }); // Optional: refresh the problems query
    },
    onError: (err: Error) => {
      toast.error("Došlo je do greške pri uklanjanju problema." + err.message);
    },
  });

  return mutation;
};

export default useDeleteProblem;
