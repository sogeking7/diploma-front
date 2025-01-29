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
