import * as S from "./GroupChatForm.style";
import useGroupChatForm from "./hooks/useGroupChatForm";

const GroupChatForm = () => {
  const { inputProps, onSubmit } = useGroupChatForm();

  return (
    <S.GroupChatForm onSubmit={onSubmit}>
      <S.Input {...inputProps} />
      <S.Button children="전송" />
    </S.GroupChatForm>
  );
};

export default GroupChatForm;
