import { motion } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // começa transparente e levemente abaixo
      animate={{ opacity: 1, y: 0 }}    // aparece e sobe suavemente
      exit={{ opacity: 0, y: -20 }}     // desaparece para cima
      transition={{ duration: 0.4 }}    // tempo da animação
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
