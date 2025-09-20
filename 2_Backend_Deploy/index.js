require("dotenv").config();
const express = require("express");
const app = express();
// const port = 4000;

const githubData = {
  "login": "Mayank-Bajaj-22",
  "id": 185393128,
  "node_id": "U_kgDOCwzf6A",
  "avatar_url": "https://avatars.githubusercontent.com/u/185393128?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Mayank-Bajaj-22",
  "html_url": "https://github.com/Mayank-Bajaj-22",
  "followers_url": "https://api.github.com/users/Mayank-Bajaj-22/followers",
  "following_url": "https://api.github.com/users/Mayank-Bajaj-22/following{/other_user}",
  "gists_url": "https://api.github.com/users/Mayank-Bajaj-22/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Mayank-Bajaj-22/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Mayank-Bajaj-22/subscriptions",
  "organizations_url": "https://api.github.com/users/Mayank-Bajaj-22/orgs",
  "repos_url": "https://api.github.com/users/Mayank-Bajaj-22/repos",
  "events_url": "https://api.github.com/users/Mayank-Bajaj-22/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Mayank-Bajaj-22/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mayank Bajaj",
  "company": null,
  "blog": "www.linkedin.com/in/mayank-bajaj-439988309",
  "location": "Jaipur ",
  "email": null,
  "hireable": null,
  "bio": " Hi, I'm Mayank Bajaj from freshman year CSE student.\r\n Open to collaboration on beginner-friendly projects and open-source programs.",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 4,
  "following": 8,
  "created_at": "2024-10-17T15:15:38Z",
  "updated_at": "2025-09-16T07:58:42Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("This is Twitter");
})

app.get("/login", (req, res) => {
    res.send("Logged in successfully");
})

app.get("/github", (req, res) => {
  res.json(githubData); 
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

