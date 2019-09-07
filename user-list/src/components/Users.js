import React, {Component} from 'react';
import './users.css'
import UsersList from './UsersList';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: []
        }
    }
    addUser = (e) => {
        e.preventDefault()
        let newUser = {
            name: this._inputName.value,
            key: Date.now()
        }
        this.setState( (prevState) => {
            return {
                tab: prevState.tab.concat(newUser)
            }
        })
        this._inputName.value = "";
    }

    delateUser = (key) => {
        let filteredUsers = this.state.tab.filter(user => user.key !==key)

        this.setState(() => {
            return {
                tab: filteredUsers
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit ={this.addUser}>
                    <input 
                    ref = {(data) => {this._inputName = data}}
                    type = "text" 
                    placeholder="Imię"/>
                    <button type="submit" className="btn btn-success">Wyślij</button>
                </form>
                <UsersList 
                mainFirstProps = {this.state.tab}
                delateUserProps = {this.delateUser}/>
            </div>
        )

    }
}
export default Users