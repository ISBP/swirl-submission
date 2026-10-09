let strings = [
    "I'm the president of my school's Hack Club!",
    "I love to build things! I mainly work on Minecraft plugins, though I do dabble in websites, Discord bots, and FRC programming!",
    "Want to see some things I've built? Check out the projects tab on my *beautiful* navbar!",
    "Some of my favorite video games are Minecraft (obviously), Deltarune, BeamNG, and Microsoft Flight Simulator! I also like photography, driving, aviation, and walking!"
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

        for(let i = 0; i < 2; i++)
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
            await sleep(2)
        }
        await sleep(4)
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