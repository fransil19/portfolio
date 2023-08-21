"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const email_service_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const email_template_id: string =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const email_public_key: string =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Define input validation with Zod
  const inputSchema = z.object({
    name: z
      .string({ required_error: "Your name is required" })
      .regex(/^[a-zA-Z]+$/, "Your name cannot contain numbers")
      .min(4, "You must provide a full name"),
    message: z
      .string({ required_error: "A message is required" })
      .min(4, "You must provide a longer message")
      .max(
        300,
        "Your message is too long, please send a message with less than 300 characters"
      ),
    email: z
      .string({ required_error: "Your email is required" })
      .email("You must provide a valid email"),
  });

  const validateInput = (object: any) => {
    const result: any = inputSchema.safeParse(object);
    const newError: any = {};

    if (result.error) {
      result.error.errors.forEach((errorVal: any) => {
        newError[errorVal.path[0]] = errorVal.message;
      });
    }

    setError(newError);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };

    validateInput(newInput);
    setInput(newInput);
  };

  const checkIfErrors = () => {
    let condition = false;
    for (const key in error) {
      if (error[key as keyof typeof error].length > 0) {
        condition = true;
      }
    }
    return condition;
  };

  const checkIfEmpty = () => {
    let isEmpty = false;
    for (const key in input) {
      if (input[key as keyof typeof input].length == 0) {
        isEmpty = true;
      }
    }
    return isEmpty;
  };

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(newInput);

    validateInput(newInput);
  };

  const clearInputs = () => {
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(email_service_id, email_template_id, input, email_public_key)
      .then((result: any) => {
        if( result.status === 200){
          clearInputs();
          toast.success("Email sent.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error: any) => {
        toast.error("Ups! Something went wrong.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const isSubmitable = !checkIfErrors() && !checkIfEmpty();

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 w-4/5" id="contact">
      <div className="text-center">
        <p className="font-general-medium text-3xl sm:text-4xl mb-1 text-black dark:text-gray-300">
          Get in touch
        </p>
        <form
          action=""
          onSubmit={sendEmail}
          className="flex flex-col gap-5 mt-10 "
        >
          <input
            type="text"
            name="name"
            value={input.name}
            className="border border-gray-300 rounded-xl pl-3 text-black"
            placeholder="Full Name"
            onChange={onChangeInput}
          />
          {error.name ? <p className="text-red-400">{error.name}</p> : null}
          <input
            type="text"
            name="email"
            value={input.email}
            className="border border-gray-300 rounded-xl pl-3 text-black"
            placeholder="Email"
            onChange={onChangeInput}
          />
          {error.email ? <p className="text-red-400">{error.email}</p> : null}
          <textarea
            name="message"
            cols={30}
            rows={10}
            value={input.message}
            className="border border-gray-300 rounded-xl pl-3 pt-3 text-black"
            placeholder="Hi Franco, i want to reach you because i think you could fit..."
            onChange={onChangeTextArea}
          ></textarea>
          {error.message ? (
            <p className="text-red-400">{error.message}</p>
          ) : null}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="border rounded-xl bg-emerald-200 hover:bg-emerald-300 
                  dark:bg-slate-500 
                    dark:border-0
                  dark:hover:bg-gray-500
                  dark:text-slate-300 w-3/6"
              disabled={!isSubmitable}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
