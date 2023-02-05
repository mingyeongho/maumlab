interface Props {
  sender: string;
  receiver: string;
}

const mixedUid = ({ sender, receiver }: Props) => {
  return sender > receiver ? sender + receiver : receiver + sender;
};

export default mixedUid;
