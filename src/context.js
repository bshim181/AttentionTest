import React from 'react';
const AppContext = React.createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
  };