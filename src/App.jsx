import Layout from "./Layout";

function App() {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full">
        <div className="absolute inset-0 -z-10 min-h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/new-background.webp')" }}></div>
        <div className="absolute inset-0 -z-10 min-h-full w-full backdrop-blur-sm"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[20%] translate-y-[10%] rounded-full bg-cyan-500 opacity-20 blur-[90px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[70%] translate-y-[50%] rounded-full bg-indigo-500 opacity-20 blur-[90px]"></div>
      </div>
      <div className="relative">
        <Layout />
      </div>
    </>
  );
}

export default App;
