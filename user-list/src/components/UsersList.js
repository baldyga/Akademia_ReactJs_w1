import React, {Component} from 'react';
import './usersList.css'

class UsersList extends Component {

    createLi = (lista) => {
        return <li key = {lista.key}
        onClick = {() => this.delateUser(lista)}>
        {lista.name} klucz: {lista.key}
        </li>
    }
    delateUser = (lista) => {
        this.props.delateUserProps(lista.key)
    }

    render() {
        let usersList = this.props.mainFirstProps
        let listMain = usersList.map(this.createLi)
        return (
            <ul>
                {listMain}
            </ul>
        )
    }
}
export default UsersList