import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// props = { loading, success, callback }

export default class LoadingSuccessFail extends Component {
  render() {
    console.log("LoadingSuccessFail >> ", this.props);
    if (!this.props.loading) {
      return null;
    }
    return (
      <Modal isOpen={this.props.loading}>
        <ModalBody>Loading...</ModalBody>
      </Modal>
    );
  }
}
