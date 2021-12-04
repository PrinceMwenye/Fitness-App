## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
Fitness4All is a web application with tailored workout programs, motivaitonal content, and flexible locations for workouts.

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Weather API
* Firebase
* Node.js
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── main.html                # main HTML file, this is where the tailored workout are displayed
├── exercise.html            # main HTML file, contains gifs for exercises
├── 404.html                 # 404 error HTML file, displayed only if server could not find a file
├── 
└── README.md                # Project Description

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── account                  # Folder for account related HTML files
    ├── login.html           # login HTML file, this is where the user log in or sign up
    ├── preferences.html     # preferences HTML file, this is where user sets up preferences for their workout
    ├── preferences-continuation.html    # continuation to preferences HTML file
    └── settings.html        # settings HTML file where user can change their preferences

├── images                   # Folder for images
    ├── workoutImages            # Folder for exercise gifs and workouts images
        ├── chestGifs                # Folder for chest exercise gifs
            /bench-dips.gif
            /cobra-stretch.gif
            /jumping-jack.gif
            /knee-push-ups.gif
            /push-ups.gif

        /abs.jpg
        /arms-workout.jpg
        /push-ups.jpg

    /beach-workout.jpeg
    /beachpush.jpg

├── location workouts                   # Folder for location related HTML files
    ├── beach.html                      # containes beach workouts
    ├── indoorworkouts.html             # contains indoor workouts suitable for home
    ├── location.html                   # contains main location workout options
    └── outdoor.html                    # contains outdoor workouts
    └── recommended.html                # contains recommended workout
    └── Review_success.html             # contains reviews
    └── reviews.html                    # shows reviews forms
    └── trail.html                      # contains trail workouts
    └── outoor.html                     # contains weather information

├── motivational_content     # Folder for motivational content
    ├── article_frames       # Folder for article frames
        ├── article_frame1.html     # article HTML file, this is where a single article is displayed
        ├── article_frame2.html     # article HTML file, this is where a single article is displayed
        ├── article_frame3.html     # article HTML file, this is where a single article is displayed
        ├── article_frame4.html     # article HTML file, this is where a single article is displayed
        └── article_frame5.html     # article HTML file, this is where a single article is displayed
    ├── article_page.html    # articles collection HTML file, this is where user can select an article to read
    ├── audio_page.html      # audio HTML file, this is where the motivational audios are displayed
    ├── motivational_type_selection.html     # motivation HTML file where user can select the motivation type
    ├── submit_success_story.html    # story submission HTML file where user can submit their success story
    ├── success_story.html   # story reading HTML file where user can read other people's success stories
    └── video_page.html      # video HTML file, this is where the motivational videos are displayed

├── node_modules             # Folder for node modules used for wheather and hosting

├── scripts                  # Folder for scripts
    /audio.js                # Script for mativational audio page, retrieves audio links from the database
    /exersiseScript.js       # Script for exercise page, retrives exercise gifs from the database
    /firebaseAPI.js          # Script for all pages that use firebase, contains database keys
    /generalScript.js        # General script for all pages, cotains back button and log out button scripts
    /location.js             # Script for location workouts, retrieves location workouts from the database
    /loginScript.js          # Script for the login page, authenticates user or allows to create a new user account and creates a new user document in the database
    /mainpageScript.js       # Script for main page, builds workouts based on user's preferences
    /motivationSelection.js  # Script for motivation selection
    /preferences.js          # Script for preferences page, updates the user's document in the database with the chosen preferences
    /preferencesContinuation.js     # Script for the second preferences page, updates the user's document in the database with the chosen preferences
    /recommended             # Script for recommended workouts in location workouts, queries a random workout from the database that was recommended by users and put it on HTML page
    /reviews.js              # Script for reviews page in location workouts, creates a new document with the user review in the database
    /settings.js             # Script for settings page, retrives user's information from the database and allows to change it; updates the user's document in the database
    /submitSuccessStory.js   # Script for submit success story page in motivational content, creates a new document with a new user story in the the database 
    /successStory.js         # Script for success story page in motivational content, retrives a random user's success story from the database
    /video.js                # Script for motivational video page, retrives motivational videos' links from the database
    /weather.js              # Script for weather page, retrieves data from open weather API and shows the wheather in a city chosen by user

├── styles                   # Folder for styles
    /article-page.css        # CSS for motivational article pages
    /audio-page.css          # CSS for motivational audio page
    /exercise.css            # CSS for exercise page
    /generalStyle.css        # General CSS for all pages
    /index.css               # CSS for index page
    /location.css            # CSS for location page
    /login.css               # CSS for login page
    /motivational-type-selection      # CSS for motivation selection page
    /submit-success-story.css         # CSS for success story submition page
    /video-page.css          # CSS for motivational video page
    /404.css                 # CSS for 404 error page

Firebase hosting files: 
├── .firebaserc              # hosting information
├── .firebase.json           # hosting information
├── firestore.index.json     # hosting information
└── firestore.rules          # firebase access rules for our project



Contact

```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

