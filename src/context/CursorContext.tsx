import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CursorContextType, CursorVariant } from '../types';

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariantState] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursorVariant = useCallback((variant: CursorVariant, text: string = '') => {
    setCursorVariantState(variant);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorVariantState('default');
    setCursorText('');
  }, []);

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, setCursorVariant, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
