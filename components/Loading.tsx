"use client";

import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed min-h-screen w-full bg-white left-0 top-0 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-1">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-black"
        >
          <Loader2 className=" animate-spin w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
