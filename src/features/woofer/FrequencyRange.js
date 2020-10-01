import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {setFrequency, saveFrequency} from './wooferSlice'

export const FrequencyRange = () => {

  const [minFreq, defaultFreq, maxFreq] = [20, 40, 300]
  const frequency = useSelector( state => state.woofer.frequency )
  const buttonVisibility = frequency === defaultFreq ? 'invisible' : 'visible'
  const dispatch = useDispatch()
  const onFrequencyChange = async (freq) => {
    dispatch(setFrequency(freq))
    await dispatch(saveFrequency(freq))
  }

  return (
    <Form>
        <Form.Label>Frequency <small>{frequency}Hz</small></Form.Label>
        <RangeSlider
            value={frequency}
            onChange={e => onFrequencyChange(e.target.value)}
            min={minFreq}
            max={maxFreq}
            tooltipLabel={frequency => `${frequency}Hz`}
        />
        <Button
            onClick={() => onFrequencyChange(defaultFreq)}
            className={buttonVisibility}>
                {`Set ${defaultFreq}Hz`}
        </Button>
    </Form>
  )};