import { motion } from "framer-motion";

export default function Name() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mb-16 flex w-fit flex-col items-center">
        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <h1 className="font-space-mono text-7xl font-extrabold md:text-8xl lg:text-9xl">Pranjal</h1>
        </motion.div>
        <motion.div
          className="mt-4 text-left"
          initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.p className="pl-3 text-lg font-semibold md:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 1 }}>
            welcome! scroll to see more about me!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
