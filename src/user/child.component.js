import React from 'react';

export class ChildComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {model: props.Model};
    }

    render() {
        return <div>
            <div className="child">Child, {this.state.model.Name}</div>
        </div>;
    }
}

