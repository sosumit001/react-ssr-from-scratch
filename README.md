[![Alt Text](https://img.youtube.com/vi/IPw1SxJi0Yc/0.jpg)](https://www.youtube.com/watch?v=IPw1SxJi0Yc)
# React SSR Application from Scratch

This repository will guide you through all the basic building blocks required to create a server-side rendering (SSR) application using ReactJS.

## Chapters Overview

### [Chapter 1: Initial Express Setup](https://github.com/sosumit001/react-ssr-from-scratch/tree/ch01_e)
- **Objective**: Learn to set up a basic Express server.
- **Contents**:
  - Display the text "Hello, World" on the server.
  - Introduce Nodemon for live reloading, demonstrating how to update the displayed message to "Hello, World!"

### [Chapter 2: Integrating Rollup](https://github.com/sosumit001/react-ssr-from-scratch/tree/ch02_e)
- **Objective**: Understand the role of Rollup in our SSR setup and configure it for the project.
- **Contents**:
  - Introduction to Rollup and its core functionalities.
  - Configure Rollup to compile in a Node.js environment using the CommonJS and nodeResolve plugins.
  - Discuss the importance of the `external` property to prevent the bundling of Node modules.

### [Chapter 3: Server-Side Rendering with React](https://github.com/sosumit001/react-ssr-from-scratch/tree/ch03_e)
- **Objective**: Implement server-side rendering with React.
- **Contents**:
  - Use `renderToString` to render React components on the server.
  - Transition to using JSX in our project and set up the necessary Babel configuration to make Node.js understand JSX.

## Installation

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/sosumit001/react-ssr-from-scratch.git
cd react-ssr-from-scratch
npm install
```
