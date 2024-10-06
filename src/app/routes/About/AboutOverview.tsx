import { useState } from "react";
import { motion } from "framer-motion";

import Card1 from "../../../assets/Placeholder/pinkguy.jpg";
import Card2 from "../../../assets/Placeholder/Wapaniniz.jpg";

export const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isAnimated4, setIsAnimated4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isAnimated5, setIsAnimated5] = useState(false);

  function handleFlip() {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  }
  function handleFlip2() {
    if (!isAnimated2) {
      setIsFlipped2(!isFlipped2);
      setIsAnimated2(true);
    }
  }
  function handleFlip3() {
    if (!isAnimated3) {
      setIsFlipped3(!isFlipped3);
      setIsAnimated3(true);
    }
  }
  function handleFlip4() {
    if (!isAnimated4) {
      setIsFlipped4(!isFlipped4);
      setIsAnimated4(true);
    }
  }
  function handleFlip5() {
    if (!isAnimated5) {
      setIsFlipped5(!isFlipped5);
      setIsAnimated5(true);
    }
  }
  return (
    <div className="flex items-center justify-center bg-black h-[800px] cursor-pointer">
      <div
        className="flip-card w-[360px] h-[600px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card w-[360px] h-[600px] rounded-md"
        onClick={handleFlip2}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped2 ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated2(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card w-[360px] h-[600px] rounded-md"
        onClick={handleFlip3}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped3 ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated3(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card w-[360px] h-[600px] rounded-md"
        onClick={handleFlip4}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped4 ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated4(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card w-[360px] h-[600px] rounded-md"
        onClick={handleFlip5}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped5 ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated5(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <h1 className="text-2xl font-bold/">Bzi</h1>
            <p>Chi7aja hrpana hh</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
