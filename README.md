# Task Management App

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
