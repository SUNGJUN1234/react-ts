import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');

    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default LifeCycle;