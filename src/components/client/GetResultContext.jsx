import React, { createContext, useState } from 'react'

export const GetResultContext = createContext();

const GetResultProvider = ({children}) => {

  const [result, setResult] = useState();

  return <GetResultContext.Provider value={{result, setResult}}>{children}</GetResultContext.Provider>
}

export default GetResultProvider
