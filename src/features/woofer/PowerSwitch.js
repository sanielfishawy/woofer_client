import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Form from 'react-bootstrap/Form'
import {setPower} from './wooferSlice'

export const PowerSwitch = () => {

    const power = useSelector(state => state.woofer.power)
    const dispatch = useDispatch()

    return (
        <Form>
            <Form.Label>Power</Form.Label><br/>
            <BootstrapSwitchButton
                checked={power}
                onlabel='On'
                offlabel='Off'
                onChange={checked =>  dispatch(setPower(checked))}
            />
        </Form>
    )
}
