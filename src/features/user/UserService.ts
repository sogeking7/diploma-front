import axiosInstance from "@/lib/axios";
import { TUser } from "@/features/user/user.types";

type GetMeResponse = TUser;

class AuthService {
  static async getMe(): Promise<GetMeResponse> {
    const response = await axiosInstance.get<GetMeResponse>("/users/me");
    return response.data;
  }
}

export default AuthService;
