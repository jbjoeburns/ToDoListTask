import React from 'react';
import { useState } from "react";
import '../App.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText : [],
            archiveList : [],
            indexTicked: []
        }
        this.handleInput = this.handleInput.bind(this);
    };
    handleInput = (event) => {
        event.preventDefault();
        this.setState({ 
            inputText: this.state.inputText.concat([this.element.value])
          })
    };
    handleDel = (index) => {
        const inputTextVar = this.state.inputText
        inputTextVar.splice(index, 1)
        this.setState({ inputText : inputTextVar })

    };
    handleArchive = (index) => {
        let removedElement = this.state.inputText[index];
        const inputTextVar = this.state.inputText
        inputTextVar.splice(index, 1)
        this.setState({ inputText : inputTextVar })

        let newArchiveList = this.state.archiveList.concat([removedElement])
        this.setState({ archiveList : newArchiveList })
    };
    handleChange = (e) => {
        let targetValue = e.target.value
        let newList = this.state.inputText.splice(e.target.name, 1, targetValue);
        this.setState({ inputText : newList })
    };
    handleArchive = (index) => {
        let removedElement = this.state.inputText[index];
        const inputTextVar = this.state.inputText
        inputTextVar.splice(index, 1)
        this.setState({ inputText : inputTextVar })
    
        let newArchiveList = this.state.archiveList.concat([removedElement])
        this.setState({ archiveList : newArchiveList })
    };
    handleChange = (e) => {
        let targetValue = e.target.value
        let inputTextVar = this.state.inputText
        inputTextVar.splice(e.target.name, 1, targetValue);
        this.setState({ inputText : inputTextVar })
    };
    render() {
        const buttonVals = this.state.inputText;
        const ArchButtonVals = this.state.archiveList;
        return (
            <div>
            <form onSubmit={this.handleInput}>
                <label>Input entry:
                    <input id='fonts' type="text" ref={el => this.element = el} />        
                </label>
                <input id='fonts' type="submit" value="SUBMIT" />
            </form>
            To-do (can edit entries by clicking text):
            <div>
                {buttonVals.map((calcVal, index) => {
                    return (
                    <div id='buttonNumb'>
                    <label>
                    <input 
                    type="checkbox"
                    />
                    <input id='fonts'
                    name={index}
                    type="text"  
                    value={this.state.inputText[index]}
                    onChange={this.handleChange}
                    />    
                    </label>
                    <button id='fonts' onClick={() => this.handleDel(index)} label = {index}>DELETE</button>
                    <button id='fonts' onClick={() => this.handleArchive(index)} label = {index}>ARCHIVE</button>
                    </div>
                    )
                    
                })}
            </div>
            Archive:
            <div id='archive'>
                {ArchButtonVals.map((calcVal, index) => {
                    return (
                    <div id='buttonNumb'>
                    <label>
                    <input type="checkbox" checked= "checked"/>
                    <input  id='fonts'
                    name="Archive"
                    type="text"  
                    value={this.state.archiveList[index]}
                    />    
                    </label>
                    </div>
                    )
                    
                })}
            </div>
            </div>
        );
    }
}

export default Buttons;