import { Component } from "react";
import imageList from './imageList.jpg';

export class ToDoList extends Component{
    state = {
        userInput: '',
        groceryList:[ ]
    }

onChangeEvent(e) {
    this.setState({userInput:e});
}

addItem(input) {
    if (input === '') {
        alert('Напиши список дел');
    } else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})}
}

crossedWord(e) {
    const li = e.target;
    li.classList.toggle('crossed')
}

deleteItem () {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
}

onFormSubmit(e) {
    e.preventDefault();
}

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                <div className="container">
                    <input type='text'
                    placeholder="Список дел на сегодня" 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className='add'>Добавить</button>
                    </div>
                <div className="container">
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={imageList} width='40px' alt='To Do LIst' />
                                {item}</li>
                        ))}
                    </ul>
                    </div>
                   <div className="container">
                    <button onClick={() => this.deleteItem()} className='delete'>Удалить список</button>
                    </div>
                    </form>
            </div>
        )
    }
}