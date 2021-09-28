# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start





### Notes for AspireIQ:

If I had more time to devote, the changes I would include are:
-Using Font Awesome or another icon library to provide exclamation point and times icons on the badges
-Add a debounce function so we are only "calling" for email suggestions if the user pauses in typing, instead of with every character change
-Filtering out emails from the dropdown if they are already entered as an email
-Adding an autofocus so if you click anywhere in the input, your cursor is ready and you are able to type directly into the input (right
now you have to click near the left hand side). I attempted to implement this already, and stopped because problem solving was taking too
much time, though I did leave in the code that seems like it *should* make this work to show the strategy I used
-Allowing the user the ability to use arrows to take the cursor left into the badges (IE, arrowing left and then being able to delete
badges with the backspace, without using a mouse)
