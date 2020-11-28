var readlineSync = require('readline-sync');
var chalk = require('chalk');

var questionIndex = 0;
var score = 0;

const questionArray = [
  {
    question:`Why would a hacker use a proxy server?
    a. To create a stronger connection with the target.
    b. To create a ghost server on the network.
    c. To obtain a remote access connection.
    d. To hide malicious activity on the network.\n`,
    answer: "d",
  },
  {
    question:`What is the purpose of a Denial of Service attack?
    a. Exploit a weakness in the TCP/IP stack
    b. To execute a Trojan on a system
    c. To overload a system so it is no longer operational
    d. To shutdown services by turning them off\n`,
    answer: "c",
  },
  {
    question:`If you fall for a phishing scam, what should you do to limit the damage? 
    a. Delete the phishing email. 
    b. Unplug the computer. This will get rid of any malware. 
    c. Change any compromised passwords.\n`,
    answer: "c",
  },
  {
    question:`What is the process of verifying the identity of a user?
    a. Authentication
    b. Identification
    c. Validation
    d. Verification\n`,
    answer: "a",
  },
  {
    question:`What does the “https://” at the beginning of a URL denote, as opposed to "http://" (without the “s”)?
    a. That the site has special high definition
    b. That information entered into the site is encrypted
    c. That the site is the newest version available
    d. That the site is not accessible to certain computers\n`,
    answer: "b",
  },
  {
    question:`Which of the following is an example of a “phishing” attack?
    a. Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows
    b. Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information
    c. Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest
    d. All of the above\n`,
    answer:"d",
  },
  {
    question:`A group of computers that is networked together and used by hackers to steal information is called a …
    a. Botnet
    b. Rootkit
    c. DDoS
    d. Operating system\n`,
    answer: "a",
  },
  {
    question:`Criminals access someone’s computer and encrypt the user’s personal files and data. The user is unable to access this data unless they pay the criminals to decrypt the files. This practice is called …
    a. Botnet
    b. Ransomware
    c. Driving
    d. Spam\n`,
    answer: "b",
  },
  {
    question:`If a public Wi-Fi network (such as in an airport or café) requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?
    a. Yes, it is safe
    b. No, it is not safe
    c. Not sure\n`,
    answer: "b",
  },
  {
    question:`What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?
    a. Use of insecure Wi-Fi networks
    b. Key-logging
    c. De-anonymization by network operators
    d. Phishing attacks\n`,
    answer: "a",
  },
];

const leaderBoard = [
  {
    name: "Satya",
    highscore: 9
  },
  {
    name: "Sanju",
    highscore: 8
  },
  {
    name: "Rajan",
    highscore: 6
  }
];

function validateAnswer(currentQuestionIndex, answer) {
  if(answer == questionArray[currentQuestionIndex].answer) {
    console.log(chalk.bgGreen.black("\n Correct Answer! \n"));
    score++;
  }
  else {
    console.log(chalk.bgRed("\n Wrong Answer! \n"));
  }
  console.log(chalk.blueBright("Your score is: ") + chalk.white.bgBlue.bold(" ") + chalk.white.bgBlue.bold(score) + chalk.white.bgBlue.bold(" "));
  console.log("\n-----\n");

}

function playQuiz() {
  username = readlineSync.question("Please enter your name: \n")
  console.log("\n" + chalk.blueBright("Hello ") + chalk.white.bgBlue.bold(username) + chalk.blueBright("! Welcome to the CYBER SECURITY QUIZ! \n"));
  for(questionIndex=0; questionIndex<questionArray.length; questionIndex++) {
    // console.log(questionArray[questionIndex].question);
    var userAnswer = readlineSync.question(questionArray[questionIndex].question);
    validateAnswer(questionIndex, userAnswer.toLowerCase())
  }
}

function displayLeaderboard() {
  console.log("\n" + chalk.white.bgBlue.bold("HIGH SCORE LEADERBOARD:"));
  console.log(chalk.black.bgGreen.bold("Rank |    Name    | Highscore"));
  for(let i=0; i<leaderBoard.length; i++) {
    console.log((i+1) + ".       " + leaderBoard[i].name + "         " + leaderBoard[i].highscore);
  }
  if(score>6) {
    console.log("\n-----\n\n" + chalk.white.bgBlue.bold("Congrats! You've beaten the highscore!! \n\n") + chalk.black.bgGreen.bold("Feel free to send me the screenshot of your score to get featured on the Leaderboard!") + "\n\n-----\n");
  }
}

playQuiz();

displayLeaderboard()
    
if(questionIndex==questionArray.length) {
  console.log("\nThanks for playing!");
}