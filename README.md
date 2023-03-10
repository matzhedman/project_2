# TIC TAC TOE
Classicals never grow old! This is the game "TIC TAC TOE" - a fun easy going, quite addictive, game for all ages. Challenge a friend and find the right strategies to become the winner! Good luck!

This game is built mainly on JavaScript. It's responsive and interactive. 

![Responsive view all screens](/assets/images/pp2_responsive.png)
Link to live page, click [here!](https://matzhedman.github.io/project_2/)


# Features

### Existing features
#### Landing page
* The first page gives a clear view of the game:
    * Three (3) buttons is shown
        * "Instructions"
        * "Play again"
        * "Reset game"
    * A 3 x 3 board with tiles that are clickable.
    * A message of who is starting the game (Player X).
    * Scoreboard that keeps count of Winnings and Ties.

![Full view](/assets/images/pp2_full_view.png)
#### Heading
* The heading tells the viewer what the name of the game is, and for those who are not familiar with the game they can check the game instructions by tapping "Instructions".

![Heading](/assets/images/pp2_header.png)

#### Button for game instructions
* By tapping the button "Instructions" a modal window will open.

![Button for game instructions](/assets/images/pp2_instruction_button.png)

#### Game instructions
* The modal window opens at the top of the page.
* The landing page will appear in the back, and get a bit fuzzy to make the instruction message more clear.

![Game instructions full view](/assets/images/pp2_modal_fullscreen.png)

* The game instruction message contains of seven (7) short instructions in a list that tells the players: 
    * how to begin by put a mark in any of the tiles. 
    * the winning condition (three tiles of the same figure in a row).
    * how to Play again and how to Reset the game.

![Game instructions message](/assets/images/pp2_modal_message.png)

* The Instruction window can be closed by tapping the "X" in the right upper corner, or by tapping anywhere outside the Instruction window.

![Game instruction close button](/assets/images/pp2_modal_close_button.png)

#### Scoreboard
* Above the board you'll find a Scoreboard that keeps the score of both Player X and Player O, but also if it's a Tie.

![Scoreboard](/assets/images/pp2_scoreboard.png)

#### The board
* A 3 x 3 board that will be blank when the page is loaded the first time.

![The board](/assets/images/pp2_blank_tiles.png)

#### Buttons
* Two main buttons underneath the Board, with different functions such as:
    * "PLAY AGAIN" will clear the board, but keep the score.
    * "RESET GAME" will both clear the board and reset the score.

![Buttons](/assets/images/pp2_buttons.png)



### Features left to implement
* A feature of switching Player X/Player O to start the game.
* The option of play against the computer.


## The Game
* The game starts with blank tiles, and Player X begins (always)

![The board](/assets/images/pp2_blank_tiles.png)

* Player X marks any of the blank tiles, it switches to Player O's turn.

![Second move](/assets/images/pp2_second_move.png)
* It continues with Player X

![Third move](/assets/images/pp2_third_move.png)

* The moment when someone gets three in a row, the Board will lock and it's not possible to mark any tiles until "PLAY AGAIN" or "RESET GAME" are tapped.

![Player X wins](/assets/images/pp2_x_wins.png)

### Winning conditions
In this game with 3 x 3 tiles, there is Eight (8) different winning conditions
* [ 1 , 2 , 3 ]
* [ 4 , 5 , 6 ]
* [ 7 , 8 , 9 ]
* [ 1 , 4 , 7 ]
* [ 2 , 5 , 8 ]
* [ 3 , 6 , 9 ]
* [ 1 , 5 , 9 ]
* [ 3 , 5 , 7 ]

#### Examples of three scenarios
* Player X wins

![Player X wins](/assets/images/pp2_x_wins.png)

* Player O wins

![Player O wins](/assets/images/pp2_o_win.png)

* Tie!

![Tie](/assets/images/pp2_tie.png)

#### 404 page
* If there is a problem with the landing page, it will direct the user to a 404 page.
* A button is added below to easily navigate back to landing page to try again.

![404](/assets/images/pp2_404.png)

#### Favicon
* A favicon has been added to the header, it makes it easy for the user to distinguish this website from others if several tabs are open.

![favicon](/assets/images/pp2_favicon.png)

# Testing
### TESTING SITE RESPONSIVENESS
#### All pages were tested to ensure responsiveness on screen sizes from 320px and upwards.
#### The following steps was taken:
1. Open browser and navigate to the game, link [here!](https://matzhedman.github.io/project_2/.
2. Right click and open dev tools.
3. Set the screen size to 320px.
4. Choose "Responsive" in dimensions, and set the zoom at 50%.
5. Drag and increase the screen width up to maximum of 3258px (using iMac 21.5").

* It has been tested on: 
    * Chrome - MacBook Air 13", iMac 21.5" 
    * Safari - MacBook Air 13", iMac 21.5"
    * Safari (iPhone XR)
    * Safari (iPhone SE using Chrome Dev tools)

#### Expected
* The website is responsive to all the tested units and browsers, to ensure that; no elements are moving around or stretched.

#### Actual result
* As expected.

### Validator testing
#### Landing page, index.html
* Passed the HTML validator without errors

![HTML validation](/assets/images/pp2_html_validator.png)

* Passed the CSS validator without errors

![CSS validation](/assets/images/pp2_css_validator.png)

* The page has been tested with Lighthouse

![Lighthouse report](/assets/images/pp2_lighthouse.png)

* The page has been tested with WAVE Evaluation tool

![Wave report](/assets/images/pp2_wave_report.png)

#### 404 page, 404.html
* Passed the HTML validator without errors

![HTML validation](/assets/images/pp2_html_validator_404.png)

* Passed the CSS validator without errors

![CSS validation](/assets/images/pp2_css_validator_404.png)

* The page has been tested with Lighthouse

![Lighthouse report](/assets/images/pp2_lighthouse_404.png)

* The page has been tested with WAVE Evaluation tool

![Wave report](/assets/images/pp2_wave_report_404.png)


### Testing User stories/Features

### Manual Test Cases
![manual test 1](/assets/images/pp2_manualtest_1.png)
![manual test 2](/assets/images/pp2_manualtest_2.png)
![manual test 3](/assets/images/pp2_manualtest_3.png)


### Unfixed bugs
* No bugs detected through out the testing by me and friends.

# Deployment
* The website was deployed using GitHub by using following steps:
    * In the GitHub repository for this project, click on "Settings".
    * Select "Branches" in the menu to the left, under "Code and automation".
    * Find the headline Branches and select "Main" in the dropdown menu, automatically it will generate a link to the website in a few seconds. 
The link can also be found here: 
https://matzhedman.github.io/project_2/

# Credits
### Content
* Inspiration to this game, and functions such as "onclick", the solution in JS for disabling tiles and changing turn comes from [this](https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/) tutorial by @asmitsirohi.
* Design of scoreboard was inspired by [Ankit Kanojia](https://www.c-sharpcorner.com/article/tic-tac-toe-game-using-react-js-aplication/).
* Modal was created using [this tutorial](https://www.w3schools.com/howto/howto_css_modals.asp) at W3Schools.
### Media
* The image for the favicon was found at [this webpage](https://poki.se/spela/impossible-tic-tac-toe.html), and the favicon was created at 
[favicon.io](https://favicon.io/).

### Acknowledgements
Credits to my mentor Gareth McGirr for guidance through the project!
A big thank you to my wife and to my friends Lizah and Stefan that supported me through this project, helping me break down all the logic and not giving up on me.

