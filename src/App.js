import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import { PowerSwitch } from './features/woofer/PowerSwitch'
import { VolumeRange } from './features/woofer/VolumeRange'
import { FrequencyRange } from './features/woofer/FrequencyRange'

export default function App(){
    return (
        <Container>
            <h1>Woofer</h1>
            <Row>
                <Col xs={1} style={{margin: '20px'}}><PowerSwitch/></Col>
                <Col sm style={{margin: '20px'}}><VolumeRange/></Col>
                <Col sm style={{margin: '20px'}}><FrequencyRange/></Col>
            </Row>
        </Container>
    )
}