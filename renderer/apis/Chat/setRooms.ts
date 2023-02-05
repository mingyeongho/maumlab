import { setDocument, updateDocument } from "../../firebase/setDocument";

interface SetRoomsProps {
  sender: string; // 보내는 사람 uid
  receiver: string; // 받는 사람 uid
  message: string; // 채팅 목록에서 보이게 될 메세지
  timestamp: number; // 채팅 목록에서 보이게 될 timestamp
}

const setRooms = async ({
  sender,
  receiver,
  message,
  timestamp,
}: SetRoomsProps) => {
  // sender - receiver
  try {
    await updateDocument({
      collectionName: "Rooms",
      documentName: sender,
      updateFields: {
        [receiver]: {
          lastTimeStamp: timestamp,
          lastMessage: message,
          users: [sender, receiver],
        },
      },
    });
  } catch (e) {
    await setDocument({
      collectionName: "Rooms",
      documentName: sender,
      fields: {
        [receiver]: {
          lastTimeStamp: timestamp,
          lastMessage: message,
          users: [sender, receiver],
        },
      },
    });
  }

  // receiver -> sender
  try {
    await updateDocument({
      collectionName: "Rooms",
      documentName: receiver,
      updateFields: {
        [sender]: {
          lastTimeStamp: timestamp,
          lastMessage: message,
          users: [sender, receiver],
        },
      },
    });
  } catch (e) {
    await setDocument({
      collectionName: "Rooms",
      documentName: receiver,
      fields: {
        [sender]: {
          lastTimeStamp: timestamp,
          lastMessage: message,
          users: [sender, receiver],
        },
      },
    });
  }
};

export default setRooms;
