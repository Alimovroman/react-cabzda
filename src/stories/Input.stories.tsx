import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Example/Input',
  // component: Button,
} //as ComponentMeta<typeof Button>;
export const Template = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
      <>
        <input onChange={onChangeValue}/> - {value}
      </>
  )
}
export const GetValueOffControlledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onChangeValue = () => {
    setValue(inputRef.current?.value!)
  }

  return (
      <>
        <input id={'inputId'} ref={inputRef}/> <button onClick={onChangeValue}>Save</button> actual value - {value}

      </>
  )
}
export const ControlledInputWithFixedValue = () => <input value={'yo yo yo'}/>

// export const UncontrolledInput = Template.bind({})
// export const ControlledInput = TemplateControlled.bind({})


