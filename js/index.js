let strings = [
    "I'm currently the president of BHC!",
    "I love to build things, I've made websites, Minecraft plugins, and Discord bots!",
    "See my projects on the beautiful navbar :D",
    "Some of my other interests are photography, simulator games, and driving! :D"
]
let glitchChars = [
    "#",
    "!",
    "@",
    "*",
    "&",
    "%"
]
async function glitchText()
{
    let stringsInt = 0;
    for(let x of strings)
    {

        for(let i = 0; i < 7; i++)
        {
            let glitchText = "";
            for(let i = 0; i < strings[stringsInt].length; i++)
            {
                if(strings[stringsInt].charAt(i) === ' ')
                {
                    glitchText =  glitchText.concat(' ')
                }
                else{
                    glitchText =  glitchText.concat(glitchChars[Math.floor(Math.random() * glitchChars.length)])
                }
                document.getElementById(`${stringsInt}`).innerHTML = glitchText;
                await sleep(1);
            }
        }
        stringsInt = stringsInt + 1;
    }
    for (int = 0; int < strings.length; int++)
    {
        length = strings[int].length
        finishedString = strings[int]
        correctedText = "";
        for(i = 0; i < length; i++)
        {
            correctedText = correctedText.concat(finishedString.charAt(i))
            document.getElementById(`${int}`).innerHTML = correctedText;
            await sleep(5)
        }
        await sleep(15)
    }
}

window.onload = function (){
    glitchText()
}
//Wait function
async function sleep(ms)
{
    return new Promise((resolve)=>setTimeout(resolve, ms));
}