import { useAuth } from "@/features/auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH12, TypographyH16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TUserRole } from "@/features/user/user.types";

export const UserAvatar = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (loading) {
    return "Loading...";
  }

  if (!user) {
    return <Button onClick={() => router.push("/auth/login")}>Sign in</Button>;
  }

  const roleImages = {
    [TUserRole.ADMIN]: "/Admin Icon.png",
    [TUserRole.PARENT]: "Parent Icons.png",
    [TUserRole.STUDENT]: "Student Icon.png",
    [TUserRole.TEACHER]: "Teacher Icon.png",
  };
  const full_name = user.first_name + " " + user.last_name;
  const role = user.role;

  return (
    <div className="flex gap-3 items-center">
      <Avatar className="p-2">
        <Link href={"/profile"}>
          <AvatarImage src={`${roleImages[user.role]}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Link>
      </Avatar>
      <div>
        <TypographyH16 className="mb-[2px] font-medium">
          <Link href={"/profile"}>{full_name}</Link>
        </TypographyH16>
        <TypographyH12 className="text-[#272937BF]">{role}</TypographyH12>
      </div>
    </div>
  );
};
