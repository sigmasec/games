const clientId = 'Iv1.c307546ea8ca53af';
const clientSecret = 'd2a0e0aed8c0a77ae5eab2add475cc75a11c225d';
// const repos = ['https://api.github.com/repos/sz-games/games/contents/', 'https://api.github.com/repos/sz-games/games2/contents/', 'https://api.github.com/repos/sz-games/games3/contents/','https://api.github.com/repos/sz-games/games4/contents/', 'https://api.github.com/repos/sz-games/games5/contents/', 'https://api.github.com/repos/sz-games/games6/contents/', 'https://api.github.com/repos/sz-games/games7/contents/', 'https://api.github.com/repos/sz-games/games8/contents/', 'https://api.github.com/repos/sz-games/games9/contents/', 'https://api.github.com/repos/mathgames66/mathgames66.github.io/contents/']; // Add more repo URLs here
const repos ['https://api.github.com/repos/sz-games/games/contents/', 'https://api.github.com/repos/sz-games/games2/contents/']

repos.forEach(repo => {
    fetch(repo, {
        headers: {
            'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`
        }
    })
    .then(response => response.json())
    .then(data => {
        let gameLinks = document.getElementById('game-links');
        data.forEach(item => {
            if (item.type === 'dir') {
                fetch(item.url, {
                    headers: {
                        'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`
                    }
                })
                .then(response => response.json())
                .then(subData => {
                    subData.forEach(subItem => {
                        if (subItem.name === 'index.html') {
                            let a = document.createElement('a');
                            let linkText = document.createTextNode(item.name);
                            a.appendChild(linkText);
                            a.title = item.name;
                            let repoName = repo.split('/')[5]; // Extract the repository name from the repo URL
                            let userName = repo.split('/')[4]; // Extract the username from the repo URL
                            a.href = `/games/play/game.html?game=https://${userName}.github.io/${repoName}/${item.name}/index.html`;
                            gameLinks.appendChild(a);

                            // Add a line break after each link
                            let br = document.createElement('br');
                            gameLinks.appendChild(br);
                        }
                    });
                });
            }
        });
    });
});
