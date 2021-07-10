// Mixed Messages Project
//First Part - Message - Work and leasure
const message1 = "Your future is still full of surprises. Soon you will receive good news about a new family member that will give you lots of laughs.";
const message2 = "You have already conquered great challenges. The oracle sees that it's time for a trip to rest, soon you will have a unique opportunity, stay tuned.";
const message3 = "It's time for a new challenge. Better get ready, life will bring you life changing opportunities on a professional level.";
const message4 = "Looking for professional growth? Keep an eye on the movements around you, you may find new opportunities in places you least expect.";
const message5 = "Thinking about choosing a career? Life will bring you several options along the way, only the one your heart listens to will be the right one.";

//Second Part - Message - Love
const message6 = "In the love field, don't give up, there is a special person thinking of you. Pay more attention to the small details and you will find her/him."
const message7 = "Love is in the air and life wants you to be happy for a long time but you need to control your jealousy.";
const message8 = "Cupid is looking for your other half, be patient, this person exists and will be approaching you soon.";
const message9 = "Be brave in love, expressing your feelings will allow this other person to also express what is in his/her heart.";
const message10 = "At the moment, in the field of love, it is not the time for commitments. Allow you to know and love yourself, so in the future you will be able to open up, meet and connect with other people.";

// Third Part - Message - Lucky Number
const message11 = "Your lucky number is 56.";
const message12 = "Your lucky number is 17";
const message13 = "Your Lucky Number is 34";
const message14 = "Your Lucky Number is 12";
const message15 = "Your Lucky Number is 88";

//Message Arrays
const message_part1 = [message1, message2,message3,message4,message5];
const message_part2 = [message6, message7,message8,message9,message10];
const message_part3 = [message11,message12,message13,message14,message15];

// Message Generator Function
function messageGenerator(a,b,c){
    
    let consolidatedMessage = [];
    consolidatedMessage.push(a[Math.floor(Math.random()*(a.length-1))]);
    consolidatedMessage.push(b[Math.floor(Math.random()*(b.length-1))]);
    consolidatedMessage.push(c[Math.floor(Math.random()*(c.length-1))]);
    return console.log("Here's the prediction of your future: \n \n"+ consolidatedMessage.join(' '));    
};

messageGenerator(message_part1, message_part2, message_part3);



