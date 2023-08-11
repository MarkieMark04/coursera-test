(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "larry", "Paula", "Jim"];

    var byeSpeaker = {
        speak: (name) => {
            console.log("Goodbye, " + name);
        }
    };

    var helloSpeaker = {
        speak: (name) => {
            console.log("Hello, " + name);
        }
    };

    // Loop through the names and say hello
    for (var i = 0; i < names.length; i++) {
        console.log("Hello, " + names[i]);
    }

    // Loop through the names and display the first letter of each name
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0);
        console.log("First letter of " + name + ": " + firstLetter);
    }

    // Loop through the names and call the function for names starting with 'J' or 'j'
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }

    // Checking if the first letter of "John" is 'j'
    var name = "John";
    var firstLetter = name.charAt(0);
    var lowerCaseFirstLetter = firstLetter.toLowerCase();
    if (lowerCaseFirstLetter === 'j') {
        console.log("The first letter of 'John' is 'j'");
    }
})();
