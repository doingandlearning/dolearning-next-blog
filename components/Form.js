import { useState } from "react";

export default function Form({ page }) {
  const [fields, setFields] = useState({
    page,
    firstName: "",
    lastName: "",
    message: "",
    workingOn: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);
      await fetch("/api/email", {
        body: JSON.stringify(fields),
        method: "POST",
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitting(false);
    }
  }

  return submitted ? (
    <h3>Thanks for sending a message. I'll be in touch soon.</h3>
  ) : (
    <form class="w-full  bg-dlgrey p-10" onSubmit={(e) => handleSubmit(e)}>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            value={fields.firstName}
            onChange={(e) =>
              setFields({ ...fields, firstName: e.target.value })
            }
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            value={fields.lastName}
            onChange={(e) => setFields({ ...fields, lastName: e.target.value })}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 px-3 w-full">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Email Address
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="kevin@kevin.com"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Interested in working on
          </label>
          <select
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            value={fields.workingOn}
            onChange={(e) =>
              console.log(e.target.value) ||
              setFields({ ...fields, workingOn: e.target.value })
            }
          >
            <option name="JavaScript" value="JavaScript">
              JavaScript
            </option>
            <option name="Node" value="Node">
              Node
            </option>
            <option name="React" value="React">
              React
            </option>
            <option name="Next.js" value="Next.js">
              Next.js
            </option>
            <option name="Vue" value="Vue">
              Vue
            </option>
            <option name="WordPress" value="WordPress">
              WordPress
            </option>
            <option name="Working with Clients" value="Working with Clients">
              Working with Clients
            </option>
            <option name="Career transition" value="Career transition">
              Career transition
            </option>
            <option
              name="Learning and curriculum design"
              value="Learning and curriculum design"
            >
              Learning and curriculum design
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Message
        </label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          rows="5"
          placeholder="Tell me something about how you think we could work together."
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />
      </div>
      <button
        className="text-white bg-primary rounded-lg my-8   py-4  text-2xl border-2 hover:border-primary hover:text-primary hover:bg-white w-full"
        disabled={submitting}
      >
        Submit
      </button>
    </form>
  );
}
