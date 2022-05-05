import Image from "next/image";

import Layout from "@components/Layout";
import CourseForm from "@components/CourseForm";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title:
        "WordPress as a Headless Content Management System (CMS) and GraphQL API",
      link: "https://egghead.io/courses/headless-wordpress-4a14?af=gbhjp8",
      imageSrc: "/headlesswordpress.webp",
      imageAlt: "WordPress and GraphQL logo",
      cta: "Watch now",
    },
    {
      id: 2,
      title: "The Beginner's Guide to Vue 3",
      link: "https://egghead.io/courses/the-beginner-s-guide-to-vue-3-1c46da8b?af=gbhjp8",
      imageSrc: "/vue3.webp",
      imageAlt: "Vue 3 course logo",
      cta: "Watch now",
    },
    {
      id: 3,
      title: "Create a GraphQL Powered Vue 3 Application",
      link: "https://egghead.io/courses/create-a-graphql-powered-vue-3-application-8152749d?af=gbhjp8",
      imageSrc: "/graphqlandvue.webp",
      imageAlt: "Vue 3 course logo",
      cta: "Watch now",
    },
    {
      id: 4,
      title: "Building an API with Express",
      link: "https://egghead.io/courses/building-an-api-with-express-f1ea?af=gbhjp8",
      imageSrc: "/expressjslogo.webp",
      imageAlt: "Express js course logo",
      cta: "Watch now",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        <h1>Courses</h1>
        <h2>Video Courses</h2>
        <p>
          I regularly create video courses and, at the moment, use the egghead
          platform to share them. Here are the current ones:
        </p>
        <div class="grid grid-cols-3 space-x-4 space-y-4">
          {courses.map((course) => (
            <RenderedCourse {...course} />
          ))}
        </div>

        <h2>Instructor led courses</h2>
        <p>
          As well as pre-recorded courses, I also deliver instructor led
          courses, both in-person and over Zoom.
        </p>
        <p>
          I work with teams and individuals around the world and help them level
          up. Most of these are 3 day courses but can be expanded and optimised
          for your use case.
        </p>
        <p>Here are some courses that I have delivered recently:</p>
        <ul>
          <li>Node.js</li>
          <li>
            Node.js: Preparation for OpenJS Node.js Application Developer
            (JSNAD)
          </li>
          <li>Migrating to Next.js</li>
          <li>TypeScript</li>
          <li>Python for beginners</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Modern JavaScript</li>
          <li>Vue.js</li>
        </ul>
        <h2>Bespoke courses</h2>
        <p>
          I've also worked with companies to provide bespoke courses and
          tutorials for students and clients.
        </p>
        <br />
        <h3>
          If any of this sounds of interest to you, reach out and see how we can
          work together.
        </h3>
        <CourseForm />
      </div>
    </Layout>
  );
}

function RenderedCourse({ id, imageSrc, imageAlt, title, link, cta }) {
  console.log({ id, imageSrc, imageAlt, title, link, cta });
  return (
    <a href={link} target="_blank" rel="noreferrer" key={id}>
      <div class="bg-white rounded-lg shadow-lg flex flex-col">
        <Image
          src={imageSrc}
          class="rounded-t-lg mx-auto"
          style="margin:0"
          alt={imageAlt}
          width="480"
          height="480"
        />
        <div class="p-4 text-center">
          <div class="font-bold">{title}</div>
          {cta}
        </div>
      </div>
    </a>
  );
}
