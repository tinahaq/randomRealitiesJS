# Random Realities
The files in this repo are intended for those who have purchased a copy of Random Realities by Cezar Capacle:

https://capacle.itch.io/random-realities

## Interactive Form
The goal of this project is to provide a single-page PDF with clickable fields, headers and title that will dynamically populate the various fields individually, per section or for the entire page respectively using embedded JavaScript code.

Individual entries use the following code to replace their label with a random result:
```js
event.target.buttonSetCaption(getRandomResult("general", "simple"));
```

Section headers each use their own global function to update each of their child entries:
```js
updateGeneralButtons();
```