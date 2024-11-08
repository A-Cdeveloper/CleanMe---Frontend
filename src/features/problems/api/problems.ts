import { API_URL } from "../../../constants";
import { Problem } from "../../../types";
import { wait } from "../../../utils/timeFunctions";

export const getAllProblemsApi = async (
  solved: string | null,
  cat_id: number | null
): Promise<Problem[]> => {
  let query = "";

  if (solved && solved != "all") {
    query = `?solved=${solved}`;
  }

  if (cat_id != null) {
    query = `?cat_id=${cat_id}`;
  }

  if (solved && solved != "all" && cat_id != null) {
    query = `?solved=${solved}&cat_id=${cat_id}`;
  }

  try {
    await wait(2000);
    const response = await fetch(`${API_URL}/problems/${query}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch problems: ${response.status} ${response.statusText}`
      );
    }
    const problems = await response.json();
    return problems;
  } catch (error) {
    // Check if the error is an instance of the Error object to get a better message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};

export const getSingleProblemApi = async (id: string): Promise<Problem> => {
  try {
    await wait(2000);
    const response = await fetch(`${API_URL}/problems/${id}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch problem: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    // Check if the error is an instance of the Error object to get a better message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};

export const addNewProblemApi = async (problem: Problem): Promise<Problem> => {
  try {
    await wait(2000);
    const response = await fetch(`${API_URL}/problems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(problem),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to add problem: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    // Check if the error is an instance of the Error object to get a better message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};
