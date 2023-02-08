interface Props {
  uids: string[];
}

const generatedGroupId = ({ uids }: Props) => {
  return uids.sort().join();
};

export default generatedGroupId;
