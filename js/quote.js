const generateQuote = () => {               //Onclick Generate btn...
    const url = "https://type.fit/api/quotes"; 
       //API variable
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            document.getElementById("quote").innerText = `"${randomQuote.text}"`;
            document.getElementById("author").innerText = ` - ${randomQuote.author}`;
        })
        .catch(error => console.error('Error fetching the quotes:', error));
};