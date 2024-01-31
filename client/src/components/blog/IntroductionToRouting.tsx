import React from 'react';
import {motion} from "framer-motion";

const IntroductionToRouting: React.FC = () => {
    /* routing_in_next_js */
    // @ts-ignore
    return (
      <motion.div className={`essgee-page !p-0 !mt-0 h-full !pb-[10vh]`}>

        <h1>Comprehensive Introduction to Routing in Next.js</h1>

        <p>Routing is a fundamental aspect of web development, and Next.js, a popular React framework, simplifies and enhances the routing experience for building dynamic and engaging web applications. In this comprehensive introduction, we'll explore the key concepts, features, and best practices of routing in Next.js, empowering developers to create seamless navigation experiences.
        </p>

        <h2>Understanding the Importance of Routing</h2>

        <p>Routing is the mechanism that allows users to navigate through different pages or views within a web application. It plays a crucial role in defining the structure and flow of the user interface. In traditional single-page applications (SPAs), client-side routing is the norm, where changes in the URL trigger updates to the view without a full page reload.
        </p>

        <p>Next.js takes routing to the next level by offering a file-system-based routing system that simplifies the organization of pages and makes it intuitive for developers to define routes. The framework seamlessly integrates both client-side and server-side rendering, providing benefits in terms of performance, SEO, and user experience.
        </p>

        <h2>File-System-Based Routing</h2>

        <p>Next.js introduces a unique approach to routing by leveraging the file system's structure. The 'pages' directory is at the core of this system. Each <code>.js</code> or <code>.jsx</code> file within the 'pages' directory corresponds to a route in your application. For example:
        </p>
        <br/>
        <pre>
                pages /
                <br/>
                ├── index.js
                <br/>
                ├── about.js
                <br/>
                └── contact.js
            </pre>
        <br/>
        <p>In this structure, <code>index.js</code> represents the home page, <code>about.js</code> represents the about page, and <code>contact.js</code> represents the contact page. The routes are automatically inferred from the file names.
        </p>

        <p>This file-system-based routing approach not only simplifies the development process but also enforces a consistent and easily understandable structure for your application. It eliminates the need for explicit route configurations, making it easier to maintain and scale projects.
        </p>

        <h2>Linking Between Pages with the Link Component</h2>

        <p>Next.js provides the <code>Link</code> component to enable client-side navigation between pages. This component enhances user experience by allowing for smoother transitions between views without triggering a full page reload. Here's a basic example:
        </p>
        <br/>
        <pre>
                import Link from 'next/link'
                <br/>

          &lt;nav&gt;
          <br/>
          &nbsp;&nbsp;&lt;Link to="/"&lt;Home&gt;/Link&gt;
          <br/>
          &nbsp;&nbsp;&lt;Link to="/about"&lt;About&gt;/Link&gt;
          <br/>
          &nbsp;&nbsp;&lt;Link to="/contact"&lt;Contact&gt;/Link&gt;
          <br/>
          &lt;/nav&gt;
            </pre>

        <br/>
        <p>Clicking on these links navigates the user to the respective pages, and Next.js takes care of the underlying client-side routing.
        </p>

        <h2>Dynamic Routing</h2>

        <p>Next.js supports dynamic routing, allowing developers to create pages with dynamic parameters. This is especially useful for scenarios where pages depend on dynamic data or variables. Dynamic routing is achieved by using square brackets <code>[]</code> inside the 'pages' directory. For example:
        </p>
        <br/>
        <pre>
                pages /
                <br/>
                ├── posts/
                <br/>
                │ ├── [id].js
            </pre>

        <br/>
        <p>In this structure, <code>[id].js</code> will match paths like <code>/posts/1</code>, <code>/posts/2</code>, and so on. The value of <code>id</code> can be accessed within the component using Next.js's <code>useRouter</code> hook or <code>context</code> object.
        </p>

        <p>Dynamic routing enables the creation of flexible and data-driven pages, providing a powerful tool for building a wide range of applications.
        </p>


        <h2>Programmatic Navigation</h2>

        <p>Next.js allows for programmatic navigation, enabling developers to navigate between pages based on user interactions or other events. The <code>router</code> object, provided by the <code>next/router</code> module, exposes methods for programmatic navigation.
        </p>

        <br/>
        <pre>
                <br/>
                import &#x2774;useRouter&#x2775; from 'next/router';
                <br/>

                const NavigationButton = () =&gt; &#x2774;
          <br/>
          &nbsp;&nbsp;const router = useRouter();

                <br/>&nbsp;&nbsp;const handleClick = () =&gt; &#x2774;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;router.push('/about')
                <br/>&nbsp;&nbsp;&#x2775;;
                <br/>

          &nbsp;&nbsp;return &#x276A;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#x2774;handleClick&#x2775;&gt;Go to About
                Page&lt;/button&gt;
          <br/>
          &nbsp;&nbsp;&#x276B;
          <br/>
          &#x2775;
            </pre>

        <br/>
        <p>Using the <code>push</code> method from the <code>router</code> object, you can navigate to different pages programmatically, giving you fine-grained control over the navigation flow.
        </p>

        <h2>Conclusion</h2>

        <p>Routing in Next.js is a seamless and powerful feature that significantly contributes to the framework's ease of use and developer experience. The file-system-based routing, dynamic routing, and programmatic navigation capabilities make it a versatile tool for building modern web applications. As you continue to explore Next.js, mastering its routing system will empower you to create dynamic, user-friendly, and performant web applications.
        </p>


      </motion.div>
    )
      ;
};

export default IntroductionToRouting;
