import { useState } from "react";
import { type TUser, TUserRole } from "@/features/user/user.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProfileForm } from "./ProfileForm";
import {
  TypographyH14,
  TypographyH20,
  TypographyH24,
} from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type ProfileCardProps = {
  user: TUser;
};

export function ProfileCard({ user }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const roleColors = {
    [TUserRole.ADMIN]: "bg-red-500",
    [TUserRole.STUDENT]: "bg-blue-500",
    [TUserRole.TEACHER]: "bg-green-500",
    [TUserRole.PARENT]: "bg-yellow-500",
  };

  const roleImages = {
    [TUserRole.ADMIN]: "/Admin Icon.png",
    [TUserRole.PARENT]: "Parent Icons.png",
    [TUserRole.STUDENT]: "Student Icon.png",
    [TUserRole.TEACHER]: "Teacher Icon.png",
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Avatar className="size-[120px] p-6">
          <AvatarImage src={`${roleImages[user.role]}`} />
          <AvatarFallback>
            {user.first_name[0]}
            {user.last_name[0]}
          </AvatarFallback>
        </Avatar>
        {!isEditing && (
          <TypographyH24 className={"font-semibold"}>
            {user.first_name} {user.last_name}
          </TypographyH24>
        )}
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <TypographyH20 className={"font-semibold"}>
              Edit Profile
            </TypographyH20>
            <div>
              <ProfileForm
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                user={user}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <TypographyH14 className="text-[#272937BF] ">
              Role:{" "}
              <Badge className={`${roleColors[user.role]} text-white`}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Badge>
            </TypographyH14>

            <TypographyH14 className="text-[#272937BF] ">
              Email: {user.email}
            </TypographyH14>
            <TypographyH14 className="text-[#272937BF]">
              User ID: {user.id}
            </TypographyH14>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!isEditing && user.role === TUserRole.ADMIN && (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </CardFooter>
    </Card>
  );
}
