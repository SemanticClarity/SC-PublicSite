import { Elements } from "@augmentedjs/elements";
import { Dialog, About, DISPLAY_ABOUT_DIALOG, CHANNEL_DIALOGS, DISPLAY_STANDARD_DIALOG, CLOSE_DIALOG } from "@augmentedjs/elements-dialogs";

const BUTTONS = [ { "name": "ok", "callback": "cancel" }];

class Dialogs extends Elements.Component {
  constructor(props = {}) {
    super(props, { "about": false, "dialog": false });
    this.on(CHANNEL_DIALOGS, (message, data) => {
      console.debug("message", message);
      if (message === DISPLAY_ABOUT_DIALOG) {
        this.setState({"about": true, "dialog": false});
      } else if (message === DISPLAY_STANDARD_DIALOG) {
        this.setState({"about": false, "dialog": true});
      } else if (message == CLOSE_DIALOG) {
        this.setState({"about": false, "dialog": false});
      } else {
        console.warn("Unknown message", message, data);
      }
    });
  };

  render() {
    return (
      <section id={this.props.id} className="dialogs">
        { this.state.about ? <About id="about" name="About" title={APP_NAME} description={DESCRIPTION} version={VERSION} author={AUTHOR} website={WEBSITE} mediator={this.mediator} channel={this.channel} identifier={this.identifier} /> : "" }
        { this.state.dialog ? <Dialog id="dialog-test" name="test" mediator={this.mediator} channel={this.channel} identifier={this.identifier} buttons={BUTTONS}><h1>Hello!</h1></Dialog> : "" }
      </section>
    );
  };
};

export default Dialogs;
