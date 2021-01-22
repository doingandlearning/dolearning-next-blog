import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm"

export default function Garden() {
  return (
    <Layout>
      <div className="bg-white w-full py-16">
        <div className="w-full md:w-1/2 mx-auto px-4">
          <h2 className="w-full md:w-5/6 font-extrabold text-lightPrimary text-3xl leading-8">
            Are you stuck in tutorial hell? Not sure where to go next with your learning?
              </h2>
          <p className="text-dlblue text-left text-lg font-normal">
            You want to be constantly learning and inspired - growing as a developer and confident that your effort is being well spent.
          </p>
          <p>

            Let me help! Sign-up below and every week I'll send you:</p>
          <ul>
            <li>
              an actionable tip that you'll be able to use to level up straight away;

              </li>
            <li>
              a curated selection of tutorials that I've worked through myself. I'll share insight on how useful they are and what you can do with the skills gained;

              </li>
            <li>
              some of my own videos and writing to help support you on your development journey.
              </li>
          </ul>



        </div>
      </div>
      <div className="bg-lightPrimary w-full py-16 flex mb-10">

        <EmailForm formid="1697448" />
      </div>
    </Layout>)
}
