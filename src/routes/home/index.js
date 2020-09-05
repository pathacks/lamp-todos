import { h } from "preact";
import style from "./style";

const Home = (props) => {
  const now = props.now;
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <p>The time is {now.toLocaleTimeString()}</p>
    </div>
  );
};

export default Home;
