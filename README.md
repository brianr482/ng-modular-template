# Ng Modular Template
I created a scalable modular Angular template oriented to MV* pattern based on what I have read about scalable project structure, sugar syntax, readable code and my experience, and using Angular CLI.

## Core module

We should place here those services we are going to use in whole the application so we just need one instance of them. Also, interceptors, interfaces and global guards should be here.

**Note**
Creating interfaces helps you to define the structure of the data you're going to be handling.

## Feat folder

Features of your application that can be grouped in modules because each of them are related should be here.
A feat module should contains the following folders: 
- components: Try to decompose the feature into different components.
- modules: this is because I think we can have submodules of our feat modules. These submodules follow the same pattern I'm describing.
- services: only those who the module will be using.
- pages: Place here those components which represent main wrappers of your module.
- guards.

## Shared module

Place here components, directives and pipes that you could use in whatever part of your application. This is in order to apply the DRY principle.

## Global aliases

I created some alias that you can use in whatever part of your application and will make your code more readable:
If you want import core module or something there you just have to type @core and it will refer the top core folder. You can do the same with shared module.

Note: I defined this in tsconfig file.

## 7-1 Sass pattern

I created a styles folder in the top of src and I applied 7-1 sass pattern into it. This make our project more scalable in terms of css styles.

Note: I defined this in angular.json file.

## Easily main sass files referencing

I defined src/styles as an extra path for sass imports checks so if you want to import some sass file of top styles folder you just have to type the path of the file relative to styles folder. For example, `@import "abstracts/variables";`.

## Demo server

Run `ng serve` and navigate to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

## Production build
Run `ng build --prod`. You will get the compiled project in the following path: `project-folder/dist/`.

**Note**:
If you are not going to deploy the project in root path `/`, you should consider adding the following flags:
  - `--base-href=your-path`
  - `--output-path=your-path`
  - `--deploy-url=your-path`

## Thanks
You can find more information related to this in the following links:
- https://sass-guidelin.es/#architecture
- https://scotch.io/tutorials/angular-shortcut-to-importing-styles-files-in-components
- https://angular.io/guide/sharing-ngmodules
- https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81
- https://angular.io/guide/ngmodule-faq#what-kinds-of-modules-should-i-have-and-how-should-i-use-them
