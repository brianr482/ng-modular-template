# Ng Modular Template
I created a scalable modular Angular template oriented to MV* pattern based on what I have read about scalable project structure, sugar syntax, readable code and my experience.

## Core module

We should place here those services we are using in whole the application so we just need one instance of them. Also, interceptors and general models should be here.

## Feat folder

Features of your application that can be grouped in modules because each of them are related should be here.
A feat module should contains the following folders: 
- components.
- modules: this is because I thinkg can have submodules of our feat modules. They follow the same pattern I'm describing.
- services: only those who this will be using.
- interfaces: create interfaces help you to define the structure of the data you're going to be handling.
- pages: Place here those components which represent main wrappers of your module.
- guards.

## Shared module

Place here components, directives and pipes that you could use in whatever part of your application. This is in order to apply the DRY principle.

## Global aliases

I created some alias that you can use in whatever part of your application and will make your code more readable:
If you want import core module or something there you just have to type @core and it will refer to the top core folder. You can do the same with shared module.

Note: I defined this in tsconfig file.

## 7-1 Sass pattern

I created a styles folder in the top of src and I applied 7-1 sass pattern into it. This make our project more scalable in terms of css styles.

## Easily main sass files referencing

I defined src/styles as an extra path for sass imports checks so if you want to import some sass file of top styles folder you just have to type the path of the file relative to styles folder. For example, `@import "abstracts/variables";`.

## Demo server

Run `ng serve` and navigate to `http://localhost:4200/`.

## Thanks
You can find more information related to this in the following links:
- https://sass-guidelin.es/#architecture
- https://scotch.io/tutorials/angular-shortcut-to-importing-styles-files-in-components
- https://angular.io/guide/sharing-ngmodules
- https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81
