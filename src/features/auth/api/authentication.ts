import { API_URL } from "../../../constants";
import { User } from "../../../types";

export const loginApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to login: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};

export const registerApi = async ({
  firstname,
  lastname,
  phone,
  email,
  password,
}: {
  firstname: string;
  lastname: string;
  phone?: string;
  email: string;
  password: string;
}): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, phone, email, password }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to register: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`${errorMessage}`);
  }
};