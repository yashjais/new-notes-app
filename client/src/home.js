import React from 'react'
import noteImg from './images/notes.png'
import {Container} from 'reactstrap';

function Home(props) {
    return (
        <Container>
            <img src={noteImg} alt="notes" style = {{width : "100%"}} />
        </Container>
    )
}

export default Home