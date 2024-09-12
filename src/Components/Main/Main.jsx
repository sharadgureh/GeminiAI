/* eslint-disable react/no-danger-with-children */
/* eslint-disable no-unused-vars */
import "./Main.css";
import { assets} from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Markdown from 'react-markdown'
import Spinner from '../Spinner/Spinner'
function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  const {compass_icon,bulb_icon,message_icon,code_icon}=assets
    let data=['suggest Beautifull Place to see on an Upcoming road trip',
    'Briefly summarize this concept:urban planning',
    'BrainStrom team bonding acitivites for our work retreat ',
    'imporve the readibility of the following code '
  ]
  let data_img=[compass_icon,bulb_icon,message_icon,code_icon]
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ?
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How, Can i Help you today</p>
            </div>
            <div className="cards">
            {
              data.map((item,i)=>(
               <div className="card" key={i}>
                    <p>{item}</p>
                    <img src={data_img[i]} alt="" />
                  </div>
               ))
            }
           
            </div>
          </>
        : 
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
                loading? <Spinner/> :
              <p>
              <Markdown>{resultData}</Markdown>
              </p>
              }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              placeholder="Enter your prompt here "
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                onClick={() => onSent(input)}
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info,including about people, so double
            check its responses.Your Privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
