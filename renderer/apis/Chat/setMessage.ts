import { setDocument } from "../../firebase/setDocument";
import mixedUid from "../../function/mixedUid";

interface SetMessageProps {
  senderName: string;
  sender: string; // 보내는 사람 uid
  receiver: string; // 받는 사람 uid
  message: string; // 채팅 목록에서 보이게 될 메세지
  timestamp: number; // 채팅 목록에서 보이게 될 timestamp
}

const setMessage = async ({
  senderName,
  sender,
  receiver,
  timestamp,
  message,
}: SetMessageProps) => {
  await setDocument({
    collectionName: `Messages_${mixedUid({ sender, receiver })}`,
    documentName: timestamp.toString(),
    fields: {
      message,
      timestamp,
      user: {
        sender,
        senderName,
      },
    },
  });
};

export default setMessage;

// // Messages에 추가하는 로직
// try {
//     await addDocument({
//       collectionName: `Message_${currentUser?.uid}${uid}`,
//       fields: {
//         timeStamp: Date.now(),
//         message: input,
//         user: {
//           uid: currentUser?.uid,
//           displayName: currentUser?.displayName,
//         },
//       },
//     });
//   } catch (e) {
//     console.error(e);
//   }
