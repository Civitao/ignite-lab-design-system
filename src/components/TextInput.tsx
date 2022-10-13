import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';



export interface TextInputRootProps { 
  children: ReactNode;
}

TextInputRoot.displayName = 'TextInput'

function TextInputRoot (props: TextInputRootProps) {
  return (
    <div className={clsx(' flex items-center gap-3 py-4 px-3 w-full h-12  rounded bg-gray-800  focus-within:ring-2 ring-cyan-300',)}> {props.children} </div>
    
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputIcon (props: TextInputIconProps) {
  return(
  <Slot className='w-6 h-6 text-gray-400' >
    {props.children}
  </Slot>)
} 

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

TextInputInput.displayName = 'TextInput.Input'

function TextInputInput(props: TextInputInputProps) {

  return (
      <input className='bg-transparent flex-1 text-gray-100  outline-none text-xs placeholder:text-gray-400 '  {...props}/>

    
    
      
    )
}

export const TextInput = { 
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}