import React from 'react'

// TODO: implement or import a proper isAuthenticated function
const isAuthenticated = () => false

export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}

//this component checks if the user is logged in to the website, and allows us to set tags that hide or reveal information depending on if the user is authenticated or not.
