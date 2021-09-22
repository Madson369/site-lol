import { useHistory } from "react-router-dom";


const Topo = () => {
  let history = useHistory();

  function handleClick() {
    history.push(`/Ranks`);
  }

  function handleClickk() {
    history.push(`/`);
  }

  return (
    <div className="container_topo">
      <div
        onClick={() => {
          handleClickk();
        }}
      >
        Madson.gg o mais pica krai
      </div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Top ranks challenger
      </button>
    </div>
  );
};

export default Topo;
