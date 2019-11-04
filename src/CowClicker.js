import React, { Component } from 'react';

class CowClicker extends Component {

    //setting up our initial state
    //The constructor function gets calle dwhemever we make a new CowClicker Component
    constructor(props) {
        //Super refers to the class we are extending - in this case, we also want to call the constructor for component so that any additional setup gets done
        super(props);
        //Set up our state object
        this.state = { clicks: 0 };
    }

    onCowClick = () => {
        console.log("Cow clicked");
        this.setState({
            clicks: this.state.clicks + 1
        });

        //DON"T DO THIS
        //this.state = { clicks.this.state + 1}
    }

    componentWillMount() {
        console.log("component is getting ready to mount");
    }

    componentWillMount() {
        console.log("Component is finished cmounting");
    }

    componentWillMount() {
        console.log("Render called");
    }

    render() {

        console.log("Render called");
        return (
            <div>
                <div>Clicks: {this.state.clicks}</div>
                <img src='http://s3.bypaulshen.com/buildwithreact/cow.png' onClick={this.onCowClick} alt="Cow" />
                <p>Click the cow</p>
            </div>
        );
    }
}

export default CowClicker;