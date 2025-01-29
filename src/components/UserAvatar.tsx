import { useAuth } from "@/features/auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH12, TypographyH16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const UserAvatar = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (loading) {
    return "Loading...";
  }

  if (!user) {
    return <Button onClick={() => router.push("/auth/login")}>Sign in</Button>;
  }

  const full_name = user.first_name + " " + user.last_name;
  const role = user.role;

  return (
    <div className="flex gap-3 items-center ">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <TypographyH16 className="mb-[2px] font-medium">
          {full_name}
        </TypographyH16>
        <TypographyH12 className="text-[#272937BF]">{role}</TypographyH12>
      </div>
    </div>
  );
};
