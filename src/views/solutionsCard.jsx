import { Elements } from "@augmentedjs/elements";
import { Card, Heading, ButtonBar, Button } from "@augmentedjs/elements-components";

class SolutionsCard extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <Card name="solutionsCard" id="solutionsCard" className="solutionsCard">
        <Heading level="1">FHIRPak Tools</Heading>
          <p>The FHIRPak tool suite delivers purpose built access for individuals or authorized business entities to FHIR 
            formatted wellness information. Our tools support consented access to PHI and provide for the export, persistence 
            and secure encryption of PHI data.</p> 

        <ButtonBar>
          <Button name="solutions" id="solutions" icon="build" title="More about solutions" kind="secondary" onClick={this.solutions}>&nbsp;More About FHIRPak Tools</Button>
        </ButtonBar>
      </Card>
    );
  };

  solutions = () => {
    console.debug("menu click - solutions");
    window.location = "#solutions";
  };
};

export default SolutionsCard;
