import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import {useContext, createContext, Context } from 'react';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {}
});

function MyApp({ Component, pageProps }) {
  return (
    // <authUserContext.Provider value={}>
      <Component {...pageProps} />
    // </authUserContext.Provider>
  )
}

export const useAuth = () => useContext(authUserContext);

export default MyApp;
