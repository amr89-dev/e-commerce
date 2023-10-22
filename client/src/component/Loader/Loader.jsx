import "./style.css";
//eslint-disable-next-line
const Loader = ({ mt, ml }) => {
  return (
    <div className="loader" style={{ marginTop: `${mt}`, marginLeft: `${ml}` }}>
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
