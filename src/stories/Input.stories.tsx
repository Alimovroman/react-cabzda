import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
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
 export const ControlledInput = () => {
    const [value, setValue] = useState('')
     function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
         setValue(e.currentTarget.value)
     }
    return <input value={value} onChange={onChangeValue}/>
 }
export const ControlledCheckBox = () => {
    const [isCheck, setIsCheck] = useState(true)
    const changeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setIsCheck(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={isCheck} onChange={changeCheck}/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('1')
    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={changeSelect}>
            <option>non</option>
            <option value={'1'}>bon</option>
            <option value={'2'}>bon bon</option>
            <option value={'3'}>pilim bon bon</option>
        </select>
    )

}


