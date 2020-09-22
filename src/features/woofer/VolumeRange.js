import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import RangeSlider from 'react-bootstrap-range-slider'
import Form from 'react-bootstrap/Form'
import {setVolume} from './wooferSlice'

export const VolumeRange = () => {

  const volume = useSelector(state => state.woofer.volume)
  const dispatch = useDispatch()

  return (
    <Form>
        <Form.Label className='m-100'>Volume</Form.Label>
        <RangeSlider
            value={volume}
            onChange={e => dispatch(setVolume(e.target.value))}
            tooltipLabel={volume => `${volume}%`}
        />
    </Form>
  );

};
