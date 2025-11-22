import React from "react";
import PropTypes from "prop-types";

export default class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Fetching user status..."
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ status: "Active User" });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const containerStyle = {
      border: "2px solid #8a2be2",
      background: "#f7ecff",
      padding: "15px",
      margin: "20px 0",
      borderRadius: "10px",
      maxWidth: "300px"
    };

    const idStyle = {
      fontWeight: "600",
      marginBottom: "8px"
    };

    const statusStyle = {
      fontSize: "18px"
    };

    return (
      <div style={containerStyle}>
        <div style={idStyle}>User ID: {this.props.userId}</div>
        <div style={statusStyle}>{this.state.status}</div>
      </div>
    );
  }
}

UserStatus.propTypes = {
  userId: PropTypes.number.isRequired
};
