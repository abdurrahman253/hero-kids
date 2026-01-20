import Logo from "@/components/layouts/Logo";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base-100">
      
      {/* Logo bounce */}
      <div className="animate-bounce">
        <Logo />
      </div>

      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="text-lg font-semibold text-gray-500 animate-pulse">
        Loading fun toys for kids...
      </p>
    </div>
  );
};

export default Loading;
