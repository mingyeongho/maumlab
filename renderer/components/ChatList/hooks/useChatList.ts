import { useEffect, useState } from "react";

const useChatList = () => {
  const [isLoading, setIsLoading] = useState(false);
  // roomId를 가져온다.

  useEffect(() => {
    setIsLoading(true);
    const uid = sessionStorage.getItem("user");
    setIsLoading(false);
  }, []);

  return { isLoading };
};

export default useChatList;
