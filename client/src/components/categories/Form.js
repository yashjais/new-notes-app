import React from 'react'
import axios from '../../config/axios'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Container, Label, Input, FormText } from 'reactstrap';

class FormComponent extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props)
        this.state = {
            name: props.name ? props.name : "",
        }
    }


    handleChange = (e) => {
        // console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlesubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": this.state.name
        }
        // console.log(formData)
        this.props.handlesubmit(formData)
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handlesubmit}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" value={this.state.name} id="name" name="name" onChange={this.handleChange} />
                    </FormGroup>
                    
                    <Button >Goo!!</Button>
                    </Form>
            </Container>
        )
    }
}

export default FormComponent