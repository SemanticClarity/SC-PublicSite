import { Elements } from "@augmentedjs/elements";
const year = new Date();

class Footer extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <footer id="footer" name="footer" className="footer">
        <div className="links">
          <nav>
            <a href="#">Tools</a>
            <a href="#">Solutions</a>
          </nav>
        </div>
        <div className="copy">
          <p>© Copyright { year.getFullYear() } SemanticClarity. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
};

export default Footer;
