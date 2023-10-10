import { createContext, useContext} from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const user = {
    name: "Wes",
    ranking: 800,
    theme: {
      primaryColor: "white",
      secondaryColor: "black"
    }
  };

  return (
    <AppContext.Provider value={{user}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
