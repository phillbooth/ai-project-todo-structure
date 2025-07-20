# @phillipbooth/ai-project-todo-structure

[![NPM version](https://img.shields.io/npm/v/@phillipbooth/ai-project-todo-structure.svg)](https://www.npmjs.com/package/@phillipbooth/ai-project-todo-structure)
[![Changelog](https://img.shields.io/badge/changelog-v1.2.0-blue)](https://github.com/phillipbooth/ai-project-todo-structure/blob/main/CHANGELOG.md)
[![License](https://img.shields.io/npm/l/@phillipbooth/ai-project-todo-structure.svg)](https://github.com/phillipbooth/ai-project-todo-structure/blob/main/LICENSE.md)

A structured, machine-readable to-do framework for AI-assisted projects.

This package provides a standardized format (`todo.json`) for defining project tasks, their status, and dependencies. It is designed to be used with the `@phillipbooth/ai-project-readme-structure` package, enabling AI to programmatically understand and manage your project's workflow.

## Overview

The core of this package is the `todo.json` file format, a standard for tracking project tasks in a way that is both human-readable and machine-parseable.

### Purpose for AI

This framework allows an AI to:
- **Track Progress:** Understand which tasks are `done`, `in_progress`, or `not_started`.
- **Manage Dependencies:** Identify which tasks are `blocked` and why.
- **Prioritize:** Focus on high-priority tasks first.
- **Understand Scope:** Get a clear, structured view of current work and the backlog.

## How to Use

This framework is designed to be used as a component of a larger AI-assisted project.

1.  **Set up your AI-readable documentation:** We recommend starting with the `@phillipbooth/ai-project-readme-structure` package to set up your core project requirements in an `.ai/` directory.

2.  **Add the `todo.json` template:** Install this package as a dev dependency:
    ```bash
    npm install --save-dev @phillipbooth/ai-project-todo-structure
    ```

3.  **Copy the template:** Copy the `todo.json` template from this package into your project's `.ai/` directory.

    **For Linux/macOS:**
    ```bash
    cp node_modules/@phillipbooth/ai-project-todo-structure/templates/todo.json .ai/
    ```

    **For Windows (Command Prompt):**
    ```cmd
    copy node_modules\\@phillipbooth\\ai-project-todo-structure\\templates\\todo.json .ai\\
    ```

4.  **Keep it updated:** Regularly update your `.ai/todo.json` file as you work on the project.

## Schema Validation & Autocompletion

This package includes a `todo.schema.json` file to provide validation and autocompletion in supported code editors (like VS Code).

By including the `$schema` key in your `todo.json` file, your editor can:
-   Validate the structure of your file.
-   Provide autocompletion for fields like `status`.
-   Show descriptions for each field when you hover over it.

The template provided in this package already includes this key:

```json
"$schema": "https://raw.githubusercontent.com/phillipbooth/ai-project-todo-structure/main/todo.schema.json"
```

## The `todo.json` Schema

The framework is built around a single, comprehensive `todo.json` file. Here is an overview of the key fields:

| Field             | Type         | Description                                                      |
|-------------------|--------------|------------------------------------------------------------------|
| `project_status`  | string       | High-level project state (e.g., "in_progress", "planning", "done").|
| `project_summary` | string       | A one-sentence summary of the project's goal.                    |
| `last_updated`    | string       | ISO 8601 timestamp of the last update.                           |
| `tasks`           | array        | An array of current, actionable project tasks.                   |
| `backlog`         | array        | An array of future tasks, ideas, or epics.                       |
| `task.id`         | string       | A unique ID for the task (e.g., "T-01", "F-123").                |
| `task.title`      | string       | A short, descriptive title for the task.                         |
| `task.description`| string       | A more detailed explanation of what needs to be done.            |
| `task.status`     | string       | The task's current state (e.g., `not_started`, `in_progress`, `done`, `blocked`). |
| `task.priority`   | number       | A numerical value for priority (e.g., 1=High, 2=Medium, 3=Low).  |
| `task.assigned_to`| string       | Who is responsible (`human` or `ai`).                           |
| `task.dependencies`| array       | An array of task `id`s that must be completed first.            |

### Example `todo.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/phillipbooth/ai-project-todo-structure/main/todo.schema.json",
  "project_status": "in_progress",
  "project_summary": "A fast, offline-first task management application.",
  "last_updated": "2025-07-20T08:30:00Z",
  "tasks": [
    {
      "id": "T-01",
      "title": "Set up server-side routing",
      "description": "Create the Express router and a basic /api endpoint.",
      "status": "in_progress",
      "priority": 1,
      "assigned_to": "human",
      "dependencies": []
    },
    {
      "id": "T-02",
      "title": "Connect to database",
      "description": "Establish a connection to the MongoDB database.",
      "status": "not_started",
      "priority": 1,
      "assigned_to": "human",
      "dependencies": []
    },
    {
      "id": "T-03",
      "title": "Create task model",
      "description": "Define the Mongoose schema for the task object.",
      "status": "not_started",
      "priority": 2,
      "assigned_to": "ai",
      "dependencies": ["T-02"]
    }
  ],
  "backlog": [
    {
      "id": "B-01",
      "title": "Add user authentication",
      "description": "Implement a full user registration and login flow.",
      "status": "idea",
      "priority": 3,
      "assigned_to": "human",
      "dependencies": []
    }
  ]
}
