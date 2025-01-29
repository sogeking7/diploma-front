"use client";

import { TypographyH16, TypographyH72 } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { UserAvatar } from "@/components/UserAvatar";

export default function Home() {
  return (
    <div>
      <Container>
        <TypographyH72>Diploma</TypographyH72>
        <UserAvatar />
      </Container>
    </div>
  );
}
