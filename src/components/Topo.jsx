import { useHistory } from "react-router-dom";
import { Checkbox } from "./Checkbox.styles";
import { Button } from "./Button.styles";

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
      <img
        className="logo"
        src={`${window.location.origin}/assets/ronaldogg.png`}
        onClick={() => {
          handleClickk();
        }}
        alt="ronaldo.gg"
      ></img>
      {/* <button
        onClick={() => {
          handleClick();
        }}
      >
        Top ranks challenger
      </button> */}
      {/* <div>
        <Checkbox type="checkbox"></Checkbox>
      </div> */}
    </div>
  );
};

export default Topo;
