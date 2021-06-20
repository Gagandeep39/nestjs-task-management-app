# Task Management App

- [Task Management App](#task-management-app)
  - [Steps to run](#steps-to-run)
  - [Important Commands](#important-commands)
  - [Notes](#notes)
    - [Modules](#modules)
    - [Decoraters](#decoraters)
    - [Providers](#providers)
    - [Services](#services)
    - [Pipes](#pipes)

## Steps to run

1. Lauch Database using Docker
   - Run in root directory `docker compose up`
2. Install dependencies using `install:package`
3. Run server code using `start:server`
4. Run client code using `start:client`

## Important Commands

- `npx @nestjs/cli new nestjs-task-management .` Create project using nest cli
- `nest g module tasks` Create a NestJS module
- `nest g controller tasks --no-spec` Create a controller without spec

## Notes

### Modules

- Each App has atleast one module
- Orgaize compnents based on closely related properties
- Good practice to have folder containing component for each module
- Defined using `@Module`

### Decoraters

- Typescript feature to add extra functionality to class
- eg. `@Controller`, `@Module`

### Providers

- Allows injecting that class in contructor if it has `@Injectable` annotation
- Can be a plain value, clas or sync, async fctory
- **Must** be defined in Proviers array of @module

### Services

- A form of providers
- All services are provider but vice versa is not true
- By default they are singleton
- Main source of bussiness logic

### Pipes

- Operates on router handler before being procesed by router
- Used for data trasformation or data validation
- Can be used to throw error which will be handled by Nestjs
- Can be async
- Inbuilt pipe: `ValidationPipe` - Used for data validation, `ParseIntPipe` - Check if number is an intege
- Implements `PipeTransform` class and created with `@Injectable` decorator
- Parameter level pipe - Aplied on parameters
- Global Pipes - Applied to all incoming request
- Create better pipes using `class-validator`, `class-transformer`
