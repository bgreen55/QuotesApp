import { useEffect, useState } from 'react'
import { StartPage } from './pages/StartPage'



export function App () {
  /* ?????  this code is being run a ton, do i need to make it so every time i type a letter it doesn't rerender???? */
  const [author, setAuthor] = useState("");
  const [pageName, setPageName] = useState("StartPage");
  console.log(pageName);
  console.log(author)
  const [cls, setcls] = useState("centerHor")
  



  async function SearchQuote(author:string) {

    document.getElementById("output")!.innerHTML = ""

    fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + author)
    .then(res => res.json())
    .then(quote => {
        console.log(quote);

        var daVariable = ""
        for (var i = 0; quote.results.length - 1; i ++) {
          //console.log("help")
          console.log(quote.results[i]["content"])
          daVariable = "<div id='singleQuote'> <p> "+ quote.results[i]["content"] + " - " + quote.results[i]["author"] + "</p></div>";

          document.getElementById("output")!.innerHTML = document.getElementById("output")!.innerHTML + daVariable
        }
        console.log(daVariable)       
        
    })
    }




  return (
    
    <body className={cls} >
  
      <div className='centerVert'>
          <h2 >
              Quote Search
          </h2>
      </div>

      <div className='centerVert'>
          <form>

              <input type="text"
              value={author} 
              placeholder="Search Person"
              onChange={e => setAuthor(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault(); 
                  setPageName("QuotesPage");
                  SearchQuote(author);
                  setcls("");
                }
              }
            }
              />

          </form>

      </div>

      <div className='centerVert'>
        <button onClick={() => { setPageName("QuotesPage"); SearchQuote(author); setcls("") }}>Search</button>
      </div>

      <div id="startPage">
        {pageName === "StartPage" && <StartPage />}

      </div>

      <div id="output"  >
        <div className='centerVert'> </div>

      </div>

    </body>
  );
  
}

//git ters
