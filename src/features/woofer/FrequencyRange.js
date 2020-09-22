import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {setFrequency} from './wooferSlice'

export const FrequencyRange = () => {

  const [minFreq, defaultFreq, maxFreq] = [20, 40, 100]
  const frequency = useSelector( state => state.woofer.frequency )
  const buttonVisibility = frequency === defaultFreq ? 'invisible' : 'visible'
  const dispatch = useDispatch()

  return (
    <Form>
        <Form.Label>Frequency</Form.Label>
        <RangeSlider
            value={frequency}
            onChange={(e) => dispatch(setFrequency(e.target.value))}
            min={minFreq}
            max={maxFreq}
            tooltipLabel={frequency => `${frequency}Hz`}
        />
        <Button
            onClick={(e) => dispatch(setFrequency(defaultFreq))}
            className={buttonVisibility}>
                {`Set ${defaultFreq}Hz`}
        </Button>
    </Form>
  )};