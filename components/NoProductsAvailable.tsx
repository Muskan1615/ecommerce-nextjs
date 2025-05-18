"use client";

import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

interface NoProductsAvailableProps {
  categoryName?: string;
}

export const NoProductsAvailable = ({
  categoryName = "selected",
}: NoProductsAvailableProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 min-h-[300px] space-y-6 text-center bg-gray-100 rounded-lg w-full max-w-xl mx-auto`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800"
      >
        No Products Available
      </motion.h2>
      <motion.p
        className="text-gray-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Sorry, there are no products matching the{" "}
        <span className="font-semibold text-darkColor">{categoryName}</span>{" "}
        criteria at the moment.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex items-center space-x-2 text-black"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>We’re restocking shortly</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-gray-600"
      >
        Please check back later or explore other categories.
      </motion.p>
    </div>
  );
};
