import {Component} from "react";
import {Post} from "./Post";
import {postsRequests} from "../api/requests/postRequests";

export class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }
    componentDidMount() {
        postsRequests.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}
