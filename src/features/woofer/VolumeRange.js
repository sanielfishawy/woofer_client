import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import RangeSlider from 'react-bootstrap-range-slider'
import Form from 'react-bootstrap/Form'
import {setVolume, saveVolume} from './wooferSlice'

export const VolumeRange = () => {

  const volume = useSelector(state => state.woofer.volume)
  const dispatch = useDispatch()

  const onVolumeChange = async (e) => {
    dispatch(setVolume(e.target.value))
    await dispatch(saveVolume(e.target.value))
  }

  return (
    <Form>
        <Form.Label className='m-100'>Volume <small>{volume}%</small></Form.Label>
        <RangeSlider
            value={volume}
            onChange={onVolumeChange}
            tooltipLabel={volume => `${volume}%`}
        />
    </Form>
  );
};
