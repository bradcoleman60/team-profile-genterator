# team-profile-genterator

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)


# **Description**

The goal of this project was to create a ReadMe.md generator using Node.js and the command line. This was my first project using Node.js and no html or css.   This required the use of a NPM package - inquirer.  Additionally, I used an additional NPM package - inquirer-loop which allowed me to loop my questions depending on user input.  

This project is executed solely in the command line interface so no HTML or CSS was used.  The ultimate output is a readme file.  

Below is a screen shot of the command line interface at the completion of the questions. 

![screenshot](screenshot.jpg)


Link to Demonstration Video of how this Generator Works:

https://app.vidcast.io/share/c6d1a746-76c3-4a06-bc24-f510ae42cf43

# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  This highlights the use the Node inquirer package.  

This code handles the object array of all the answers that are asked in the command line.  Most notable is the use of object destructuring that occurs on the 5th line of the code below.  This is an short way of being able to reference the values by their variable names instead of the lengthier method of using dot notation.    

```


```
The following code is how I ensured that a valid email address was input into the email prompt. 

```


```
Lastly, I used a plug in to add for question looping.  This is the syntax that allows for looping questions.  In this instance, I wanted to ensure that the user could input as main installation steps as needed.  After an installation step is entered, the user is asked if they want to enter another step.  If so, the prompt to enter another step is rendered.  If not, the questions are ended.  

```

```



# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input   |**Completed**.  The     |
|2. WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address   |**Completed**.  The     |
|3. WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab   |**Completed**.  The     |
|4. WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number   |**Completed**.  The     |
|5. WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team   |**Completed**.  The     |
|6. WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu    |**Completed**.  The    |
|7. WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu   |**Completed**.  The     |
|8.WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated   |**Completed**.  The    |


# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> | [https://api.jquery.com/](https://api.jquery.com/) |

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```