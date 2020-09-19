import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button, Container } from 'reactstrap'

import { Link } from 'react-router-dom'

class NotesList extends React.Component{
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3010/notes')
            .then(response => {
                const notes = response.data
                // console.log(notes)
                this.setState({notes})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleRemove = (id) => {
        axios.delete(`http://localhost:3010/notes/${id}`)
            .then(response => {
                const note = response.data
                this.setState(prevState => {
                    return({
                        notes: prevState.notes.filter(notes => notes._id !== note._id)
                    })
                })
            })
    }

    handleLink = () => {
        this.props.history.push('notes/add')
    }

    render() {
        return(
            <Container>
                <br />
                <h2>Notes - {this.state.notes.length}</h2>
                <br />
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Show</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            this.state.notes.map((note, i) => {
                                return ( 
                                    <tr  key={note._id}>
                                        <td>{i+1}</td>
                                        <td>{note.title}</td> 
                                        <td>{note.description}</td>
                                        <td>{note.category ? note.category.name : 'null'}</td> 
                                        <td><Link to={`/notes/${note._id}`}>show</Link></td>
                                        <td><Button value={note._id} onClick={() => {
                                            this.handleRemove(note._id)
                                        }}>remove</Button></td> 
                                    </tr>
                                    )
                                })
                        }

                    </tbody>
                </Table>
    
                <Button onClick={this.handleLink}>Add</Button> 

            </Container>
                
        )
    }
}

export default NotesList