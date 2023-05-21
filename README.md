# SpaceX Launch Viewer
This is a React application that allows users to view information about past and upcoming launches by SpaceX. The application utilizes the SpaceX API to fetch data and display it in a user-friendly manner.

## Prerequisites
Before running the application, ensure the following prerequisites are met:

* Node.js: Install Node.js on your machine. You can download it from the official Node.js website: https://nodejs.org
* [SpaceX API](https://github.com/thisIsRasel/spacex-launch-viewer-server.git): Make sure the server application is up & running because this will use the endpoints from the server api project.

## Installation
To run the application locally, follow these steps:

Clone the repository:
```shell
git clone https://github.com/thisIsRasel/spacex-launch-viewer-client.git
```

Change into the project directory:
```cmd
cd spacex-launch-viewer-client
```

Install the dependencies using npm:
```
npm install
```

Start the development server:
```
npm start
```

Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage
The application allows users to view information about past and upcoming launches conducted by SpaceX.

### Past Launches
The past launches section displays a list of all previous SpaceX launches. Each launch item provides details such as the mission name, launch date, rocket name, and links to additional resources.

### Upcoming Launches
The upcoming launches section displays a list of all upcoming SpaceX launches. Similar to past launches, each item provides details about the upcoming mission, including the launch date, rocket name, and links to additional resources.

## Technologies Used
* React: JavaScript library for building user interfaces.
* reactstrap: React component library for bootstrap for consistent styles.
* React Router: Library for handling routing within the React application.
* Moment: For time / date conversion

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the project's GitHub repository.

## License
This project is licensed under the MIT License.