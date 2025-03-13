import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export default function ModalEdit({ isActive, handleClick, children }: { isActive: boolean; handleClick: () => void; children: React.ReactNode }) {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                    }}
                    className={cn(
                        "fixed top-1/4 left-[35%] z-40 bg-neutral-300 shadow-2xl w-[500px] h-[400px] rounded-lg"
                    )}
                >
                    <div className="relative w-full h-full flex flex-col p-5 gap-3">
                        <span
                            onClick={handleClick}
                            className="cursor-pointer absolute -right-2 -top-2 w-8 h-8 bg-neutral-600 rounded-full flex justify-center items-center text-xl text-white"
                        >
                            x
                        </span>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
