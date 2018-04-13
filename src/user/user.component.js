import React from 'react';

import './user.component.css';
import { UserModel } from './user.model';
import { ChildComponent } from './child.component';

export class UserComponent extends React.Component {
    constructor() {
        super();
        this.model = new UserModel("Emmanuel", "ecsalunga@yahoo.com");
        this.state = {model: this.model};
        this.Update = this.Update.bind(this);
    }

    Update() {
        this.model.Name = "Salunga";
        this.setState({model: this.model});
    }

    render() {
        return <div>
            <div className="big" onClick={this.Update}>Hello, {this.state.model.Name}</div>
            <ChildComponent Model={this.model} />
        </div>;
    }
}

