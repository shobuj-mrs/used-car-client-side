import React from 'react';


const Blogs = () => {
    return (
        <div>
            <div className=" my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl ">
                    <span className="text-sm dark:text-gray-400">November 24, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-purple-500'>1. What are the different ways to manage a state in a React application?</h1>
                        <p className="mt-2">In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.</p>

                        <p className="mt-2">The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.</p>

                        <p className="mt-2">But thanks to state, React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.</p>

                        <p className="mt-2">It's important to mention that not all components in a React app must have state. There are stateless components as well which just render its content without the need to store any information, and that's just fine.</p>

                        <p className="mt-2">In order to implement state in our components, React provides us with a hook called useState. Let's see how it works with the following example.

                            We'll use the classic counter example, in which we're displaying a number and we have several buttons to increase, decrease, or reset that number.

                            This is a good example of an app where we need to store a piece of information and render something different every time that information changes.</p>
                    </div>
                </div>
            </div>
            <div className=" my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl ">
                    <span className="text-sm dark:text-gray-400">November 24, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-purple-500'>2. How does prototypical inheritance work?</h1>
                        <p className="mt-2">Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                        <p className="mt-2">JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>

                        <p className="mt-2">Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.</p>

                        <p className="mt-2">JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding). When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.</p>

                    </div>
                </div>
            </div>
            <div className=" my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl ">
                    <span className="text-sm dark:text-gray-400">November 24, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-purple-500'>3. What is a unit test? Why should we write unit tests?</h1>
                        <p className="mt-2"> <span className='text-2xl font-bold'>Unit Test : </span> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>

                        <p className="mt-2">  <span className='text-2xl font-bold'>Unit Test Work : </span>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base</p>

                        <p className="mt-2">Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.</p>
                        <h1 className='text-2xl font-semibold'>Advantages and disadvantages of unit testing
                        </h1>
                        <p className="mt-2">
                            1.The earlier a problem is identified, the fewer compound errors occur. <br />
                            2.Costs of fixing a problem early can quickly outweigh the cost of fixing it later. <br />
                            3.Debugging processes are made easier. <br />
                            4.Developers can quickly make changes to the code base. <br />
                            5.Developers can also re-use code, migrating it to new projects.</p> <br />

                    </div>
                </div>
            </div>
            <div className=" my-3">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl ">
                    <span className="text-sm dark:text-gray-400">November 24, 2022</span>
                    <div className="mt-3">
                        <h1 className='text-4xl font-semibold text-purple-500'>4.What is the difference of React vs. Angular vs. Vue?</h1>
                        <h3 className='text-2xl mt-2 font-semibold '>Angular :</h3>
                        <p >Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name  AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>

                        <h3 className='text-2xl mt-2 font-semibold '>React :</h3>
                        <p className="mt-2">React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices. React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>

                        <h3 className='text-2xl mt-2 font-semibold '>Vue :</h3>
                        <p className="mt-2"> Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;