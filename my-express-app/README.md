# My Express App

This project is a simple Express server application that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-express-app
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:
```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the application using Docker, you can use the following commands:

1. Build the Docker image:
   ```
   docker build -t my-express-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 my-express-app
   ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.