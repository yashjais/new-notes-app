import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import {
    Table,
    Button,
    Container
  } from 'reactstrap';

class CategoriesList extends React.Component{
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3010/categories')
            .then(response => {
                const categories = response.data
                // console.log(categories)
                this.setState({categories})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleClick = (e) => {
        const id = e.target.value
        // console.log(id)
        axios.delete(`http://localhost:3010/categories/${id}`)
            .then(res => {
                const categories = res.data
                this.setState(prevState => {
                    return {
                        categories : prevState.categories.filter(ele => ele._id != id)
                    }
                })
            })
    }

    handleLink = () => {
        // window.location.push('categories/add')
        // window.history.pushState('categories/add')
        this.props.history.push('categories/add')
    }

    render() {
        return(
            <Container>
                <br />
                <h2>Categories - {this.state.categories.length}</h2>
                <br />
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Show</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            this.state.categories.map((category, i) => {
                                return ( 
                                    <tr  key={category._id}>
                                        <td>{i+1}</td>
                                        <td>{category.name}</td> 
                                        <td><Link to={`categories/${category._id}`}>show</Link></td> 
                                        <td><Button value={category._id} onClick={this.handleClick}>remove</Button></td> 
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

export default CategoriesList