import { z } from "zod";

export enum TUserRole {
  ADMIN = "admin",
  STUDENT = "student",
  TEACHER = "teacher",
  PARENT = "parent",
}

export type TUser = {
  first_name: string;
  last_name: string;
  email: string;
  role: TUserRole;
  id: number;
};

export const userSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.nativeEnum(TUserRole),
  id: z.number(),
});
