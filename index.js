// index.js
// This file serves as the main entry point for the @phillipbooth/ai-project-todo-structure NPM package.
// It allows programmatic access to the template file path.

/**
 * Provides the path to the todo.json template.
 * @returns {string} The absolute path to the template file.
 */
function getTemplatePath() {
    const path = require('path');
    return path.join(__dirname, 'templates', 'todo.json');
}

// Export the function to allow users to programmatically find the template
module.exports = {
    getTemplatePath
};
