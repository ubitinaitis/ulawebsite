import Draggable from 'react-draggable'

export default function Coding() {
    return <Draggable>
        <div style={{ position: "absolute", top: "300px", left: "200px", width: "900px", fontSize: "22px" }}>
            sometimes i have coding side projects i like working on!

            COMPLETE:

            this website!
            HTML, CSS, Javascript/React
            you are here! the frontend/backend is next.js! i used the standard web development languages (CSS, HTML, and javascript with React)

            alice phoebe lou twitter bot 
            Python, Tweepy (Twitter API)
            a twitter bot i made that tweets lyrics from the artist alice phoebe lou every hour! i made this using python (alongside tweepy,
            the twitter python API) and deployed it using railway! i previously used heroku, but as of december 2023, they cut their free trial program...

            rgb neopixel headband
            Python, Arduino, 3D printing, messy soldering
            inspired by the light-up rave choker of my lovely friend brooke, i wanted to make a customizeable RGB headband!
            i did this by attaching a neopixel strip to a headband,
            soldered it to an adafruit bluefruit feather arduino, and 3d printing a case to keep the arduino, battery, and other components
            secured and safe to my head. then, i coded the arduino so than when the power is connected and the board is connected to the bluefruit
            app on my phone, pressing different controls yields different lighting effects! 


            IN PROGRESS:
        </div></Draggable>
}