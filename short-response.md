# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:
- It's unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code because we don't want to share the API to the client.
- We always need to hide it from the clients side. 
- The risk is that someone else may use your API and some APIs will charge you for each request. 
- A malicious user could exploit it by inspecting the network in the browser. 
---

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:
- The proxy server strategy is a middleman between the frontend and the external API. The browser can request through the server and the server can request the API. 
- This strategy will aviod exposing API keys because the server acts like a middleman and will request access to the API from the API server, then it will send it back to the server, and we can securely store the API key by using  environment variables. 
---

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:
- The  environment variables is a value stored outside the source code that can help devolopers to hide the API keys from the user. 
- We store API keys in a .env file so that we do not expose it to the users. 
- The .gitignore file tells the Git which file should not be uploaded to a repository, we want this to only be in out local computer. 
- if the .env file were accidentally committed to GitHub then anyone can see the API keys. Then a user can make requests or generate unexpected changes. 
---
