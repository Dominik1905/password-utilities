# Password Utilities

[cite_start]A small, useful JavaScript library that provides password utility functions[cite: 75].

## Installation

[cite_start]You can install this package using npm or yarn[cite: 76]:

**npm:**
npm install @dominik1905/password-utilities

**yarn:**
yarn add @dominik1905/password-utilities

## Usage

[cite_start]Here are detailed examples of how to use the available functions[cite: 77].

### generateStrongPassword
[cite_start]Generates a random, guaranteed strong password of the specified length (default is 12).[cite: 38].

```javascript
const { generateStrongPassword } = require('@dominik1905/password-utilities');

const password = generateStrongPassword(12);
console.log(password); // Output: e.g., "pC%mD8TpCKn2"

```

### isStrongPassword
Checks if a password meets the strength criteria. A password is considered strong if it fulfills all of the following requirements:
- Is at least 8 characters long.
- Contains at least one uppercase letter (A-Z).
- Contains at least one lowercase letter (a-z).
- Contains at least one number (0-9).
- Contains at least one special character (`!@#$%^&*()_+`).

**Example:**
```javascript
const { isStrongPassword } = require('@dein_npm_benutzername/password-utilities');

console.log(isStrongPassword("Hello World")); // Output: false
console.log(isStrongPassword("pC%mD8TpCKn2")); // Output: true

```