# Spring Documentation Easy Search README

This README file is for the "SpringWing" extension, a tool designed to streamline the development process for those working with Spring and Spring Boot. This extension provides seamless access to relevant documentation and includes a range of useful snippets for efficient coding.

## Features

### 1. Quick Access to Spring Documentation:

- **Direct Access**: Open the Spring Framework documentation directly from VSCode.
- **Ease of Learning**: Simplify the referencing and learning process for Spring components.

### 2. Comprehensive Snippets Library:

- **Wide Range of Snippets**: Snippets for creating various Spring components such as Controllers, Services, Repositories, and more.
- **Boost Productivity**: Pre-defined code templates to speed up your development workflow.

### Snippets Usage:

The table below summarizes the available snippets and their usage:

| Snippet Command    | Description                                  | Usage Example                  |
| ------------------ | -------------------------------------------- | ------------------------------ |
| `springcontroller` | Create a new Spring controller               | `@RestController` ...          |
| `jparepo`          | Create a new Spring Data JPA repository      | `@Repository` ...              |
| `crudrepo`         | Create a new Spring Data CRUD repository     | `@Repository` ...              |
| `pagingrepo`       | Create a Spring Data Paging repository       | `public interface ...`         |
| `springservice`    | Create a new Spring Service                  | `@Service` ...                 |
| `servicemethod`    | Create a new service method                  | `public ReturnType methodName` |
| `springexception`  | Create a new Spring exception class          | `@ResponseStatus` ...          |
| `springdto`        | Create a new Data Transfer Object (DTO)      | `public class MyDTO` ...       |
| `springconfig`     | Create a new Spring Configuration class      | `@Configuration` ...           |
| `springentity`     | Create a new Spring entity class             | `@Entity` ...                  |
| `springprop`       | Add a new property in Spring properties file | `${1:key}=${2:value}`          |

### Custom File Creation Commands:

These commands facilitate the creation of specific Java files for your Spring project:

- **Create Entity Class**: Command `Create Entity Class` creates a new entity class with basic annotations.
- **Create Repository Interface**: Command `Create Repository Interface` sets up a new repository interface extending `JpaRepository`.
- **Create Controller Class**: Command `Create Controller Class` for initializing a new controller class.
- **Create Service Class**: Command `Create Service Class` allows for the quick creation of a service class.

### Documentation Shortcut:

To access the documentation, use the shortcut `Shift + Command + P` and then type `Spring Search`.
