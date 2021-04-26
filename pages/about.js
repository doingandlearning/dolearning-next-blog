import Layout from "@components/Layout";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Layout pageTitle="Kevin Cunningham (@dolearning)" description="Homepage">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">

        <h1>About Kevin Cunningham</h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="text-2xl px-4 md:mt-0 mt-8">I'm a web development consultant and educator working with people around the world from the shed in my garden in Brighton, UK.</div>
          <Image src="/face.svg" height="350" width="350" />
        </div>
        <div>
          <p>
            I started coding at 8 on my Spectrum 128k and have been attached to a computer ever since.
          </p>
          <p>
            As a secondary school Maths teacher, I spent a decade making complex topics accessible. I used code to help my students in their learning and to speed up my own administration tasks.
          </p>
          <p>
            Along with my business partner, Martin, and <a href="https://spin-up.io">team at SpinUp</a> I now help businesses and individuals test their digital product ideas with customers and investors.
          </p>
          <p>
            I write and produce written and video content to help developers continually level up and not get stuck in "tutorial hell".
          </p>
          <p>
            I run online workshops and training to allow teams and individuals to rapidly upskill in new frameworks and approaches.
          </p>
        </div>
        <div>
          PROBABLY NEED SOME MORE CONTENT ABOUT ME AND HOW I CAN BE HELPFUL
        </div>
        <h2>Podcasts and Interviews With Me</h2>
        <ul>
          <li>
            <a href="https://makelifeworkpodcast.com/kevin-cunningham/">
              Make Life Work with Kevin Cunningham
            </a>
          </li>
          <li>
            <a href="https://landingintech.com/episodes/ep5-kevin-cunningham-from-maths-to-fullstack/">
              From teaching math to becoming a fullstack developer
            </a>
          </li>
          <li>
            <a href="https://learnetto.com/blog/kevin-cunningham-headless-wordpress">
              Interview with Kevin Cunningham on software development, teaching and headless WordPress
            </a>
          </li>
          <li>
            <a href="https://egghead-io-course-notes.simplecast.com/episodes/wordpress-as-a-headless-content-management-system-cms-and-graphql-api-with-kevin-cunningham?share=true">
              WordPress as a Headless Content Management System (CMS) and GraphQL API with Kevin Cunningham
            </a>
          </li>
        </ul>
        <em>I'm happy to appear on all relevant podcasts!</em>
      </div>
    </Layout>
  );
}