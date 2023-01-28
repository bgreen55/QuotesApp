import { useEffect, useState } from "react";
// import { SearchQuote } from "../components/SearchQuote";



export const StartPage = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // this use effect hook loads a random quote when the page renders 
    // is this loading two random quotes because I start loading the APP page so it loads a quote and then call Start page so it renders again
    useEffect(() => {
        fetch("https://usu-quotes-mimic.vercel.app/api/random")
        .then(res => res.json())
        .then(quote => {
            console.log(quote);
            setAuthor(quote["author"]);
            setQuote(quote["content"]);
            
        })
    }, []);


    return (
        <main>
        
            {/* what would be a better way of adding padding between the quote and the search button so i don't have specify 20 pixels */}
            <div className='centerVert' style={{ padding: '20px'}} id="startPage" > 
                {quote} - {author}
            </div>
            
        </main>
    )   
}


