# course-upload-cse

.env file on root required in this format
```
TOKEN={include token here without curly braces}
DOMAIN={include domain here without curly braces replaces `https://${domain}.kuali.co/`}
```

After installing node packages run with npm/yarn start
Assumed matching happened for 

Things that can be improved:
1. A number of API calls are duplicated and could be called fewer times.
2. Under the really bad assumption that for the most part the data coming from the csv will look as clean and uniform. Can find ways to verify data first before playing with it. Trim, tolowercase could be used more often.
4. Find way to not add domain to .env file but have it built into the axios instance creation
5. Could run API call to get own user account info and not have to worry about that field being filled out.
6. May not have been best approach to set up the courseObj to be posted, perhaps add a few things to it after intial of a few elements in the object.
7. Work on code testing tools rather than spot checking.