import { motion } from "framer-motion";

const svgPath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const svgFill = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

const svgIdle = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const Logo = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={900}
      height={900}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <style>
          {".strokefill{stroke:white;}"}
          {".fill{fill:white;}"}
        </style>
      </defs>
      {/* fill */}
      <g id="Layer_1" data-name="Layer 1">
        {/* C */}
        <motion.path
          className="fill"
          d="M62.5 20 H34 L10 68.5 L67 68.5 L71 60 L25 60 L39.5 29 L59 29Z"
          animate="visible"
          initial="hidden"
          variants={svgFill}
          strokeWidth={0.5}
          stroke="black"
        />
        {/* D */}
        <motion.path
          className="fill"
          d="M75 20 H66.6 L61 33 L41.5 33 L30.5 57 L59 57Z"
          animate="visible"
          initial="hidden"
          variants={svgFill}
          strokeWidth={0.5}
          stroke="black"
        />
        {/* ° */}
        <motion.path
          fill="##000000"
          d="M57.9 40 H47.9 L43.5 49 L53.5 49Z"
          animate="visible"
          initial="hidden"
          variants={svgIdle}
          strokeWidth={0.5}
          stroke="black"
        />
        {/* . */}
        <motion.path
          className="fill"
          d="M90 20 H80 L75.5 29 L85.5 29Z"
          animate="visible"
          initial="hidden"
          variants={svgFill}
          strokeWidth={0.5}
          stroke="black"
        />
        {/* I */}
        <motion.path
          className="fill"
          d="M83.25 32.75 H73.5 L62.25 57 L72.25 57Z"
          animate="visible"
          initial="hidden"
          variants={svgFill}
          strokeWidth={0.5}
          stroke="black"
        />
        {/* stroke */}
        <g id="Layer_2" data-name="Layer 2">
          {/* C */}
          <motion.path
            className="strokefill"
            fill="none"
            d="M62.5 20 H34 L10 68.5 L67 68.5 L71 60 L25 60 L39.5 29 L59 29Z"
            animate="visible"
            initial="hidden"
            variants={svgPath}
            strokeWidth={0.5}
          />

          {/* D */}
          <motion.path
            className="strokefill"
            fill="none"
            d="M75 20 H66.6 L61 33 L41.5 33 L30.5 57 L59 57Z"
            animate="visible"
            initial="hidden"
            variants={svgPath}
            strokeWidth={0.5}
          />
          {/* ° */}
          <motion.path
            className="strokefill"
            fill="none"
            d="M57.9 40 H47.9 L43.5 49 L53.5 49Z"
            animate="visible"
            initial="hidden"
            variants={svgPath}
            strokeWidth={0.5}
          />
          {/* . */}
          <motion.path
            className="strokefill"
            fill="none"
            d="M90 20 H80 L75.5 29 L85.5 29Z"
            animate="visible"
            initial="hidden"
            variants={svgPath}
            strokeWidth={0.5}
          />
          {/* I */}
          <motion.path
            className="strokefill"
            fill="none"
            d="M83.25 32.75 H73.5 L62.25 57 L72.25 57Z"
            animate="visible"
            initial="hidden"
            variants={svgPath}
            strokeWidth={0.5}
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default Logo;
