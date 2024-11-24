import { API_URL } from "../../../constants";
import { ExtendedProblem, Problem } from "../../../types";

export const getAllProblemsApi = async (
  status: string | null,
  cat_id: number | null
): Promise<Problem[]> => {
  let query = "";

  if (status && status != "all") {
    query = `?status=${status}`;
  }

  if (status == "all" || !status) {
    query = "?";
  }

  if (cat_id != null) {
    query = `?cat_id=${cat_id}`;
  }

  if (status && status != "all" && cat_id != null) {
    query = `?status=${status}&cat_id=${cat_id}`;
  }

  try {
    const response = await fetch(
      `${API_URL}/problems/${query}&sort=status,createdAt&order=ASC,DESC`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch problems: ${response.status} ${response.statusText}`
      );
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    // Check if the error is an instance of the Error object to get a better message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};

export const getSingleProblemApi = async (
  id: string
): Promise<ExtendedProblem> => {
  try {
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

export const addNewProblemApi = async (
  newProblem: Problem
): Promise<Problem> => {
  try {
    const response = await fetch(`${API_URL}/problems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProblem),
    });

    const data = await response.json();
    if (!response.ok) {
      const errors: string[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data?.error.map((err: any) => errors.push(err.message));
      throw new Error(errors.join("\n"));
    }
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error : "Greška na serveru";
    throw new Error(`${errorMessage}`);
  }
};

export const updateProblemApi = async (problem: Problem): Promise<Problem> => {
  try {
    // Create an object with only the fields you need to update
    const updatedFields = {
      title: problem.title,
      description: problem.description,
      cat_id: problem.cat_id,
      image: problem.image || "",
      status: problem.status,
    };

    const response = await fetch(`${API_URL}/problems/${problem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    const data = await response.json();

    if (!response.ok) {
      const errors: string[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data?.error.map((err: any) => errors.push(err.message));
      throw new Error(errors.join("\n"));
    }
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error : "Greška na serveru";
    throw new Error(`${errorMessage}`);
  }
};

export const deleteProblemApi = async (id: string): Promise<Problem> => {
  try {
    const response = await fetch(`${API_URL}/problems/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        `Failed to delete problem: ${response.status} ${response.statusText}`
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
