import React, { Component } from "react";

export default class OAuth extends Component {
  state = {
    user: {},
    disabled: ""
  };

  componentDidMount() {
    const { socket, provider } = this.props;
    socket.on(provider, user => {
      if (!this.popup) {
        // BUG: When logging in via one provider -> logout -> log back in via a different one => error: can't access this.popup.close()
        // Somehow this works..?
        console.error("Cant close popup");
      } else {
        this.popup.close();
      }

      this.setState({ user }, () => {
        this.props.logInUser(user._id, user.email);
      });
    });
  }

  openPopup() {
    const { provider, socket } = this.props;
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `http://localhost:3001/v1/auth/${provider}?socketId=${
      socket.id
    }`;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.setState({ disabled: "" });
      }
    }, 1000);
  }

  startAuth = () => {
    if (!this.state.disabled) {
      // this.props.setLoading(true);
      this.popup = this.openPopup();
      this.checkPopup();
      this.setState({ disabled: "disabled" });
    }
  };

  closeCard = () => {
    this.setState({ user: {} });
  };

  render() {
    const { email } = this.state.user;
    const { provider } = this.props;
    const { disabled } = this.state;

    console.log(this.state);

    return (
      <div className="btn btn-neutral btn-icon" onClick={this.startAuth}>
        <span className="btn-inner--icon">
          <img src="#" />
        </span>
        <span className="btn-inner--text">{provider}</span>
      </div>
    );
  }
}
