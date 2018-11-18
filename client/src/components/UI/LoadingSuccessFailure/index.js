import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
// import './styles.scss';

const defaultOptions = {
  colors: {
    success: "#5cb85c",
    fail: "red"
  },
  dimensions: {
    size: 8,
    thickness: 2
  }
};

const loaderSpin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const checkmark = (width, height) => keyframes`
  0% {
		height: 0;
		width: 0;
		opacity: 1;
	}
	20% {
		height: 0;
		width: ${width};
		opacity: 1;
	}
	40% {
		height: ${height};
		width: ${width};
		opacity: 1;
	}
	100% {
		height: ${height};
		width: ${width};
		opacity: 1;
	}
`;

const error = (height, thickness) => keyframes`
	0% {
		height: 0;
		width: 0;
		opacity: 1;
	}
	20% {
		height: 0;
		width: ${thickness};
		opacity: 1;
	}
	40% {
		height: ${height};
		width: ${thickness};
		opacity: 1;
	}
	100% {
		height: ${height};
		width: ${thickness};
		opacity: 1;
	}
`;

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
`;
const LoaderCard = styled.div`
  z-index: 10;
  height: 10em;
  width: 10em;
  background: #fff;
  display: inline-block;
  border-radius: 20px;
  padding: 1em 1em;
  text-align: center;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleLoader = styled.div`
  border: ${props => props.checkThickness} solid rgba(0, 0, 0, 0.2);
  border-left-color: ${props => props.checkColor};
  animation-name: ${loaderSpin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  box-sizing: content-box;
  border-radius: 50%;
  width: ${props => props.loaderSize};
  height: ${props => props.loaderSize};
  position: relative;

  text-align: center;
  margin: 0 auto;
`;
/*
position: relative;
	display: inline-block;
	vertical-align: top;
	*/

const LoadComplete = styled(CircleLoader)`
  -webkit-animation: none;
  animation: none;
  border-color: ${props => props.checkColor};
  transition: border 500ms ease-out;
`;

const LoadFailed = styled(CircleLoader)`
  -webkit-animation: none;
  animation: none;
  border-color: ${props => props.errorColor};
  transition: border 500ms ease-out;
`;

const Icon = styled.div`
  display: none;
  box-sizing: content-box;
  display: block;
`;

const Checkmark = styled(Icon)`
  opacity: 1;
  height: ${props => props.checkHeight};
  width: ${props => props.checkWidth};
  transform-origin: left top;
  border-right: ${props => props.checkThickness} solid
    ${props => props.checkColor};
  border-top: ${props => props.checkThickness} solid
    ${props => props.checkColor};
  content: "";
  left: ${props => props.checkLeft};
  top: ${props => props.checkHeight};
  position: absolute;
  animation-duration: 1.2s;
  animation-timing-function: ease;
  animation-name: ${props => checkmark(props.checkWidth, props.checkHeight)};
  transform: scaleX(-1) rotate(135deg);
`;

const Error = styled(Icon)`
  position: absolute;
  left: ${props => props.errorLeft};
  top: ${props => props.errorLeft};
  width: ${props => props.checkHeight};
  height: ${props => props.checkHeight};
  &::before,
  &::after {
    position: absolute;
    content: " ";
    height: ${props => props.checkHeight};
    width: 2px;
    background-color: ${props => props.errorColor};

    animation-duration: 1.2s;
    animation-timing-function: ease;
    animation-name: ${props => error(props.checkHeight, props.checkThickness)};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export default class LoadingSuccessFailure extends Component {
  componentDidUpdate(prevProps) {
    let completionDelay = this.props.completionDelay || 1500;
    console.log(
      "LoadingSuccessFailure>componentDidUpdate::",
      "prevProps",
      prevProps,
      "currProps",
      this.props
    );
    if (
      this.props.status === "success" &&
      this.props.status !== prevProps.status
    ) {
      setTimeout(() => {
        this.props.successCallback();
      }, completionDelay);
    } else if (
      this.props.status === "failed" &&
      this.props.status !== prevProps.status
    ) {
      setTimeout(() => {
        this.props.failureCallback();
      }, completionDelay);
    }
  }

  render() {
    const status = this.props.status || "pending";
    const options = Object.assign(defaultOptions, this.props.options);
    console.log(options);

    // Assign css variables as needed
    const loaderSize = options.dimensions.size + "em";
    const checkHeight = options.dimensions.size / 2 + "em";
    const checkWidth = options.dimensions.size / 4 + "em";
    const checkLeft =
      options.dimensions.size / 6 + options.dimensions.size / 12 + "em";
    const errorLeft = options.dimensions.size / 4 + "em";
    const checkThickness = options.dimensions.thickness + "px";
    const checkColor = options.colors.success;
    const errorColor = options.colors.fail;
    const topMargin = 9 - options.dimensions.size + "em";

    console.log(loaderSize, checkWidth, checkHeight, checkThickness, checkLeft);

    return (
      <div>
        {this.props.status === "pending" ? null : (
          <Modal>
            <LoaderCard>
              {this.props.status === "success" ? (
                <LoadComplete
                  checkThickness={checkThickness}
                  checkColor={checkColor}
                  checkWidth={checkWidth}
                  checkHeight={checkHeight}
                  loaderSize={loaderSize}
                  topMargin={topMargin}
                >
                  <Checkmark
                    checkThickness={checkThickness}
                    checkColor={checkColor}
                    checkWidth={checkWidth}
                    checkHeight={checkHeight}
                    checkLeft={checkLeft}
                  />
                </LoadComplete>
              ) : this.props.status === "failed" ? (
                <LoadFailed
                  checkThickness={checkThickness}
                  errorColor={errorColor}
                  checkWidth={checkWidth}
                  checkHeight={checkHeight}
                  loaderSize={loaderSize}
                  topMargin={topMargin}
                >
                  <Error
                    errorLeft={errorLeft}
                    checkThickness={checkThickness}
                    checkHeight={checkHeight}
                    errorColor={errorColor}
                  />
                </LoadFailed>
              ) : (
                <CircleLoader
                  checkThickness={checkThickness}
                  checkColor={checkColor}
                  checkWidth={checkWidth}
                  checkHeight={checkHeight}
                  loaderSize={loaderSize}
                  topMargin={topMargin}
                />
              )}
            </LoaderCard>
          </Modal>
        )}
      </div>
    );
  }
}
