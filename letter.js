const text = `
Dear Stuart Little, I wanted to tell you something honestly, even though it's not easy for me to say. Around November, I realized I started liking you in a way that goes beyond friendship. I tried to keep it to myself, but I couldn't hide it any longer. The more I spent time talking to you, the more I realized how important you've become in my life.

You have always been someone incredibly kind, caring, and supportive. You make the ordinary moments feel special, and your presence brings a sense of comfort and happiness that I can't put into words. Talking to you, laughing with you, sharing thoughts and stories on calls or chats.....these moments have stayed with me, and I cherish them more than I can say. Even though we haven't met in person yet, you've already become someone really meaningful to me.

There's something unique about our connection. With you, I feel completely at ease, like I can be myself without any walls or masks. Every conversation leaves me feeling lighter, happier, and more inspired. You've become a part of my days, in thoughts and in little moments I carry with me.

I wanted to share this with you because keeping it hidden no longer felt right. I just wanted you to know how much you mean to me and how much I appreciate having you in my life. No matter what, I value you, our friendship, and every moment we've shared. My hope is that we continue to stay close, to laugh together, and to create more memories that make life feel brighter and fuller. You are someone truly special, and I'm grateful for you every single day.
`;
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
