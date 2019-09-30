import React, {Component} from 'react';

export default class EvenAndOdd extends Component {

    constructor() {
        super();
           this.state = {
             evenArray: [],
             oddArray: [],
             userInput: ''

           } 
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    assignEvenAndOdds(userInput) {
        let userType = userInput.split(',');
        let evensTyped = [];
        let oddsTyped = [];

            for (let i = 0; i < userType.length; i++) {
                if (userType[i] % 2 === 0) {
                    evensTyped.push( parseInt(userType[i], 10 ) );
                } else {
                    oddsTyped.push( parseInt(userType[i], 10 ) );
                }
            }
            this.setState({ evenArray: evensTyped, oddArray: oddsTyped});
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange = { (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick = { () => {this.assignEvenAndOdds(this.state.userInput ) } }>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}