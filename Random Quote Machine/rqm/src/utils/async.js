const url = `https://api.quotable.io/quotes/random`;

export const asyncQuoteRequest = async (func) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      func([data[0].author, data[0].content, data[0]._id]);
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };