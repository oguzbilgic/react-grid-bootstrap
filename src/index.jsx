import React from 'react';

import './bootstrap-grid.css';

class Grid extends React.Component {
  render() {
    var className = "container";
    if (this.props.fluid) {
      className = "container-fluid";
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

class Col extends React.Component {
  render() {
    var classNames = "";

    if (this.props.sm){
      classNames += ` col-sm-${this.props.sm}`;
    }

    if (this.props.md){
      classNames += ` col-md-${this.props.md}`;
    }

    if (this.props.lg){
      classNames += ` col-lg-${this.props.lg}`;
    }

    if (this.props.smOffset){
      classNames += ` col-sm-offset-${this.props.smOffset}`;
    }

    if (this.props.mdOffset){
      classNames += ` col-md-offset-${this.props.mdOffset}`;
    }

    if (this.props.lgOffset){
      classNames += ` col-lg-offset-${this.props.lgOffset}`;
    }

    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default {
  Grid,
  Row,
  Col
}
