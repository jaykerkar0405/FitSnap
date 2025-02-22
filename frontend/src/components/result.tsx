"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Result({
  result,
}: {
  result: { image?: string; size?: string };
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Your Fit Result</h2>
      {result.image && (
        <div className="mb-6">
          <Image
            width={300}
            unoptimized
            height={300}
            alt="Fit result"
            className="mx-auto rounded-lg"
            src={result.image || "/placeholder.svg"}
          />
        </div>
      )}
      {result.size && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl font-bold text-primary"
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {result.size}
        </motion.div>
      )}
      <p className="mt-4 text-lg">
        This is your recommended size based on your measurements and photo.
      </p>
    </div>
  );
}
