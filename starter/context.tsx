import React, {
  useContext,
  useState,
  useReducer,
  DispatchWithoutAction,
} from "react";
import reducer, { initialState } from "./Helper/reducer";
const AppContext = React.createContext(
  {} as {
    dispatch: DispatchWithoutAction;
    state: {
      networkAccount: any;
    };
    message: {
      isOpen: boolean;
      message: string;
    };
    isConnected: boolean;
    setAccount: React.Dispatch<any>;
    account: any;
    ctc: any;
    setContract: React.Dispatch<any>;
    handlePopup: (val: string) => void;
    setConnected: React.Dispatch<React.SetStateAction<boolean>>;
    setMessage: React.Dispatch<
      React.SetStateAction<{
        isOpen: boolean;
        message: string;
      }>
    >;
  }
);
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState({ isOpen: false, message: "null" });
  const [isConnected, setConnected] = useState(false);
      const [account, setAccount] = useState(null);
      const [ctc, setContract] = useState(null);
  const handlePopup = (val: string) => {
    setMessage({ isOpen: true, message: val });
    setTimeout(() => {
      setMessage({ isOpen: false, message: val });
    }, 4000);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        message,
        setMessage,
        setConnected,
        isConnected,
        account,
        setAccount,
        ctc,
        setContract,
        handlePopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
