[check deployment status](https://github.com/sigmasec/games/actions)<Br>
[sigma games website](https://sigmasec.me/games/)
# THIS WEBSITE IS PROTECTED BY SigmaProtect
This means that if you try and fork it and run it on your own, most links won't work. However, you can make your own proxy with these simple steps:
1. [Download the latest release of SigmaGames](https://github.com/sigmasec/games/releases)
2. Create a new repository on your account (or anywhere, where you'd like to host Sigma Games as a proxy)
3. Create a folder named "games"
4. Upload the entire release (unzipped) into the games folder
5. So, the index.html file should be at games/index.html
6. Using Pages, you can set the release URL to the Main branch, and the games folder. Set it as that.
7. If you cannot do that/are hosting on another website, ask ChatGPT to make a quick redirection HTML code, and then just create an index.html in the top level directory that redirects to /games/index.html
8. Your proxy ***SHOULD*** work.
### Special Thanks To
https://codepen.io/OnlyCodeChannel/pen/WNKVwrK | Figma
