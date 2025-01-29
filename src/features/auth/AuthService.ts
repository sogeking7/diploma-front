import axiosInstance from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";
import { ApiError } from "@/lib/api.types";

/**
 * Type for login request parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * Type for login response payload
 */
export interface LoginResponse {
  access_token: string;
  token_type: string;
}

/**
 * AuthService provides authentication-related API calls.
 */
class AuthService {
  /**
   * Logs in the user and returns an access token.
   * @param {LoginParams} params - User login credentials.
   * @returns {Promise<LoginResponse>} - Resolves with the access token.
   * @throws {ApiError} - Throws if the API request fails.
   */
  static async login(params: LoginParams): Promise<LoginResponse> {
    try {
      const response = await axiosInstance.post<LoginResponse>(
        "/auth/token",
        // @ts-ignore
        new URLSearchParams(params), // Converts JSON to `application/x-www-form-urlencoded`
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  /**
   * Logs out the user by removing the access token.
   */
  static logout(): void {
    localStorage.removeItem("access_token");
    // Add any additional logout logic here (e.g., redirect to login)
  }

  /**
   * Handles API errors in a standardized way.
   * @param {unknown} error - The error thrown by Axios or other sources.
   * @throws {ApiError} - Throws an error with a structured response.
   */
  private static handleApiError(error: unknown): never {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail?: string }>;
      const status = axiosError.response?.status || 500;
      const message =
        axiosError.response?.data?.detail || "An unexpected error occurred.";
      throw { status, message } as ApiError;
    }
    throw { status: 500, message: "An unknown error occurred." } as ApiError;
  }
}

export default AuthService;
