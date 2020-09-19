import React from 'react'

import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Button } from 'reactstrap';

class CategoriesShow extends React.Component {
    constructor() {
        super()
        this.state = {
            category: {},
            notes: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/categories/${id}`)
            .then(response => {
                const category = response.data
                axios.get('/notes')
                    .then(res => {
                        // console.log(res.data)
                        // console.log(category)
                        const notes = []
                        res.data.forEach(ele => (ele.category && ele.category._id == id && notes.push(ele) ))
                        // console.log('notes', notes)
                        this.setState({category, notes})
                    })
                    .catch(err => {
                        alert(err)
                    })
                
            })
            .catch(err => {
                alert(err)
            })

            /*
            const promises = []
            promises.push(axios.get(`/categories/${id}`))
            promises.push(axios.get(`/notes`))
            promises.all
                .then(response => {
                    console.log(response.data)
                })
            //////////////////////////////
            
             */
    }

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state.category)
        return(
            <Container>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">{this.state.category.name}</h1>
                    <p className="lead">
                        <ul>
                                {       
                                    this.state.notes.map(note => {
                                        return <li key={note._id}>{note.title} - {note.description} <Link to={`/notes/${note._id}`}>show</Link> </li>
                                    })
                                }
                        </ul>
                    </p>
                    </Container>
                    <Button ><Link to={`/categories/edit/${this.props.match.params.id}`}>Edit</Link></Button>
                </Jumbotron>
            </Container>
        )
    }
}

export default CategoriesShow