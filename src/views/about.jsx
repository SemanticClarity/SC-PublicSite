import { Elements } from "@augmentedjs/elements";
import { Heading, ButtonBar, Button } from "@augmentedjs/elements-components";

class About extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  openMail = () => {
    window.location.href = "mailto:jwalker@semanticclarity.com";
  }  

  render() {
    return (
      <div id="about" name="about" className="section">
        <Heading level="1">About SemanticClarity</Heading>
        <p>If you're looking to put semantic clarity into your message, and gain
          meaning from your metrics... you’ve come to the right place.</p>
        <p>Our company is built on the proven foundation of enabling the digital
          presence and solid analysis and transparent reporting.  Leverage our
          years of experience and successful engagements to sort through the
          "noise" of technologies, and deliver smart, scalable solutions for
          your business. Contact us and meet the team.</p>
        <ButtonBar className="buttonBar">
          <Button name="contact" id="contact2" icon="chat" title="Contact Us" kind="secondary" onClick={this.openMail}>&nbsp;Contact Us</Button>
        </ButtonBar>
      </div>
    );
  };
};

export default About;
