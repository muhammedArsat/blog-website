import React, { createContext, useState } from 'react'

const SidebarContext  = createContext();
const SidebarProvider = ({children}) => {
    const [isSidebarVisible, setIsSidebarVisible] =useState(false);

    const handleSidebarVisible = ()=>{
        setIsSidebarVisible(!isSidebarVisible);
    }
  return (
    <SidebarContext.Provider value={{isSidebarVisible, setIsSidebarVisible,handleSidebarVisible}}>
      {children}
    </SidebarContext.Provider>
  )
}


export{SidebarContext}
export default SidebarProvider
