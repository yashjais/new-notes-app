import React from 'react' 
import { Jumbotron, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios'
import { Link } from 'react-router-dom'

class NotesShow extends React.Component {
    constructor(){
        super() 
        this.state = {
            note: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3010/notes/${id}`)
            .then(response => {
                console.log(response.data)
                const note = response.data
                this.setState({note})
            })
    }

    render() {
        // console.log(this.props.match.params.id)
        return(
            <div>
                {/* <h2>Show Note</h2>
                <h3>Title - {this.state.note.title}</h3>
                <h3>Description - {this.state.note.description}</h3>
                <h3>Category - {this.state.note.category && this.state.note.category.name}</h3>
                <Link to={`/notes/edit/${this.state.note._id}`}>edit</Link> <br />
                <Link to='/notes'>back</Link> */}

                <Container>
                    <Jumbotron>
                        <h1 className="display-3">{this.state.note.title}</h1>
                        <p className="lead">{this.state.note.description}</p>

                        <hr className="my-2" />
                        <p>Category - {this.state.note.category ? this.state.note.category.name : 'null'}</p>
                        
                        <Button ><Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link></Button>
                    </Jumbotron>
                </Container>

            </div>
        )
    }
}

export default NotesShow