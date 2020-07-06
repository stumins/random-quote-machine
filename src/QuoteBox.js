import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./QuoteBox.css"

const Text = (props) => {
    return (
        <div id="text" className="text">{props.text}</div>
    );
}

const Author = (props) => {
    return (
        <div id="author">> {props.author}</div>
    );
}

const NewQuoteButton = (props) => {
    return (
        <button id="new-quote" onClick={props.onClick}>New Quote</button>
    );
}

const TweetQuoteButton = (props) => {
    const baseURI = "https://www.twitter.com/intent/tweet?text=";
    const uri = encodeURI(baseURI.concat(props.tweet))
    return (
        <button id="tweet-button">
            <a id="tweet-quote" href={uri} target="_blank" onClick={props.onClick}>Tweet</a>
        </button>
    );
}

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        // Need random code here because can't set state during the constructor call
        let idx = Math.floor(Math.random() * this.props.quotes.length);
        const { text: newText, author: newAuthor } = this.props.quotes[idx];
        this.state = {
            idx: idx,
            quotes: props.quotes,
            text: newText,
            author: newAuthor,
        };
    }

    newQuote() {
        // Get quotes randomly, but ensure you can't get the same quote back to back
        const getNewIdx = () => Math.floor(Math.random() * this.state.quotes.length);
        let newIdx = getNewIdx();
        while (newIdx === this.state.idx) {
            newIdx = getNewIdx();
        }
        const { text: newText, author: newAuthor } = this.state.quotes[newIdx];
        this.setState({
            idx: newIdx,
            text: newText,
            author: newAuthor,
        });
    }

    render() {
        const boxStyle = {};
        return (
            <div className="QuoteBox" id="quote-box">
                <div id="text-wrapper">
                    <Text text={this.state.text} />
                    <Author author={this.state.author} />
                </div>
                <div id="button-wrapper">
                    <TweetQuoteButton tweet={this.state.text.concat(" - ", this.state.author)} />
                    <NewQuoteButton onClick={() => this.newQuote()} />
                </div>
            </div>
        );
    }
}

export default hot(module)(QuoteBox);