import { Elements } from "@augmentedjs/elements";

class Footer extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <footer id="footer" name="footer" className="footer">
        <div className="links">
          <nav>
            <a href="#tools">Tools</a>
            <a href="#solutions">Solutions</a>
          </nav>
        </div>
        <div className="copy">
          <p>© Copyright { YEAR } SemanticClarity. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
};

export default Footer;
