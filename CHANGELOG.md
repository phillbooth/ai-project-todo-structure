# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-01-03

### Added
- A new logical validation script (`scripts/validate-logic.js`) to detect complex issues like duplicate IDs, broken dependencies, and dependency conflicts. This script is now part of the `npm test` suite.
- Documentation for the full validation process in `README.md`.

### Changed
- Enhanced the logical validation script to detect more advanced issues, including circular dependencies and illogical task statuses (e.g., an active task in the backlog).

## [1.1.0] - 2025-01-02

### Added
- `CHANGELOG.md` to track project versions.
- `CODE_OF_CONDUCT.md` to foster a welcoming community.
- `.github` templates for issues and pull requests to streamline contributions.
- `.nvmrc` and `engines` field in `package.json` to enforce Node.js version.
- `.gitignore` to exclude unnecessary files from version control.
- `jsonlint` and a `lint` script for ensuring JSON files have valid syntax.
- `ajv-cli` and a `validate:schema` script to validate the template against the JSON Schema.

## [1.0.0] - 2025-01-01

### Added

- Initial release of `@phillipbooth/ai-project-todo-structure`.
- `templates/todo.json`: The core template for defining a structured to-do list.
- `todo.schema.json`: JSON Schema for validation and autocompletion of `todo.json` files.
- `README.md`, `LICENSE.md`, `CONTRIBUTING.md`, and `CODE_OF_CONDUCT.md` for project documentation and community standards.
- GitHub issue and pull request templates.
- Programmatic access to the template path via `index.js`.
