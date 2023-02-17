import {Component} from "react";
import {usersRequests} from "../api/requests/usersRequests";
import {User} from "./User";

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[]}
    }

    componentDidMount() {
        usersRequests.getAll().then(({data})=>this.setState({users:[...data]}))
    }

    render() {
        return (
        <div>
            {this.state.users.map(user => <User key={user.id} user={user}/>)}
        </div>
        )
    }
}