import React from 'react'
import FormComponent from './Form'
import axios from '../../config/axios'

import { Container } from 'reactstrap'


// class NotesAdd extends React.Component {

//     handleSubmit = (formData) => {
//         // console.log(formData)
//         axios.post('/notes',formData)
//             .then(response => {
//                 console.log(response.data)
//                 this.props.history.push('/notes')
//             })
//             .catch(err => {
//                 alert(err)
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Add component</h3>
//                 <h4>add form here</h4>
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         )
//     }

// }

function NotesAdd(props) {

    const handleSubmit = (formData) => {
        // console.log(formData)
        axios.post('/notes',formData)
            .then(response => {
                // console.log(response.data)
                window.location.href = '/notes'
            })
            .catch(err => {
                alert(err)
            })
    }

    
    return (
        <Container>
            <br />
            <h3>Add A Note</h3>
            <br />
            <FormComponent handleSubmit={handleSubmit} />
        </Container>
    )


}


export default NotesAdd