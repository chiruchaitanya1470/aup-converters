<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Add Grid Styling Using JavaScript</title>
</head>
<body>

<div id="gridContainer">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
    <button>Button 6</button>
</div>

<script>
//creating custom prompt
var promptDivTag=document.createElement('div');
promptDivTag.className="customprompt";
promptDivTag.style.display='flex';
promptDivTag.style.position='fixed';
promptDivTag.style.top='0';
promptDivTag.style.left='0';
promptDivTag.style.height='100%';
promptDivTag.style.backgroundColor='rgba(0, 0, 0, 0.5)';
promptDivTag.style.width='100%';
promptDivTag.style.justifyContent='center';
promptDivTag.style.alignItems='center';
var promptheading=document.createElement('div');
promptheading.style.backgroundColor='white';
var promptheading1=document.createElement('div');
promptheading.style.backgroundColor='white';

//promopt box
var promptbox=document.createElement('div');
promptbox.className="promptbox";
promptbox.style.backgroundColor='white';
promptbox.style.padding='20px';
promptbox.style.borderRadius='10px';
promptbox.style.boxShadow='0 2px 10px rgba(0, 0, 0, 0.1)';
promptbox.style.textAlign='center';
promptbox.style.display='grid';
promptbox.style.gridTemplateColumns= 'repeat(3, 1fr)';
promptbox.style.gap='10px';

var visibletext=document.createElement('h1');
visibletext.textContent='please select your action';
promptbox.appendChild(promptheading);
promptbox.appendChild(visibletext);
promptbox.appendChild(promptheading1);



//aup url button
var aupurlconverterbutton=document.createElement('button');
aupurlconverterbutton.textContent ="AUP URL Converter";
aupurlconverterbutton.style.margin='5px';
aupurlconverterbutton.style.padding='10px 20px';
aupurlconverterbutton.style.border='none';
aupurlconverterbutton.style.borderRadius='5px';
aupurlconverterbutton.style.backgroundColor='#007BFF';
aupurlconverterbutton.style.color='white';
aupurlconverterbutton.style.cursor='pointer';
aupurlconverterbutton.onclick=aupurlconverter;
promptbox.appendChild(aupurlconverterbutton);
//aup url converter beta
var aupurlconverterbetabutton=document.createElement('button');
aupurlconverterbetabutton.textContent="AUP URL converter beta";
aupurlconverterbetabutton.style.margin='5px';
aupurlconverterbetabutton.style.padding='10px 20px';
aupurlconverterbetabutton.style.border='none';
aupurlconverterbetabutton.style.borderRadius='5px';
aupurlconverterbetabutton.style.backgroundColor='#007BFF';
aupurlconverterbetabutton.style.color='white';
aupurlconverterbetabutton.style.cursor='pointer';
aupurlconverterbetabutton.onclick=aupbetaurlconverter;
promptbox.appendChild(aupurlconverterbetabutton);
// prompt cancle
var promptcancle=document.createElement('button');
promptcancle.textContent="cancle";
promptcancle.style.margin='5px';
promptcancle.style.padding='10px 20px';
promptcancle.style.border='none';
promptcancle.style.borderRadius='5px';
promptcancle.style.backgroundColor='#007BFF';
promptcancle.style.color='white';
promptcancle.style.cursor='pointer';

promptcancle.onclick=closeprompt;
promptbox.appendChild(promptcancle);
//adding heading

//prompt box apprending
promptDivTag.appendChild(promptbox);
//appending custom prompt
document.body.appendChild(promptDivTag);










///clsose promot
function closeprompt() {
    // Hide the overlay prompt
    document.getElementsByClassName("customprompt")[0].style.display='none';

    //remove the customprompt
    var customprompt=document.getElementsByClassName("customprompt");
    for(var i=0;i<customprompt.length;i++)
    customprompt[i].remove();
};
function aupurlconverter(){   
    console.log("aupurlconverter clicked");
    
    var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/aup-converter.js'; 
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
        closeprompt();

    };


    function aupbetaurlconverter(){   
        console.log("aupurlconverter clicked");
        
        var scriptUrl = 'https://chiruchaitanya-converters.deno.dev/content/aup-beta-url-converter.js'; 
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
            closeprompt();

    };
    
</script>

</body>
</html>
