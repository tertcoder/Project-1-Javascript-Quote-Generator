"use strict";
// Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."`,
    person: `William Faulkner`,
  },
  {
    quote: `"As a writer, you should not judge, you should understand."`,
    person: `Ernest Hemingway`,
  },
  {
    quote: `"Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly"`,
    person: `Franz Kafka`,
  },
  {
    quote: `"Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."`,
    person: `John Steinbeck`,
  },
  {
    quote: `"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."`,
    person: `John Green`,
  },
  {
    quote: `"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."`,
    person: `Mark Twain`,
  },
  {
    quote: `"As for 'Write what you know,' I was regularly told this as a beginner. I think it's a very good rule and have always obeyed it. I write about imaginary countries, alien societies on other planets, dragons, wizards, the Napa Valley in 22002. I know these things. I know them better than anybody else possibly could, so it's my duty to testify about them."`,
    person: `Ursula K. Le Guin`,
  },
  {
    quote: `"You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write."`,
    person: `Annie Proulx`,
  },
  {
    quote: `"Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write."`,
    person: `Rainer Maria Rilke`,
  },
  {
    quote: `"Maybe it's not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them."`,
    person: `Anna White`,
  },
  {
    quote: `"A writer never has a vacation. For a writer life consists of either writing or thinking about writing."`,
    person: `Eugene Ionesco`,
  },
  {
    quote: `"Read, read, read. Read everything – trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window."`,
    person: `William Faulkner`,
  },
  {
    quote: `"A good writer possesses not only his own spirit but also the spirit of his friends."`,
    person: `Friedrich Nietzsche`,
  },
  {
    quote: `"Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul."`,
    person: `Meg Rosoff`,
  },
  {
    quote: `"I am not at all in a humour for writing; I must write on until I am."`,
    person: `Jane Austen`,
  },
  {
    quote: `"You don't start out writing good stuff. You start out writing crap and thinking it's good stuff, and then gradually you get better at it. That's why I say one of the most valuable traits is persistence."`,
    person: `Octavia E. Butler`,
  },
  {
    quote: `"You can always edit a bad page. You can't edit a blank page."`,
    person: `Jodi Picoult`,
  },
  {
    quote: `"Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now."`,
    person: `Annie Dillard`,
  },
  {
    quote: `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."`,
    person: `Toni Morrison`,
  },
  {
    quote: `"I hope that in this year to come, you make mistakes. Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're doing something."`,
    person: `Neil Gaiman`,
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
