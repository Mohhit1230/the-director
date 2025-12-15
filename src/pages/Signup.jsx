import { useNavigate } from "react-router-dom";
import AuthForm from "../features/auth/components/AuthForm";
import AuthFormCard from "../features/auth/components/AuthFormCard";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useToast } from "../components/ui/Toast";

export default function Signup() {
  const auth = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <div className=" mb-12">
      <AuthFormCard
        title="Create an account"
        subtitle="Enter your details below"
        image="/images/auth/signupimg.png"
        footerText="Already have an account?"
        footerLinkText="Log in"
        footerLinkTo="/login"
        error={error}
        loading={loading}
        showGoogleSignIn
        onGoogleSignIn={() =>
          toast.show("Google Sign In not implemented", { type: "info" })
        }
      >
        <AuthForm
          mode="signup"
          onSubmit={async (payload) => {
            setError(null);
            setLoading(true);
            try {
              await auth.register({
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                password: payload.password,
              });
              toast.show("Account created", { type: "success" });
              navigate("/home");
            } catch (err) {
              toast.show(err.message || "Signup failed", { type: "error" });
              setError(err.message);
            } finally {
              setLoading(false);
            }
          }}
        />
      </AuthFormCard>
    </div>
  );
}
