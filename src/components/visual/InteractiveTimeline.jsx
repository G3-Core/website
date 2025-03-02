import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTimeline = ({ 
  events = [], 
  lineColor = '#3b82f6',
  dotActiveColor = '#8b5cf6',
  dotInactiveColor = '#cbd5e1'
}) => {
  const [activeEvent, setActiveEvent] = useState(0);
  
  // Funções para navegação
  const goToNext = () => {
    if (activeEvent < events.length - 1) {
      setActiveEvent(activeEvent + 1);
    }
  };
  
  const goToPrevious = () => {
    if (activeEvent > 0) {
      setActiveEvent(activeEvent - 1);
    }
  };
  
  return (
    <div className="w-full h-full flex flex-col p-4">
      {/* Header da Timeline */}
      <div className="flex justify-between mb-8 overflow-x-auto pb-2 scrollbar-thin">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-lg mx-1 min-w-[100px] text-center transition-colors ${
              activeEvent === index
                ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary dark:text-primary-light font-semibold'
                : 'hover:bg-gray-100 dark:hover:bg-dark-light text-gray-600 dark:text-dark-text-secondary'
            }`}
            onClick={() => setActiveEvent(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="block text-lg font-bold">{event.year}</span>
            <span className="text-sm">{event.title}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Timeline Visual */}
      <div className="relative flex-grow">
        {/* Linha da Timeline */}
        <div 
          className="absolute h-1 top-4 left-0 right-0" 
          style={{ backgroundColor: lineColor, opacity: 0.3 }}
        />
        
        {/* Pontos da Timeline */}
        <div className="flex justify-between relative mb-12">
          {events.map((_, index) => {
            const isActive = index <= activeEvent;
            const progress = index === activeEvent ? 1 : isActive ? 1 : 0;
            
            return (
              <motion.div
                key={index}
                className="relative z-10"
                animate={{
                  scale: isActive ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white dark:border-dark-light shadow-md cursor-pointer"
                  style={{ 
                    backgroundColor: isActive ? dotActiveColor : dotInactiveColor,
                  }}
                  onClick={() => setActiveEvent(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: progress }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      backgroundColor: dotActiveColor,
                      opacity: 0.4
                    }}
                  />
                  {isActive && (
                    <motion.div 
                      className="w-3 h-3 bg-white dark:bg-dark rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Conteúdo do Evento */}
        <div className="relative flex-grow bg-white/50 dark:bg-dark-light/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-dark/50 h-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {events[activeEvent].title} <span className="text-lg">({events[activeEvent].year})</span>
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-lg flex-grow">
                {events[activeEvent].description}
              </p>
              
              {/* Navegação */}
              <div className="flex justify-between mt-6 pt-4 border-t border-gray-200 dark:border-dark">
                <motion.button
                  onClick={goToPrevious}
                  className={`px-4 py-2 rounded-lg ${
                    activeEvent === 0
                      ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : 'text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary/20'
                  }`}
                  disabled={activeEvent === 0}
                  whileHover={activeEvent !== 0 ? { scale: 1.05 } : {}}
                  whileTap={activeEvent !== 0 ? { scale: 0.95 } : {}}
                >
                  ← Anterior
                </motion.button>
                <div className="text-sm text-gray-500 dark:text-gray-400 self-center">
                  {activeEvent + 1} de {events.length}
                </div>
                <motion.button
                  onClick={goToNext}
                  className={`px-4 py-2 rounded-lg ${
                    activeEvent === events.length - 1
                      ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : 'text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary/20'
                  }`}
                  disabled={activeEvent === events.length - 1}
                  whileHover={activeEvent !== events.length - 1 ? { scale: 1.05 } : {}}
                  whileTap={activeEvent !== events.length - 1 ? { scale: 0.95 } : {}}
                >
                  Próximo →
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline; 