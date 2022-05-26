import { GameStep } from './types'


export let gameSteps: GameStep[] = [
    {
      id: 1,
      options:{
        /* img: 'party.jpg' */
      },
      textContent: {
            text:'Du och dina tonårs vänner ska gå på eran första fest någonsin. Ni har varit taggade inför det här i flera månaders tid och nu är äntligen dagen kommen! Men det har uppkommit ett stort och fruktat problem: Ölen som ni alla kämpat så hårt för att fixa fram, har blivit stulen! ☹ Ta på dig superhjälte manteln och gör en insats för att återfinna det gula guldet, allt hänger nu på dig !',
            question: 'Ange ditt namn:'
      },
      answers: [
        {
          text: 'Starta spelet!',
          nextStep: 2
        }
      ]
    },
    {
        id: 2,
        textContent: {
              text:'Senast ölen sågs var på ert gömställe i en skogsdunge som ligger nära din bästa kompis hus. ',
              question: 'vill du återvända dit för att leta efter ledtrådar,'
        },
        answers: [
          {
            text: 'JA - ta mig dit, jag är lite av en dektektiv!',
            nextStep: 3
          },
          {
            text: 'NEJ - Be dina kompisar göra det istället',
            nextStep: 6
          },
        ]
      },
      {
        id: 3,
        textContent: {
              text:'Väl på brottsplatsen ser du en ledtråd, det är ett litet avrivet tygstycke som sitter fast på en gren.',
              question: 'Vad vill du göra nu,'
        },
        answers: [
          {
            text: 'Ta ledtråden!',
            nextStep: 4
          },
          {
            text: 'Låt den ligga...',
            nextStep: 13
          },
        ]
      },
      {
        id: 4,
        textContent: {
              text:'Du återvänder till dina vänner och visar dem ledtråden. En vän känner igen tygbiten och utbrister:  Det här ser ut som tyg som från  den där fula röda tröjan som elakingen Hasse i parallell klassen alltid har på sig !',
              question: 'Vad vill du göra nu,'
        },
        answers: [
          {
            text: 'Leta reda på Hasse',
            nextStep: 5
          },
          {
            text: 'Avfärda det hela som dumheter',
            nextStep: 13
          },
        ]
      },
      {
        id: 5,
        textContent: {
              text:'Efter att i timmar cyklat runt i hela stan på jakt så får ni till slut syn på Hasse vid den lokala kiosken. Dina kompisar uppmanar dig att göra något.',
              question: 'Vad gör du,'
        },
        answers: [
          {
            text: 'Konfrontera Hasse',
            nextStep: 7
          },
          {
            text: 'Åk hem och säg att du måste äta',
            nextStep: 12
          },
        ]
      },
      {
        id: 6,
        textContent: {
              text:'Dina vänner hittar en ledtråd som pekar mot en misstänkt som heter Hasse',
              question: 'Vad vill du göra,'
        },
        answers: [
          {
            text: 'Leta reda på Hasse',
            nextStep: 5
          },
          {
            text: 'Avfärda teorin och åk hem',
            nextStep: 12
          },
        ]
      },
      {
        id: 7,
        options: {
          img: 'fightcartoon.jpg',
          input: true,
        },
        textContent: {
              text:'Du står nu öga mot öga med Hasse, time to fight!!',
              question: 'Ange ett av följande kommandon: ("Slå", "Sparka" eller "Skalla")'
        },
        answers: [
          {
            text: 'Slå',
            nextStep: 8
          },
          {
            text: 'Sparka',
            nextStep: 9
          },
          {
            text: 'Skalla',
            nextStep: 10
          },
        ]
      },
      {
        id: 8,
        options: {
          input: true,
          img: 'punch.jpg',
        },
        textContent: {
              text:'Aj då! Hasse hinner precis ducka och undkommer slaget. Arg som satan svingar han nu tillbaka!!',
              question: 'Ange ett av följande kommandon: ("Ducka", "Parera", "Ge upp")'
        },
        answers: [
          {
            text: 'Ducka',
            nextStep: 20
          },
          {
            text: 'Parera',
            nextStep: 20
          },
          {
            text: 'Ge upp',
            nextStep: 19
          },
        ]
      },
      {
        id: 9,
        options: {
          img: 'kick.jpg'
        },
        textContent: {
              text:'NEEEJ!! Hasse tar tag i ditt i ben och överrumplar dig och vinner fighten!! Här tar sagan slut för dig...',
              question: 'GAME OVER',
        },
        answers: [
          {
            text: 'Starta om',
            nextStep: 1
          },
        ]
      },
      {
        id: 10,
        options: {
          img: 'Zidane.jpg',
        },
        textContent: {
              text:'SNYGGT! Hasse hinner inte ens blinka innan skallen träffar honom och faller slagen till marken! ',
              question: 'BAAAM!'
        },
        answers: [
          {
            text: 'Gå vidare',
            nextStep: 11
          },
         
        ]
      },
      {
        id: 11,
        options: {
          img: 'respect.jpeg',
        },
        textContent: {
              text:'Trots att Hasse förlorat och känner sig förödmjukat så visar han dig respekt. Han erbjuder sig till och med köpa ut ny öl till er.',
              question: 'Vad väljer du,'
        },
        answers: [
          {
            text: 'Tacka ja',
            nextStep: 14
          },
          {
            text: 'Fortsätt leta efter ölen',
            nextStep: 15
          }, 
        ]
      },
      {
        id: 12,
        options: {
          img: 'gameover.webp',
        },
        textContent: {
              text:'Du valde att åka hem och strunta i festen, du kanske inte är någon partyprisse trots allt ?',
              question: 'GAME OVER'
        },
        answers: [
          {
            text: 'Starta om',
            nextStep: 1
          },
        
        ]
      },
      {
        id: 13,
        options: {
          img: 'gameover.webp',
        },
        textContent: {
              text:'Ajdå, du valde att inte ta ledtråden och då blir det svårt att hitta ölen... LOOSER!',
              question: 'GAME OVER'
        },
        answers: [
          {
            text: 'Starta om',
            nextStep: 1
          },
        
        ]
      },
      {
        id: 14,
        options: {
          img: 'win.png',
        },
        textContent: {
              text:'Kvällen är räddad! även fast du inte hittade den försvunna ölen så har du visat prov på stort mod :)',
              question: 'GRATTIS!'
        },
        answers: [
          {
            text: 'Starta om',
            nextStep: 1
          },
        
        ]
      },
      {
        id: 15,
        options: {
          img: 'friends.jpg',
        },
        textContent: {
              text:'Jakten på ölen går vidare... Din kompis föreslår att ni ska gå hem till honom och fundera på nästa steg.',
              question: 'Vad gör du, '
        },
        answers: [
          {
            text: 'Följ med till kompisen',
            nextStep: 16
          },
          {
            text: 'Spela quiz (bonus)',
            nextStep: 18
          },
        
        ]
      },
      {
        id: 16,
        options: {
          img: 'shock.webp',
        },
        textContent: {
              text:'När ni kliver in genom dörren hos kompisen möts ni av en chock, där ligger ölen mitt på dörrmattan med en handskriven lapp bredvid.',
              question: 'WHAAAAT'
        },
        answers: [
          {
            text: 'Läs lappen',
            nextStep: 17
          },
        
        ]
      },
      {
        id: 17,
        options: {
          img: 'note.webp',
        },
        textContent: {
              text:'"Tro inte att ni kan lura oss gamla rävar, vi har också varit unga en gång i tiden. Här har ni er öl och ta det lugnt ikväll ;)" // Hälsningar föräldrarna',
              question: 'SLUTET GOTT, ALLTING GOTT'
        },
        answers: [
          {
            text: 'Starta om spelet',
            nextStep: 1
          },
        
        ]
      },
      {
        id: 18,
        options: {
          input: true,
          img: 'math.jpg',
        },
        textContent: {
              text:'Välkommen till quizrundan, ett alternativt sätt att klara ut spelet. Första frågan är följande:',
              question: 'Vad är 6+5*8'
        },
        answers: [
          {
            text: '46',
            nextStep: 21
          },
        
        ]
      },
      {
        id: 19,
        options: {
          img: 'gameover.webp',
        },
        textContent: {
              text: 'Det är aldrig coolt att slåss, men det är ännu värre att ge UPP!',
              question: 'LOOOOOSER....'
        },
        answers: [
          {
            text: 'Starta om spelet',
            nextStep: 1
          },
        
        ]
      },
      {
        id: 20,
        options: {
          img: 'fightcartoon.jpg',
          input: true,
        },
        textContent: {
              text:'WOOOSCH! det va nära ögat... Din tur att slå igen !',
              question: 'Ange ett av följande kommandon: ("Slå", "Sparka" eller "Skalla")'
        },
        answers: [
          {
            text: 'Slå',
            nextStep: 8
          },
          {
            text: 'Sparka',
            nextStep: 9
          },
          {
            text: 'Skalla',
            nextStep: 10
          },
        ]
      },
      {
        id: 21,
        options: {
          img: 'canada.png',
          input: true
        },
        textContent: {
              text:'RÄTT SVAR! okej här kommer nästa fråga...',
              question: 'Vad är Kanadas huvudstad '
        },
        answers: [
       
          {
            text: 'Ottawa',
            nextStep: 22
          },
        ]
      },
      {
        id: 22,
        options: {
          img: 'questionmark.png',
          input: true
        },
        textContent: {
              text:'BRA JOBBAT! Alright sista frågan är en liten kluring ;)',
              question: 'Vad är det som går och går men aldrig kommer fram'
        },
        answers: [
       
          {
            text: 'Klockan',
            nextStep: 23
          },
        ]
      },
      {
        id: 23,
        options: {
          img: 'win.png',
        },
        textContent: {
              text:'Grattis till vinsten du är ju rätt smart ändå!!',
              question: 'QUIZ-MASTAAAAAAH!'
        },
        answers: [
       
          {
            text: 'Starta om spelet',
            nextStep: 1
          },
        ]
      },
    
  ]