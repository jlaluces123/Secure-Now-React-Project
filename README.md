# Secure-Now-React-Project

## Getting Started

To get started run:

```
yarn (to download dependencies used)
yarn start (to start application)
```

---

## Task 1. Pulling Down JSON Data

As was given from the task document, I put the JSON data into the **data** folder.

In order to pull down the JSON data for use inside the application, I decided to pull the data via import:

![Screenshot of Data Import](https://perizazy.sirv.com/Secure%20Now%20Work/Import_Data.png)

---

## Task 2. Creating the Quiz Page / Features

To save codebase space, I created **Quiz.js**. In this component, it handles all the state:

```
1. Score
2. Current Question Number
3. Complete (to determine if the user completed the quiz)
4. Incorrect (to keep track of all incorrect questions)
```

---

### Selecting Answers / Score Tracking

In order to track the answers, I added an `onClick` attribute to the button elements which are the options you can pick from to answer a question.

![Screenshot of Handle Click Helper Function](https://perizazy.sirv.com/Secure%20Now%20Work/Handle_Click_Quiz.png)

---

### Handle Click Function

Takes two parameters: `isTrue` and `questionNum`

-   `isTrue`: Using the `.is_true` data given from the JSON data, I use it to determine if the answer clicked was correct or incorrect.

If correct, I increment the score by 1 and if incorrect I update the incorrect array with the question's number to be used later in the `Results component`

-   `questionNum`: Using the `currentQuestion` from state to be passed in, the number is then put into the incorrect array if `isTrue = false`

---

## Task 3. Showing Results & Score

To reduce the number of pages, I decided to conditionally render the `Results` component inside `Quiz.js`:

![Screenshot of Conditional Render](https://perizazy.sirv.com/Secure%20Now%20Work/Conditional_Render.png)

The `complete` state is set to true inside the Handle Click function once there are no questions left in the quiz.

---

### Giving Feedback

In order to give feedback, I map through all the questions and return a `<li>` element that displays the `.feedback_false` data given from the JSON file corresponding to its question.

On the opposite end, I return a different `<li>` that displays the `.feedback_true` data if the user didn't get the question wrong.

The program determines if the user didn't get the question wrong by checking if the incorrect array doesn't contain the index of the question:

![Screenshot of the feedback rendering](https://perizazy.sirv.com/Secure%20Now%20Work/Question_Feedback.png)

---

## Small Things

The quiz also has other features such as:

```
1. The ability to go back to the home page during the quiz
2. Ability to retake the quiz
3. Showing a score out of 3 (dynamically)
```
