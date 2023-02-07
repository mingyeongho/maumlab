import * as S from "./ChatForm.style";
import useChatForm from "./hooks/useChatForm";

const ChatForm = () => {
  const { inputProps, onSubmit } = useChatForm();

  return (
    <S.ChatForm onSubmit={onSubmit}>
      <S.Input {...inputProps} />
      <S.Button children="전송" />
    </S.ChatForm>
  );
};

export default ChatForm;
