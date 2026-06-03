import LoginForm from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-[#f5f5f5]">
      {/* LEFT SIDE */}
      <section className="flex items-center justify-center px-6 py-10 lg:px-20">
        <div className="w-full max-w-[560px]">
          <LoginForm />
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="hidden bg-[#2563EB] lg:flex lg:items-center lg:justify-center">
        <div className="max-w-[520px] px-16">
          <div className="space-y-8">
            <h2 className="text-[64px] font-extrabold leading-none tracking-[-0.03em] text-white">
              ticktock
            </h2>

            <p className="max-w-[470px] text-[22px] leading-[42px] text-blue-100">
              Introducing ticktock, our cutting-edge timesheet web
              application designed to revolutionize how you manage employee
              work hours. With ticktock, you can effortlessly track and
              monitor employee attendance and productivity from anywhere,
              anytime, using any internet-connected device.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}