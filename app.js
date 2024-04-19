const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.name')

const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const result = await response.json()
    quoteText.innerHTML = result.content
    quoteAuthor.innerHTML = result.author
    speak()

}


const speak = () => {
    const text = quoteText.innerHTML
    const author = quoteAuthor.innerHTML

    const contentUtterance = new SpeechSynthesisUtterance(text)
    const authorUtterance = new SpeechSynthesisUtterance(author)


    const voices = speechSynthesis.getVoices()
    contentUtterance.voice = voices[0]
    authorUtterance.voice = voices[0]
    speechSynthesis.speak(contentUtterance, authorUtterance)
}

async function copyContent() {
    try {
      await navigator.clipboard.writeText(quoteText.innerHTML);
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }
