console.log("Hello World");

const kamar = [
    {
        'nama' : 'Capital Suite Bundaran View',
        'deskripsi' : 'Savour the Bundaran HI view in a 100-sq-m (1,076 sq ft) suite with a king bed, living area, kitchenette, bathroom and Grand Club Lounge access. This is a premium suite. See World of Hyatt program terms for upgrade eligibility.'
    },
    {
        'nama' : 'Capital Suite',
        'deskripsi' : 'Revel in a 100-sq-m (1,076 sq ft) suite with a king bed, private living/dining area, kitchenette, bathroom, daybeds and access to Grand Club Lounge. This is a premium suite. See World of Hyatt program terms for upgrade eligibility.'
    },
    {
        'nama' : 'Grand Suite Bundaran View',
        'deskripsi' : 'Sample the iconic Bundaran HI view in a 75-sq-m (817.3 sq ft) suite with a king bed, living/dining area, bathroom and access to Grand Club Lounge. This is a standard suite. See World of Hyatt program terms for upgrade eligibility.'
    },
    {
        'nama' : 'Grand Suite',
        'deskripsi' : 'Indulge in a 75-sq-m (817.3 sq ft) suite with a king bed, private living/dining area, bathroom, window daybeds and access to Grand Club Lounge. This is a standard suite. See World of Hyatt program terms for upgrade eligibility.'
    },
    {
        'nama' : 'Diplomatic Suite',
        'deskripsi' : 'Experience a luxurious 170-sq-m (1,829 sq ft) suite with a king bed, cosy living room that extends to a 205-sq-m (2,206 sq ft) outdoor terrace. This is a speciality suite. See World of Hyatt program terms for upgrade eligibility.'
    },
    {
        'nama' : 'Presidential Suite',
        'deskripsi' : 'Discover the ultimate comfort of a 315-sq-m (3,390 sq ft) suite with Master’s bedroom, twin bedroom, study room, kitchenette, cosy living area and 200-sq-m (2,152 sq ft) indoor glass terrace for events. This is a speciality suite.'
    },
    {
        'nama' : 'Premiere Suite',
        'deskripsi' : 'Unwind in 100-sq-m (1,076 sq ft) suite with one king bed, private living/dining area, kitchenette and privileged access to Grand Club Lounge. This is a non-renovated suite. See World of Hyatt program terms for upgrade eligibility.'
    }
]

const grid = document.querySelector('#room-container')

for(var i=0; i<7; i++) {
    const cards = document.createElement('div')
    cards.setAttribute('class','roomCards')

    const gambar = document.createElement('img')
    gambar.setAttribute('src', './rooms/'+ (i+1) +'.jpg')

    const namaElement = document.createElement('h2')
    const namaText = document.createTextNode(kamar[i].nama)
    namaElement.appendChild(namaText)

    const deskripsiElement = document.createElement('p')
    const deskripsiText = document.createTextNode(kamar[i].deskripsi)
    deskripsiElement.appendChild(deskripsiText)

    // bikin button
    const bookElement = document.createElement('button')
    bookElement.setAttribute('id', 'roomButton')

    // bikin a href
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', './book.html')
    const linkText = document.createTextNode('Book now!')
    linkElement.appendChild(linkText)

    // masukin a href kedalam button
    bookElement.appendChild(linkElement)

    cards.appendChild(gambar)
    cards.appendChild(namaElement)
    cards.appendChild(deskripsiElement)
    cards.appendChild(bookElement)

    grid.appendChild(cards)
}

{/* <div class="roomCards">
    <img src="rooms/capitalBundaran.jpg" alt="">
    <h2> Capital Suite Bundaran View </h2>
    <p> Savour the Bundaran HI view in a 100-sq-m (1,076 sq ft) suite with a king bed, living area, kitchenette, bathroom and Grand Club Lounge access. This is a premium suite. See World of Hyatt program terms for upgrade eligibility. </p>
    <button id="roomButton">
        <a href="book.html"> Book Now! </a>
    </button>
</div> */}