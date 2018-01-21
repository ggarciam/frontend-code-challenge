# FrontendCodeChallenge - Gonzalo Garcia

## The Task

The programming challenge exists in 2 parts:
* Part A: HTML + CSS
* Part B: Javascript

With a layout based on the following screen:
![Screen](https://raw.githubusercontent.com/mcmakler/frontend-code-challenge/master/assets/fe_test_example_screen.png)

The build version of my solution can be seen in the following url: [https://ggarciam.github.io/](https://ggarciam.github.io/)

## General aspects
* I decide to use Angular 5 as framework because it is ES6 compliant, as per one of the bonus points suggested, and because it is a really powerful tool to be work with SPAs oriented to be fed by a RESTful service. I'm also very familiar as it is the framework I'm using in my day-to-day work.

* CORS: When I was trying to reach the API, I found the usual CORS problem being not able to retrieve the data. My first option was to create a local copy of the data, but then I tried to install the small nodejs framework [cors-anywhere](https://www.npmjs.com/package/cors-anywhere) in a heroku instance. To my surprise someone has already done this and I'm using it. I'm retrieving the data through [cors-anywhere](https://cors-anywhere.herokuapp.com/).
For a big project I wouldn't rely in third party content, as it is out of the team's control, but for this test I consider it can be enough and bypass the CORS problematic. As in a normal project the server side will be handled also by the company, CORS wouldn't be a problem.

## HTML and CSS 
* HTML is generated through the different components in the app. I based my solution in the live version of the McMakler website, that's the only special thing in this case.

* To process CSS styles I decided to use SASS, as it has lots of advantages: fewer requests using @imports, reusability, modularity and scalability.
I take advantage of it by creating global variables (sizes, colors) and applying them to the different components. Nesting is also visible in all the components.

And in order to apply a Material Design I considered a couple options: Materialize and Angular Material. I decided for the second one basically for two reasons: Materialize needs jQuery as a framework to work and I didn't want to add another framework. And the second one is that Angular Material is well thought to work directly with Angular 5, so it makes the best companion.
This said, the Angular Material library is bigger than Materialize, so this could be a down point. A solution would be to implement in the app only the elements that are going to be used instead of the whole library.

## Javascript
Using Angular 5 allows me to modularize the different components in the app, creating two basic one: the advertisement itself and the exposé (group of advertisements).

I created also two services to manage the flow of information:
* Globals: Manages basically the API url and the number of ads visible
* Advertisements: Gets the advertisements from the API and returns them to be used in the components.

## Additional considerations
* Tests: Both unit tests and end-to-end tests have been implemented, with focus on unit tests for the components and services. To run the tests, please follow the instructions in the section below.
* Linters: In Angular-CLI are included automatically linters for the code, another reason to be using this kind of framework.

## Technical details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Also run `ng build` to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

For unit tests, run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

For end-to-end tests, run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
