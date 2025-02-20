import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="flex w-full justify-center bg-transparent py-20">
      <div className="flex flex-col items-center gap-10">
      <h3 className="mb-12 text-center font-mono text-6xl font-bold text-black drop-shadow-lg transition-transform duration-300 hover:scale-110">Contact Me</h3>
      <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              className="group relative flex items-center justify-center rounded-lg border border-black p-2.5 transition-all duration-300 hover:border-2 hover:bg-white hover:shadow-lg"
              href="https://github.com/llpranjal"
            >
              <FaGithub className="h-10 w-10 fill-black transition-colors duration-300 group-hover:fill-gray-900 md:h-12 md:w-12" />
            </a>
            <a
              className="group relative flex items-center justify-center rounded-lg border border-black p-2.5 transition-all duration-300 hover:border-2 hover:bg-white hover:shadow-lg"
              href="https://linkedin.com/in/pranjalkattel/"
            >
              <FaLinkedin className="h-10 w-10 fill-black transition-colors duration-300 group-hover:fill-gray-900 md:h-12 md:w-12" />
            </a>
            <a
              className="group relative flex items-center justify-center rounded-lg border border-black p-2.5 transition-all duration-300 hover:border-2 hover:bg-white hover:shadow-lg"
              href="https://www.instagram.com/pranjal.k05/"
            >
              <FaInstagram className="h-10 w-10 fill-black transition-colors duration-300 group-hover:fill-gray-900 md:h-12 md:w-12" />
            </a>
          </div>

          <p className="rounded-md bg-white px-4 py-2 font-medium text-black shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">kattelpranjal01@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
