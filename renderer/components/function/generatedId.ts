interface Props {
  currentUid: string;
  peerUid: string;
}

const generatedId = ({ currentUid, peerUid }: Props) => {
  return currentUid > peerUid ? currentUid + peerUid : peerUid + currentUid;
};

export default generatedId;
