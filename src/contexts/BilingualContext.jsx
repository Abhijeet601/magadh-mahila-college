import React, { createContext, useContext, useState } from 'react';

const BilingualContext = createContext();

export const useBilingual = () => {
  const context = useContext(BilingualContext);
  if (!context) {
    throw new Error('useBilingual must be used within a BilingualProvider');
  }
  return context;
};

export const BilingualProvider = ({ children }) => {
  const [isBilingual, setIsBilingual] = useState(false);

  const toggleBilingual = () => {
    setIsBilingual(!isBilingual);
  };

  // allow setting explicitly (used by Navbar language controls)
  const setBilingual = (value) => {
    setIsBilingual(value);
  };

  return (
    <BilingualContext.Provider value={{ isBilingual, toggleBilingual, setBilingual }}>
      {children}
    </BilingualContext.Provider>
  );
};
