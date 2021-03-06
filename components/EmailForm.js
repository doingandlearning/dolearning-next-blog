import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Message from "../ConfirmMessage/Message";
import fetch from "isomorphic-unfetch";

const Message = "Confirm";

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  first_name: Yup.string(),
});

const PostSubmissionMessage = ({ response }) => {
  return (
    <div className="text-2xl text-center">
      <p>Great, one last thing...</p>
      <p>I just sent you an email.</p>
    </div>
  );
};

export default function SignUp({
  formid = 1697448,
  children,
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleSubmit = async (values) => {
    setSubmitted(true);
    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${formid}/subscriptions`,
        {
          method: "post",
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const responseJson = await response.json();
      setResponse(responseJson);
      setErrorMessage(null);
    } catch (error) {
      setSubmitted(false);
      setErrorMessage("Something went wrong!");
    }
  };

  const successful = response && response.status === "success";

  return (
    <Formik
      initialValues={{
        email_address: "",
        first_name: "",
      }}
      validationSchema={SubscribeSchema}
      onSubmit={(values) => handleSubmit(values)}
      render={({ errors, touched, isSubmitting }) => (
        <>
          {!successful && (
            <>
              {children && (
                <div className="px-2 sm:px-6 text-3xl lg:text-5xl my-auto">
                  {children}
                </div>
              )}
              <Form className="mx-auto my-auto">
                <div className="flex flex-col md:flex-row">
                  <label htmlFor="first_name">
                    <div className="pt-4">
                      <p className="text-white p-2 font-normal text-lg">
                        First name
                      </p>
                      <Field
                        aria-label="your first name"
                        aria-required="false"
                        name="first_name"
                        placeholder="Jane"
                        type="text"
                        className="text-2xl rounded-xl p-2 my-auto bg-white mr-3"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="span"
                        className="field-error"
                      />
                    </div>
                  </label>
                  <label htmlFor="email">
                    <div className="pt-4">
                      <p className="text-white p-2 font-normal text-lg">
                        Email
                      </p>
                      <Field
                        aria-label="your email address"
                        aria-required="true"
                        name="email_address"
                        placeholder="jane@acme.com"
                        type="email"
                        className="text-2xl rounded-xl p-2 my-auto bg-white md:ml-2"
                      />
                      <ErrorMessage
                        name="email_address"
                        component="span"
                        className="text-red-700"
                      />
                    </div>
                  </label>
                </div>

                <button
                  data-element="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary px-8 py-2 mx-2 my-3 rounded-xl mt-6"
                >
                  {!isSubmitting && "Subscribe!"}
                  {isSubmitting && "Subscribing..."}
                </button>
              </Form>
            </>
          )}
          {submitted && !isSubmitting && (
            <PostSubmissionMessage response={response} />
          )}
          {errorMessage && <div>{errorMessage}</div>}
        </>
      )}
    />
  );
}
