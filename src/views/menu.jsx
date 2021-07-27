import { Navigation } from "@augmentedjs/elements-navigation";

class Menu extends Navigation {
  constructor(props = {}) {
    super(props);
  };

  tools() {
    console.debug("menu click - tools");
    window.location = "#tools";
  };

  solutions() {
    console.debug("menu click - solutions");
    window.location = "#solutions";
  };
};

export default Menu
