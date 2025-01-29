import axiosInstance from "@/lib/axios";
import { TUser } from "@/features/user/user.types";
import { AxiosError, isAxiosError } from "axios";
import { ApiError } from "@/lib/api.types";

type GetMeResponse = TUser;

class AuthService {
  static async getMe(): Promise<GetMeResponse> {
    try {
      const response = await axiosInstance.get<GetMeResponse>("/users/me");
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  /**
   * Handles API errors in a standardized way.
   * @param {unknown} error - The error thrown by Axios or other sources.
   * @throws {ApiError} - Throws an error with a structured response.
   */
  private static handleApiError(error: unknown): never {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        detail?: string;
        message?: string;
      }>;
      const status = axiosError.response?.status || 500;
      const message =
        axiosError.response?.data?.detail ||
        axiosError.response?.data?.message ||
        "An unexpected error occurred.";
      throw { status, message } as ApiError;
    }
    throw { status: 500, message: "An unknown error occurred." } as ApiError;
  }
}

export default AuthService;
