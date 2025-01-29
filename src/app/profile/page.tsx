"use client";

import { TypographyH32, TypographyH40 } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { useAuth } from "@/features/auth/AuthContext";
import { ProfileCard } from "@/components/Profile/ProfileCard";

export default function Home() {
  const { user, loading } = useAuth();
  if (loading) {
    return <Container>Loading...</Container>;
  }
  if (!user) {
    return null;
  }
  return (
    <Container>
      <TypographyH32 className="mb-8 font-semibold">
        Personal Info
      </TypographyH32>
      <ProfileCard user={user} />
    </Container>
  );
}
