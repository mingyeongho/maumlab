import dayjs from "dayjs";

const convertTimestamp = (timestamp: number) => {
  return dayjs(timestamp).format("HH:mm");
};

export default convertTimestamp;
