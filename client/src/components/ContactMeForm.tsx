import {motion} from 'framer-motion'
import React from 'react'
import {ContactMeButton} from './ContactMeButton'

export function ContactMeForm(props: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>,
  formData: { name: string; message: string; email: string },
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  disabled: boolean
}): React.JSX.Element {
  return (
    <motion.form layout
                 onSubmit={props.onSubmit}
                 className={'w-full flex flex-col'}
    >
      <motion.label>
        Name:
        <motion.input
          className={'border-2 float-right w-full h-10 rounded-none'}
          type="text"
          name="name"
          value={props.formData?.name}
          onChange={props.onChange}
          required
        />
      </motion.label>
      <br/>

      <motion.label>
        Email:
        <motion.input
          className={'border-2 float-right w-full h-10 rounded-none'}
          type="email"
          name="email"
          value={props.formData?.email}
          onChange={props.onChange}
          required
        />
      </motion.label>
      <br/>

      <motion.label>
        Message:
        <motion.textarea
          className={'resize-none border-2 float-right w-full h-32 rounded-none'}
          name="message"
          value={props.formData?.message}
          onChange={props.onChange}
          required
        />
      </motion.label>
      <br/>

      <ContactMeButton isDisabled={props.disabled}></ContactMeButton>

    </motion.form>
  )
}
