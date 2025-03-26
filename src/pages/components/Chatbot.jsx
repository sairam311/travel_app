import { useEffect } from "react";

const Chatbot = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src =import.meta.env.VITE_CHATBASE_SRC;
    script.id = import.meta.env.VITE_CHATBASE_ID;
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);

    // Optionally, add any logic to handle script loading success or failure
    script.onload = () => {
    //  console.log("Chatbot script loaded successfully.");
    };
    script.onerror = (error) => {
      console.error("Error loading Chatbase script:", error);
    };

    // Cleanup the script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
