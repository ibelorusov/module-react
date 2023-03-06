import Header from "../components/app-header";
import Cards from "../components/cards";

function Showcase(props) {
  returm (
    <>
    <Header />
    <Cards  data={props.data} />
    </>
  );
}
export default Showcase;