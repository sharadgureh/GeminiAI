/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompt(pre=>[...pre,input])
        const response=await runChat(input);
        setResultData(response)
        setLoading(false)
        setInput("")

  };
  const newChat=()=>{
setLoading(false)
setShowResult(false)
  }

  const ContextValue = {
    input, setInput,
    recentPrompt, setRecentPrompt,
    prevPrompt, setPrevPrompt,
    showResult, setShowResult,
    loading, setLoading,
    resultData, setResultData,
    onSent,newChat
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
