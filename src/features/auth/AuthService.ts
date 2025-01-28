import axiosInstance from "../../lib/axios";

interface LoginResponse {
  access_token: string;
  token_type: string;
}

interface LoginParams {
  username: string;
  password: string;
}

class AuthService {
  static async login(params: LoginParams): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>(
      "/api/v1/auth/token",
      // @ts-ignore
      new URLSearchParams(params),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    return response.data;
  }

  static logout() {
    localStorage.removeItem("access_token");
    // Add any additional logout logic here
  }
}

export default AuthService;
