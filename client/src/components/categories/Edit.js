import React from 'react'
import axios from '../../config/axios'
import 'bootstrap/dist/css/bootstrap.css';

import FormComponent from './Form'
import { Container } from 'reactstrap';


class CategoriesEdit extends React.Component {
    constructor() {
        super() 
        this.state = {
            category: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id,'idd')
        const id = this.props.match.params.id
        axios.get(`/categories/${id}`)
            .then(res => {
                // console.log(res.data)
                const category = res.data
                this.setState({category})
            })
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        // console.log(formData, id, "id")
        axios.put(`/categories/${id}`, formData)
            .then(res => {
                // console.log(res)
                this.props.history.push('/categories')
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return(
            <div>
                <Container>
                    <h3>Edit Category here</h3>
                    {
                        Object.keys(this.state.category).length != 0 && <FormComponent {...this.state.category} handlesubmit={this.handleSubmit} />
                    }
                </Container>
            </div>
        )
    }
}

export default CategoriesEdit