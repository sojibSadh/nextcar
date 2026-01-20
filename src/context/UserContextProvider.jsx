"use client"

import React, { createContext, useState } from 'react'

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser
  }

  return (
    <UserContext value={value}>
      {children}
    </UserContext>
  )
}

export default UserContextProvider
