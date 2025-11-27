'use client'
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';


export function FadeAnimation({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}