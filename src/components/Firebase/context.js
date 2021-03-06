import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export const FirebaseUserData = React.createContext(null);

export const FirebaseUserLoggedIn = React.createContext(null);

export default FirebaseContext;