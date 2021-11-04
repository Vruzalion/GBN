import React, { Component } from 'react';
import './style/style.css'
import List from './list_Item';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item_information: {
                text: '',
                key: ''
            }
        }

    }
    take_item_information(event) {
        this.setState({
            item_information: {
                text: event.target.value,
                key: Date.now()
            }
        })
    }
    add_items(event) {

        event.preventDefault();
        let table = this.state.items.slice();
        let objet = this.state.item_information;
        table.push(objet);

        if (objet.text !== '') {
            //newItem[newItem.length]=object;

            this.setState({
                items: table
            })

        }

        this.setState({

            item_information: {
                text: '',
                key: ''
            }
        })

    }
    change_state(parm) {
        const a = this.state.items.slice();
        const tab = a.filter(a => a.key !== parm)
        this.setState({
            items: tab
        }, () => console.log(this.state.items))
    }
    change_text(event, par2) {

        var tableau = this.state.items.slice();
        for (let i = 0; i < this.state.items.length; i++) {

            if (tableau[i].key === par2) {
                tableau[i].text = event.target.value;
            }
        }
        this.setState({
            items: tableau
        })
    }
    render() {
        return (
            <div>
               
                <div className="header">
                    <header >

                        <input type="text" placeholder="enter your text" className="input_add" onChange={(event) => this.take_item_information(event)} ></input>
                        <button className="bouton_add" onClick={(event) => this.add_items(event)}>Add</button>
                    </header>
                    <List list={this.state.items} onAction={(parm) => this.change_state(parm)} onChange={(event, par2) => this.change_text(event, par2)}></List>
                </div>

            </div>
        )
    }
}
export default Items;