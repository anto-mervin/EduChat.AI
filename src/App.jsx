import { useState } from "react";
import ChatBody from "./components/ChatBody";
import Chatinput from "./components/Chatinput";
import YoutubeEmbed from "./components/youtubeembed";
import axios from "axios";
function App() {
  const [chat, setChat] = useState([]);

  const sendMessage = async (message) => {
    const role =
      "Act as a tutor and provide me answer related the topic... question:";
    const content = message.message;
    const data = role.concat(" ", content);
    console.log(data);
    await Promise.resolve(setChat((prev) => [...prev, message]));

    // const options = {
    //   method: "POST",
    //   url: "https://open-ai21.p.rapidapi.com/conversationllama",
    //   headers: {
    //     "content-type": "application/json",
    //     "X-RapidAPI-Key": "1dc30f65abmsh357c08a916d8610p1900dbjsn9f5b017be462",
    //     "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    //   },
    //   data: {
    //     messages: [
    //       {
    //         role: "user",
    //         content: `${data}`,
    //       },
    //     ],
    //   },
    // };

    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/chatmpt",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "2655023316msh89d84fa3e655124p162812jsn78fdc70620fe",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      data: { message: `${data}` },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.MPT);
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: response.data.MPT },
      ]);
    } catch (error) {
      console.error(error);
    }

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data.BOT);
    //   setChat((prev) => [
    //     ...prev,
    //     { sender: "ai", message: response.data.BOT },
    //   ]);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="bg-gradient-to-br from-teal-300 to-sky-900 h-screen py-6 relative sm:px-16 px-12 text-dark overflow-hidden flex flex-col justify-between  align-middle">
      {/* gradients */}

      {/* header */}
      <div className="uppercase font-bold  text-2xl text-center mb-3">
        Learnify Chat
      </div>
      <div className="h-[100%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <YoutubeEmbed />
      </div>

      {/* body */}
      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <Chatinput sendMessage={sendMessage} />
        <div className=" text-center text-white">
          <a href="https://forms.gle/GKZZnEvetHAAbUtM6">
            Click here to give feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
