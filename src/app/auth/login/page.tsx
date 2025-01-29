import LoginForm from "@/features/auth/LoginForm";
import { Container } from "@/components/ui/container";

export default function LoginPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Container className="min-h-[100svh] flex items-center justify-center ">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
