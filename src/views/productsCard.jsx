import { Elements } from "@augmentedjs/elements";
import { Card, Heading, ButtonBar, Button } from "@augmentedjs/elements-components";

class ProductsCard extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <Card name="productsCard" id="productsCard" className="productsCard">
        <Heading level="1">Semantic Data Pipelines</Heading>
          <p>Accessing, verifying, encrypting data in a personalized context of use, 
          and making that data available to others on an individually consented basis is what semantic datapipelines are 
          designed for.</p>   
          <p>Our semantic datapipeline framework supports the creation of purpose built data sets that are ‘sealed’ as 
            verifiable credentials and made available to  consented parties for any purpose.</p>
        <ButtonBar>
          <Button name="products" id="products" icon="work_outline" title="More about products" kind="secondary" onClick={this.tools}>&nbsp;More About Semantic Data Pipelines</Button>
        </ButtonBar>
      </Card>
    );
  };

  tools = () => {
    console.debug("menu click - tools");
    window.location = "#tools";
  };
};

export default ProductsCard;
