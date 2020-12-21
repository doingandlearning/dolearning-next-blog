import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm"

export default function Garden() {
  return (
    <Layout>
      <div className="bg-lightPrimary w-full py-16">
        <div className="w-full md:w-1/2 mx-auto px-4">
          <p className="text-dlblue text-left text-lg font-normal">
            Updates and cool things from the web
          </p>
          <h2 className="w-full md:w-5/6 font-extrabold text-white text-3xl leading-8">
            Subscribe to the weekly newsletter
              </h2>
          <EmailForm formid="1697448" />
        </div>
      </div>
    </Layout>
  );
}
