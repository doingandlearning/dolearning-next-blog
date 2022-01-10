import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm";

export default function Garden() {
  return (
    <Layout>
      <div className="bg-white w-full py-16">
        <div className="w-full md:w-1/2 mx-auto px-4">
          <h2 className="w-full md:w-5/6 font-extrabold text-lightPrimary text-3xl leading-8">
            Doing and Learning
          </h2>
          <p className="text-dlblue text-left text-lg font-normal">
            I build my life around those two actions and am fascinated by how
            they interact with each other. Doing informs learning which informs
            doing and on and on.
          </p>
          <p>
            I write a weekly newsletter that helps encourage you on your
            learning journey, as well as sharing helpful resources and cool
            finds from the web. Sign up below so that each Monday you'll get:
          </p>
          <ul className="leading-6">
            <li>
              an actionable and helpful reflection to help think about and level
              up your learning journey;
            </li>
            <li>two learning resources that can help you on your way;</li>
            <li>
              and three cool things I've found while exploring the internet.
            </li>
          </ul>
          <p>
            I'll also shout out some things I've been working on that I think
            you'll enjoy and find valuable.
          </p>
        </div>
      </div>
      <div className="bg-lightPrimary w-full py-4 flex mb-10">
        <EmailForm formid="1697448" />
      </div>
    </Layout>
  );
}
