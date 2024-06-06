import React, { createContext, useState } from 'react'

export const GetResultContext = createContext();

const GetResultProvider = ({ children }) => {



  const [result, setResult,] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);

  return <GetResultContext.Provider value={{ result, setResult, phoneNumber, setPhoneNumber }}>{children}</GetResultContext.Provider>
}

export default GetResultProvider;
