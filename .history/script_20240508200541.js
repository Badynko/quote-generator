let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes[3]);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();
