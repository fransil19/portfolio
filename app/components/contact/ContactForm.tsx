'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    bodyContent: "",
    cellphone: ""
  })

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {

  }


  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 w-4/5" id="contact">
			<div className="text-center">
				<p className="font-general-medium text-3xl sm:text-4xl mb-1 text-ternary-dark dark:text-gray-300">
					Get in touch
				</p>
        <form action="" className='flex flex-col gap-5 mt-10 '>
          <input type="text" name="name" value={input.name} className='border border-gray-300 rounded-xl pl-3' placeholder='Full Name' onChange={onChangeInput}/>
          <input type="text" name="email" value={input.email} className='border border-gray-300 rounded-xl pl-3' placeholder='Email' onChange={onChangeInput}/>
          <textarea name="bodyContent" cols={30} rows={10} value={input.bodyContent} className='border border-gray-300 rounded-xl pl-3 pt-3' placeholder='Hi Franco, i want to reach you because i think you could fit...' onChange={onChangeTextArea}></textarea>
          <div className='flex flex-col items-center'>
            <button type='button' className='border rounded-xl bg-emerald-200 hover:bg-emerald-300 
      dark:bg-slate-500 
      dark:border-0
      dark:hover:bg-gray-500
      dark:text-slate-300 w-3/6'>Submit</button>
          </div>
          
        </form>
			</div>
    </section>
  )
}

export default ContactForm