import { Elements } from "@augmentedjs/elements";
import Hero from "./hero.jsx";
import SolutionsCard from "./solutionsCard.jsx";
import ProductsCard from "./productsCard.jsx";
import Partners from "./partners.jsx";
import About from "./about.jsx";
import News from "./news.jsx";
import Footer from "./footer.jsx";
import Clouds from "../images/dreamstime.jpg";

class Home extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id={this.props.id} name={this.props.name} className="home">
        <div className="hero-text">
          <Hero />
          <img src={Clouds} alt="Clouds"/>
        </div>
        <SolutionsCard />
        <ProductsCard />
        <Partners />
        <News />
        <About />
        <Footer />
      </div>
    );
  };
};

export default Home;
