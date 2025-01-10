export default function Me() {
  return (
    <section className="flex flex-col items-center justify-center bg-transparent py-20 text-gray-800">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4 pb-8">
        <h3 className="text-center font-mono text-5xl font-bold drop-shadow-lg">Passions</h3>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-evenly gap-16 md:flex-row">
        <a href="https://www.chess.com/member/frostbad/" target="_blank" rel="noopener noreferrer" className="group relative h-fit duration-150 md:hover:scale-105">
          <img className="w-80 rounded-md shadow-lg filter duration-200 group-hover:filter-none md:grayscale lg:w-96" src="/chess.png" alt="chess" />
          <span className="absolute bottom-4 left-4 mr-2 rounded-md bg-black bg-opacity-70 px-4 py-2 text-white shadow-lg">
            <p className="text-sm md:text-base">See how my recent chess game have gone (not good)</p>
          </span>
        </a>
        <a href="https://www.google.com/search?q=boston+celtics" target="_blank" rel="noopener noreferrer" className="group relative h-fit duration-150 md:hover:scale-105">
          <img className="w-80 rounded-md shadow-lg filter duration-200 group-hover:filter-none md:grayscale lg:w-96" src="/public/celtics.jpg" alt="basketball" />
          <span className="absolute bottom-4 left-4 mr-2 rounded-md bg-black bg-opacity-70 px-4 py-2 text-white shadow-lg">
            <p className="text-sm md:text-base">Basketball! The Celtics better win this year too</p>
          </span>
        </a>
        <div className="group relative h-fit duration-150 md:hover:scale-105">
          <img className="w-56 rounded-md shadow-lg filter duration-200 group-hover:filter-none md:grayscale lg:w-64" src="/my-world/lake.webp" alt="Lake" />
          <span className="absolute bottom-4 left-4 mr-2 rounded-md bg-black bg-opacity-70 px-4 py-2 text-white shadow-lg">
            <p className="text-sm md:text-base">If I&apos;m not responding, I might be at the lake watching the sunset.</p>
          </span>
        </div>
        <div className="group relative h-fit duration-150 md:hover:scale-105">
          <img className="w-56 rounded-md shadow-lg filter duration-200 group-hover:filter-none md:grayscale lg:w-64" src="/my-world/lake.webp" alt="Lake" />
          <span className="absolute bottom-4 left-4 mr-2 rounded-md bg-black bg-opacity-70 px-4 py-2 text-white shadow-lg">
            <p className="text-sm md:text-base">If I&apos;m not responding, I might be at the lake watching the sunset.</p>
          </span>
        </div>
      </div>
    </section>
  );
}
