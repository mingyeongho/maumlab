const Loader = () => {
  return (
    <>
      <span className="loader"></span>
      <style jsx>{`
        .loader {
          width: 24px;
          height: 24px;
          border: 3px solid #fff;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
