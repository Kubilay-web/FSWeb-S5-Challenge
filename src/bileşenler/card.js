import axios from "axios";



const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  // const cardDiv = document.createElement('div');
  // cardDiv.classList.add('card');


  
  //   const headlineDiv = document.createElement('div');
  //   headlineDiv.classList.add('headline');

  //   headlineDiv.textContent = item.anabaslik;
  //   cardDiv.appendChild(headlineDiv);
  //   const authorDiv = document.createElement('div');
  //   authorDiv.classList.add('author');
  //   cardDiv.appendChild(authorDiv);
  //   const imgContainerDiv = document.createElement('div');
  //   imgContainerDiv.classList.add('img-container');
  //   authorDiv.appendChild(imgContainerDiv);
  //   const authorImg = document.createElement('img');
  //   authorImg.src = yazarFoto;
  //   imgContainerDiv.appendChild(authorImg);
  //   const authorSpan = document.createElement('span');
  //   authorSpan.textContent = `${item.yazarAdı} `;
  //   authorDiv.appendChild(authorSpan)
  //   cardDiv.append(headlineDiv, authorDiv, imgContainerDiv, authorImg, authorSpan);
  //   cardsContainer.appendChild(cardDiv);
    

 
 
  // return cardDiv;



}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


  const cardContainer = document.querySelector(secici);

  // Make a request for a user with a given ID
  axios.get('http://localhost:5001/api/makaleler')
    .then(function (response) {
      // handle success

      const articles = response.data.makaleler;

      Object.keys(articles).map((article)=>{
        articles[article].map((item=>{

        }))

      const cards = Card(response.data.makaleler);
      cardContainer.appendChild(cards);
      })

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });


}

export { Card, cardEkleyici }
