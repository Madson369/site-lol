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
      <img
      className='logo'
      src={`${window.location.origin}/assets/ronaldogg.png`}
        onClick={() => {
          handleClickk();
        }}
        alt='ronaldo.gg'
      >
        
      </img>
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
