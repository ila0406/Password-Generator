# wk3Homework-DH
Homework repo for wk2-advanced-css 

https://ila0406.github.io/Password-Generator/

## Accessibility
Lighthouse report on accesibility
![Lighthouse](./assets/images/Lighthouse.png)

## Mock-Up 

The following images shows the mokup of the web application's appearance and functionality along with the validation checks and their subsequent failure messages. 

![mockup](./assets/images/mockup.png)
![sucess](./assets/images/Sucess.png)
![validation1](./assets/images/Validation1.png)
![validation1](./assets/images/Validation2.png)

## Acceptance Critera
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page