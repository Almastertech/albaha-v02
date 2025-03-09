"use client";
import { motion, AnimatePresence } from "framer-motion";

export const StatsBackgroundVideo = ({
  onVideoEnd,
  showContent,
  videoRef,
  fadeOut,
}) => {
  return (
    <AnimatePresence>
      {!showContent && (
        <div className="relative w-full h-full">
          <motion.video
            ref={videoRef}
            className="relative w-full h-full object-cover"
            src="/assets/home/stats/WhatsApp Video 2025-03-04 at 12.48.45 PM.mp4"
            playsInline
            muted
            onTimeUpdate={onVideoEnd}
            autoPlay
            initial={{ opacity: 1 }}
            animate={{
              opacity: fadeOut ? 0 : 1,
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black/50"></div>
        </div>
      )}
    </AnimatePresence>
  );
};
