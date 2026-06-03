import LoginForm from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <section className="flex items-center justify-center p-8 lg:p-16">
        <LoginForm />
      </section>

      <section className="hidden bg-blue-600 p-16 text-white lg:flex lg:flex-col lg:justify-center">
        <div className="max-w-md space-y-6">
          <h2 className="text-6xl font-bold tracking-tight">
            ticktock
          </h2>

          <p className="text-lg leading-8 text-blue-100">
            Introducing ticktock, our cutting-edge
            timesheet web application designed to
            revolutionize how you manage employee
            work hours.
          </p>
        </div>
      </section>
    </main>
  );
}