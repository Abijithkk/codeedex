import { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [outerCirclePos, setOuterCirclePos] = useState({ x: 0, y: 0 });
  const [innerCirclePos, setInnerCirclePos] = useState({ x: 0, y: 0 });

  // Update mouse position state on mouse move
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Update outer circle position based on mouse position
    setOuterCirclePos(mousePosition);
  }, [mousePosition]);

  useEffect(() => {
    // Update inner circle position to follow outer circle
    const updateInnerCirclePos = () => {
      const distanceX = outerCirclePos.x - innerCirclePos.x;
      const distanceY = outerCirclePos.y - innerCirclePos.y;

      // Adjust speed for responsiveness
      const speed = 0.2;

      setInnerCirclePos({
        x: innerCirclePos.x + distanceX * speed,
        y: innerCirclePos.y + distanceY * speed,
      });

      requestAnimationFrame(updateInnerCirclePos);
    };

    requestAnimationFrame(updateInnerCirclePos);

    return () => {
      cancelAnimationFrame(updateInnerCirclePos);
    };
  }, [outerCirclePos, innerCirclePos]);

  // Reset inner circle to center of outer circle after delay when mouse stops moving
  useEffect(() => {
    let timeout;

    const resetInnerCircle = () => {
      setInnerCirclePos(outerCirclePos);
    };

    const handleMouseMove = () => {
      clearTimeout(timeout);
      resetInnerCircle();

      timeout = setTimeout(() => {
        resetInnerCircle();
      }, 100); // Adjust delay as needed
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [outerCirclePos]);

  return (
    <div className="cursor-container">
      <motion.div
        animate={{
          x: outerCirclePos.x - 15,
          y: outerCirclePos.y - 15,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 }}
      ></motion.div>
      <motion.div
        animate={{
          x: innerCirclePos.x - 5,
          y: innerCirclePos.y - 5,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
