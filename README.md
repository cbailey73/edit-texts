# JATE - Just Another Text Editor

JATE is a Progressive Web App (PWA) that serves as a simple text editor accessible both online and offline. It provides a straightforward interface for editing text files and can be installed as a standalone application on your device.

## Usage

### Prerequisites

Before getting started with JATE, make sure you have Node.js installed on your system.

### Installation

1. Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/JATE.git
   cd JATE
   ```

2. Install the dependencies for the server:

   ```bash
   cd server
   npm install
   ```

3. Install the dependencies for the client:

   ```bash
   cd ../client
   npm install
   ```

### Starting the Development Environment

To run JATE in a development environment with live reloading, follow these steps:

1. Start the server:

   ```bash
   cd ../server
   npm run server
   ```

2. In a separate terminal, start the client development server:

   ```bash
   cd ../client
   npm run dev
   ```

   This will launch the development server, and you can access JATE by opening your browser and navigating to `http://localhost:3000`.

### Building for Production

To build JATE for production deployment, use the following command in the client directory:

```bash
cd ../client
npm run build
```

This will generate optimized production-ready files in the `dist` directory.

### Running the Production Server

To run JATE in a production environment, follow these steps:

1. Build the client as described above.

2. Start the server:

   ```bash
   cd ../server
   npm start
   ```

   Your JATE PWA will be accessible at `http://localhost:3000`.

## License
This project is not protected under any license.

## Credits
The starter code for this project was cloned from: https://github.com/coding-boot-camp/cautious-meme

The code that prompts the user to install the PWA was obtained from this tutorial: https://web.dev/learn/pwa/installation-prompt/




