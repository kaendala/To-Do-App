# TO-DO-APP

It is an application that allows you to create tasks and move them to completed when you consider it necessary.

- Currently it has a **Home** screen in which you can see your pending and completed tasks.
- Also it has an **Add task** screen in which you can create your tasks with their title, end date, date and time.
  with its title, end date, start and end time, reminder and its repetition,
  the only mandatory option in this screen is the title

## Prerequisites

- Install [NodeJs]
- Install Expo-cli npm install -g expo-cli

## How to use To-do-app

1. Clone the repository
   `git clone https://github.com/kaendala/To-Do-App.git `

2. Enter the repository folder

3. Run command
   `npm i`

4. Run command
   ` npm start`

5. Connect your cell phone to the computer to run the application or have a simulator on the PC (if you do it through the cell phone you must activate the developer mode, activate the usb debbuggin and allow the file transfer)

6. Click on Run on Andoid device/emulator or Run on IOS simulator as the case may be.

7. Allow the installation of Expo

[nodejs]: https://nodejs.org/es/

## Plugins and Libraries

- `@react-native-async-storage` Allows to store information in the phone
- `@react-native-community/datetimepicker` Allows to use dataTimePicker
- `@react-navigation/native` Allows to perform navigation within the app
- `redux` Allows to interact with data at runtime

## Scaling

If we want to make the app for thousands of users we must take into account the persistence of the information if the person changes phone, so we should store the information in our own database, Implement an architecture based on microservices to improve the performance and the performance of our application.
