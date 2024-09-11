export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div className="flex flex-col gap-5 max-w-[600px]">
        <h1 className="text-6xl">Hey</h1>
        <p className="text-2xl text-white/60">
          Join us and start your journey to track your daily activities and stay
          connected with your inner self.
        </p>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-lg self-start">
          Get Started
        </button>
      </div>
    </div>
  );
}
