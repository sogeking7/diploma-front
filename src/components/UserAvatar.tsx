import { useAuth } from "@/features/auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH12, TypographyH16 } from "@/components/ui/typography";

export const UserAvatar = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return "Loading...";
  }

  if (!user) return null;

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
