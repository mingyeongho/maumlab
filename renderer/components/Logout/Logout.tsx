import useLogout from "./hooks/useLogout";

const Logout = () => {
  const { checked, onChange, logoutButtonProps } = useLogout();

  return (
    <>
      <div className="logout_wrapper">
        <div className="checkbox">
          <input
            type="checkbox"
            name="isLogout"
            id="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor="checkbox" id="cb"></label>
          <label htmlFor="checkbox">정말 로그아웃 하시겠습니까?</label>
        </div>
        <button {...logoutButtonProps} />
      </div>
      <style jsx>{`
        .logout_wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        input {
          display: none;
        }

        label {
          cursor: pointer;
        }

        #cb {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid #bcbcbc;
        }

        input[id="checkbox"]:checked + #cb {
          background-color: #f57f17;
        }

        button {
          width: 100%;
          font-size: 1.125rem;
          color: white;
          font-weight: bolder;
          background-color: #f57f17;
          border: none;
          outline: none;
          border-radius: 6px;
          padding: 4px 0;
          cursor: pointer;
          transition: 0.4s background-color;
        }

        button:hover {
          background-color: #ff6f00;
          cursor: pointer;
        }

        button:disabled {
          background-color: #bdbdbd;
          cursor: no-drop;
        }
      `}</style>
    </>
  );
};

export default Logout;
