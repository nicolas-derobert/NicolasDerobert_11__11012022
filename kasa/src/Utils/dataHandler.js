
import datajson from '../Assets/Data/logements.json'

function handleError (error) {
    if (error.status === 404) {
        throw new Error('This page could not be found: ' + error.url)
    } else {
        throw error
    }
}

// function getFetch (url) {
//     return fetch(url)
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//             } else {
//                 handleError(res)
//             }
//         })
//         .then(json => json)
//         .catch(error => {
//             return error
//         })
// }

async function getAsyncFetch (url) {
    try {
        const res = await fetch(url,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        if (res.ok) {
            const json = await res.json()
            return json
        } else {
            handleError(res)
        }
    } catch (error) {
        return error
    }
}
const todoUrl = datajson
const badUrl = 'badUrl'

// function printResults (results) {
//     if (results instanceof Error) {
//         console.log(results.message)
//     } else {
//         console.log(JSON.stringify(results, null, 2))
//     }
// }

// getFetch(todoUrl).then(printResults);
let data ;
(async () => {
     const getAsyncFetchResults = await getAsyncFetch(todoUrl)
    data = JSON.parse(getAsyncFetchResults)
     console.log(data)
    // printResults(getAsyncFetchResults)
})()

// getFetch(badUrl).then(printResults);

// (async () => {
//     const getAsyncFetchResults = await getAsyncFetch(badUrl)
//     printResults(getAsyncFetchResults)
// })()

export default data;