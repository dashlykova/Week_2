//Got help from https://www.w3schools.com/js/default.asp for finding appropriate methods

console.log('Dash')
document.getElementById("datebutt").addEventListener("click", function(){
    let today = new Date(); 
    document.getElementById("output").innerHTML = today.toDateString();
});
    
    
document.getElementById("jokeButton").addEventListener("click", function(){
    let randomJokes=['Throwing acid is wrong, in some peoples eyes.', 

'The first time I got a universal remote control I thought to myself, "This changes everything"',
'Say what you want about deaf people...',
'I have spent the last four years looking for my ex-girlfriend s killer, but no-one will do it.', 
'I refused to believe my road worker father was stealing from his job, but when I got home all the signs were there.',
'I recently decided to sell my vacuum cleaner as all it was doing was gathering dust.',
'You can never lose a homing pigeon - if your homing pigeon doesnt come back what you have lost is a pigeon.',
'My girlfriend told me to go out and get something that makes her look sexy... so I got drunk.',
'Dont you hate it when someone answers their own questions? I do.',
'As I watched the dog chasing his tail I thought "Dogs are easily amused", then I realized I was watching the dog chasing his tail.',
'PMS jokes are not funny or appropriate. Period!',
'Gambling addiction hotlines would do so much better if every fifth caller was a winner.',
'Where there is a will, there is a relative.',
'Hedgehogs, eh? Why can not they just share the hedge?',
'Just because nobody complains doesn not mean all parachutes are perfect.',
'To the man on crutches, dressed in camouflage, who stole my wallet - you can hide, but you can not run.']  

    var randomNumber = Math.floor(Math.random()* 15);
    let joke = randomJokes[randomNumber]
        document.getElementById('output').innerHTML = joke;
});

