**Quickstart**
- Clone the repository
- In your terminal navigate to it
- run command "npm install"
- you might also have to run "npm install firebase"
  and "npm install @react-native-async-storage/async-storage"
- run "code ." to edit in VS Code
- create a new file "config.json" in the Main Folder (not screens etc...)
- you need the following 3 API Keys :
[
    rapidAPI.com
    alphavantage.co
    newsapi.org
]
- type in your API Keys in the form (you can copy and paste this and replace with your keys ) :

{
    "rapidApiKey": "INPUT YOUR rapidAPI API KEY IN HERE"
    "vantageApiKey" : "INPUT YOUR alphavantage API KEY IN HERE",
    "newsApiKey" : "INPUT YOUR newsapi API KEY IN HERE"
}

- run command "npm start"

**Debugging**
- On search page if it says "No Data Available for AAPL" for example, then it may be because AlphaVantage only allows 25 daily requests. So switch the API key for it for the day.
