import { createContext, useContext, useState } from 'react';

const ClassicViewContext = createContext();

export const useClassicViewContext = () => {
  return useContext(ClassicViewContext);
};

const debugOptions = [
  {
    name: "Alpha",
    ranking: 600,
    theme: {
      primaryColor: "#f00",
      secondaryColor: "black"
    }
  },
  {
    name: "Gamma",
    ranking: 800,
    theme: {
      primaryColor: "#0f0",
      secondaryColor: "black"
    }
  },
  {
    name: "Beta",
    ranking: 1000,
    theme: {
      primaryColor: "#00f",
      secondaryColor: "black"
    }
  },
  {
    name: "Lambda",
    ranking: 1200,
    theme: {
      primaryColor: "#ff0",
      secondaryColor: "black"
    }
  }
];

export const ClassicViewProvider = ({ children }) => {
  const [opponent, setOpponent] = useState({
    name: "Alpha",
    ranking: 800,
    theme: {
      primaryColor: "red",
      secondaryColor: "black"
    }
  });

  const setOpponentByName = (name) => {
    const nameRegistry = {}
    debugOptions.forEach(item => {
      nameRegistry[item.name] = item;
    })
    if (Object.keys(nameRegistry).includes(name)) {
      setOpponent(nameRegistry[name]);
    }
  }

  return (
    <ClassicViewContext.Provider value={{ opponent, setOpponentByName }}>
      {children}
    </ClassicViewContext.Provider>
  );
};
