import React from 'react'
import axios from '../../config/axios'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class FormComponent extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props)
        this.state = {
            title: props.title ? props.title : "",
            description: props.description ? props.description : "",
            category: props.category ? props.category.name : "select",
            categories: []
        }
    }

    componentDidMount() {
        axios.get('/categories')
            .then(response => {
                // console.log(response.data)
                const categories = response.data
                this.setState({categories})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleChange = (e) => {
        // console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCatChange = (e) => {
        // console.log(e.target.name)
        const category = e.target.value
        this.setState({category})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <Container>
    
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" value={this.state.title} id="title" name="title" onChange={this.handleChange} placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Label  htmlFor="description">Description</Label>
                        <Input type="text" value={this.state.description} id="description" name="description" onChange={this.handleChange} placeholder="Description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect"  onChange={this.handleCatChange}>
                        
                            <option value="">{this.state.category}</option>
                            {
                            this.state.categories.map(category => {
                                    return <option key={category._id} value={category._id} >{category.name}</option>
                            }) 
                            }
                        
                        </Input>
                    </FormGroup>
                   
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default FormComponent