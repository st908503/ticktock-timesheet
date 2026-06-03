import LoginForm from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 bg-[#F9FAFB] lg:grid-cols-2">
      {/* LEFT */}
      <section className="flex items-center justify-center px-6 py-12 lg:px-20">
        <div className="w-full max-w-[640px]">
          <LoginForm />
        </div>
      </section>

      {/* RIGHT */}
<section className="hidden bg-[#1B64F2] lg:flex lg:items-center">
  <div className="w-full max-w-[900px] px-20">
    <div className="space-y-5">
      {/* TITLE */}
      <h2 className="text-[42px] font-semibold tracking-[-0.03em] text-white">
        ticktock
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-[680px] text-[15px] leading-[24px] text-blue-100">
        Introducing ticktock, our cutting-edge timesheet web
        application designed to revolutionize how you manage
        employee work hours. With ticktock, you can effortlessly
        track and monitor employee attendance and productivity from
        anywhere, anytime, using any internet-connected device.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}