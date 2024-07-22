javascript:(function(){   
    
var scriptUrl = 'https://cdn.jsdelivr.net/gh/chiruchaitanya1470/aup-converters/testing.js'; 
   var script = document.createElement('script');
    script.type="text/javascript";
    script.src = scriptUrl;
    script.onload = function() {
    console.log('Script loaded successfully');
    };  
    script.onerror = function() {
    console.error('Failed to load script:', scriptUrl);
    };    
    document.body.appendChild(script);
})();




<!DOCTYPE html>
<html>
<head>
    <title>Custom Prompt</title>
    <style>
        /* Styles for the custom prompt */
        #promptOverlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }

        #promptBox {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        #promptBox input {
            margin: 10px 0;
            padding: 5px;
            width: 80%;
        }

        #promptBox button {
            margin: 5px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
        }

        #promptBox button:hover {
            background-color: #0056b3;
        }
        body{
            display:flex;
            background-color:blueviolet;
            justify-content:center;
            align-content:center;
        }
    </style>
</head>
<body>
    <h1>Custom Prompt Example</h1>
    
    <!-- Hidden overlay for the custom prompt -->
    <div id="promptOverlay">
        <div id="promptBox">
            <p>Please enter your name and choose an action:</p>
            <input type="text" id="userInput" placeholder="Your name">
            <br>
            <button onclick="action1()">Action 1</button>
            <button onclick="action2()">Action 2</button>
            <button onclick="closePrompt()">Cancel</button>
        </div>
    </div>
    
    <!-- Button to show the prompt -->
    <button onclick="showPrompt()">Show Prompt</button>

    <p id="output"></p>

    <script>
        function showPrompt() {
            // Show the overlay prompt
            document.getElementById("promptOverlay").style.display = "flex";
        }

        function closePrompt() {
            // Hide the overlay prompt
            document.getElementById("promptOverlay").style.display = "none";
        }

        function action1() {
            // Specific function for Action 1
            let userInput = document.getElementById("userInput").value;
            document.getElementById("output").innerHTML = "Hello, " + userInput + "! You selected Action 1!";
            closePrompt();
        }

        function action2() {
            // Specific function for Action 2
            let userInput = document.getElementById("userInput").value;
            document.getElementById("output").innerHTML = "Hello, " + userInput + "! You selected Action 2!";
            closePrompt();
        }
    </script>
</body>
</html>
