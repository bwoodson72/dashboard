'use client';
import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import {RootState, useSelector} from "react-redux";
import { is } from "zod/v4/locales";

type EnterRightProps = Omit<HTMLMotionProps<"div">, "children"> & {
    duration?: number;
    children?: React.ReactNode;
};

/**
 * Motion wrapper that enters from the right and exits to the left.
 * Usage: wrap content with <EnterRight>...</EnterRight>
 */
export const EnterRight: React.FC<EnterRightProps> = ({
    children,
    duration = 0.4,
    className,
    ...rest
}) => {
    const variants = {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration } },
        exit: { x: "-100%", opacity: 0, transition: { duration } },
    };

    const isAnimationEnabled = useSelector((state: RootState) => state.animationSettings.enabled);

    return (
        isAnimationEnabled ?
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
        :
        <div >
            {children}
        </div>
    );
};

