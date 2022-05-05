import Layout from "@components/Layout";
import Form from "@components/form";

export default function Garden() {
  return (
    <Layout>
      <div className="justify-between  flex-col md:flex-row py-4 mx-auto container">
        <h1>Mentoring and 1:1 Coaching</h1>
        <h2>Get the expert support you need to achieve your goals.</h2>
        <p>
          I work with developers like you to pair program, video chat and give
          help, support and encouragement.
        </p>
        <p>My areas of expertise are:</p>
        <ul>
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Vue</li>
          <li>
            WordPress
            <ul>
              <li>Theme and plugin development</li>
              <li>Headless WordPress</li>
            </ul>
          </li>
          <li>Working with clients</li>
          <li>Career transition</li>
          <li>Learning and curriculum design</li>
        </ul>
        <Form page="mentoring" />
      </div>
    </Layout>
  );
}
