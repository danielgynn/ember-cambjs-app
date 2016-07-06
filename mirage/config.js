export default function() {
  this.get('/books', function() {
    return {
      data: [{
        type: 'books',
        id: 1,
        attributes: {
          title: 'Norwegian Wood',
          author: 'Haruki Murakami',
          year: '1987',
          image: 'https://d.gr-assets.com/books/1386924361l/11297.jpg',
          blurb: 'This stunning and elegiac novel by the author of the internationally acclaimed Wind-Up Bird Chronicle has sold over 4 million copies in Japan and is now available to American audiences for the first time.It is sure to be a literary event.'
        }
      }, {
        type: 'books',
        id: 2,
        attributes: {
          title: 'The Sun Also Rises',
          author: 'Ernest hemingway',
          year: '1926',
          image: 'https://d.gr-assets.com/books/1331828228l/3876.jpg',
          blurb: 'The quintessential novel of the Lost Generation, The Sun Also Rises is one of Ernest Hemingway\'s masterpieces and a classic example of his spare but powerful writing style. A poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway\'s most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions. First published in 1926, The Sun Also Rises helped to establish Hemingway as one of the greatest writers of the twentieth century.'
        }
      }, {
        type: 'books',
        id: 3,
        attributes: {
          title: 'The Hard Thing About Hard Things',
          author: 'Ben Horowitz',
          year: '2014',
          image: 'https://d.gr-assets.com/books/1386609333l/18176747.jpg',
          blurb: 'A lot of people talk about how great it is to start a business, but only Ben Horowitz is brutally honest about how hard it is to run one. In The Hard Thing About Hard Things, Ben Horowitz, cofounder of Andreessen Horowitz and one of Silicon Valley\'s most respected and experienced entrepreneurs, draws on his own story of founding, running, selling, buying, managing, and investing in technology companies to offer essential advice and practical wisdom for navigating the toughest problems business schools don\'t cover. His blog has garnered a devoted following of millions of readers who have come to rely on him to help them run their businesses. A lifelong rap fan, Horowitz amplifies business lessons with lyrics from his favorite songs and tells it straight about everything from firing friends to poaching competitors, from cultivating and sustaining a CEO mentality to knowing the right time to cash in.'
        }
      }, {
        type: 'books',
        id: 4,
        attributes: {
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          year: '1951',
          image: 'https://d.gr-assets.com/books/1280739226l/7933650.jpg',
          blurb: 'The Catcher in the Rye is J . D. Salinger\'s world-famous novel of disaffected youth. Holden Caulfield is a seventeen- year-old dropout who has just been kicked out of his fourth school. Navigating his way through the challenges of growing up, Holden dissects the \'phony\' aspects of society, and the \'phonies\' themselves: the headmaster whose affability depends on the wealth of the parents, his roommate who scores with girls using sickly-sweet affection. Written with the clarity of a boy leaving childhood behind, The Catcher in the Rye explores the world with disarming frankness and a warm, affecting charisma which has made this novel a universally loved classic of twentieth-century literature.'
        }
      }, {
        type: 'books',
        id: 5,
        attributes: {
          title: 'Mort',
          author: 'Terry Pratchett',
          year: '1987',
          image: 'https://d.gr-assets.com/books/1327866639l/828352.jpg',
          blurb: 'Death comes to us all. When he came to Mort, he offered him a job. After being assured that being dead was not compulsory, Mort accepted. However, he soon found that romantic longings did not mix easily with the responsibilities of being Death\'s apprentice...'
        }
      }]
    };
  });
}
