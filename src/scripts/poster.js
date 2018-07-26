
 fetch('data/movies.json')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(datas => {
        for (let i = 0; i <= 5; i++) {
            datas.forEach(data => {
                const figure = document.createElement('figure')
                figure.onclick = modal.bind(data)
                const img = document.createElement('img')
                img.alt = data.alt
                img.src = data.url
                const figcaption = document.createElement('figcaption')
                figcaption.innerText = data.title
                figure.appendChild(img)
                figure.appendChild(figcaption)
                const poster = document.getElementById('poster')
                poster.appendChild(figure)
            })

        }
    })
    .catch(console.error)
    
