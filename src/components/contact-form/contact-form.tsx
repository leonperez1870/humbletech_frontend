import React, { useState } from "react";

interface ContactUsProps {
  name: string;
  email: string;
  brand: string;
  message: string;
  contactSectionHeading: string;
  contactSectionSubHeading: {
    contactSectionSubHeading: string;
  };
}

const ContactForm: React.FC<ContactUsProps> = ({ name, email, brand, message, contactSectionHeading, contactSectionSubHeading }) => {
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, for example sending the data to an API or to Contentful.
    console.log(form);
  };

  const subHeading = contactSectionSubHeading.contactSectionSubHeading;

  return (
    <section className="w-full max-w-lg mx-auto mt-5">
      { contactSectionHeading && <div className="text-center">
        <h2 className="text-5xl mb-4">{contactSectionHeading}</h2>
        { subHeading && <h3 className="text-2xl mb-8">{subHeading}</h3> }
      </div> }
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name:
            </label>
            <input
              autoComplete="name"
              aria-labelledby="name-label"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3 mt-6">
            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email:
            </label>
            <input
              autoComplete="email"
              aria-labelledby="email-label"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3 mt-6">
            <label htmlFor="brand" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Brand:
            </label>
            <input
              autoComplete="organization"
              aria-labelledby="brand-label"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="brand"
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3 mt-6">
            <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message:
            </label>
            <textarea
              aria-labelledby="message-label"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3 mt-6">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ContactForm