import React, { createContext, useReducer, useContext } from 'react';

const LibraryContext = createContext();

const libraryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const LibraryProvider = ({ children }) => {
  const [library, dispatch] = useReducer(libraryReducer, []);

  return (
    <LibraryContext.Provider value={{ library, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => useContext(LibraryContext);
