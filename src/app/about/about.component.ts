import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  carsdata = [
    {
      image: 'https://media.zigcdn.com/media/content/2019/Sep/2021-bugatti-chiron-super-sport-300-zw1_720x540.jpg',
      heading: 'Card title',
      para: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      button: 'Go Somewhere'
    },
    {
      image: 'https://media.zigcdn.com/media/content/2019/Sep/2021-bugatti-chiron-super-sport-300-zw1_720x540.jpg',
      heading: 'Card title',
      para: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      button: 'Go Somewhere'
    },
    {
      image: 'https://media.zigcdn.com/media/content/2019/Sep/2021-bugatti-chiron-super-sport-300-zw1_720x540.jpg',
      heading: 'Card title',
      para: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      button: 'Go Somewhere'
    },
    {
      image: 'https://media.zigcdn.com/media/content/2019/Sep/2021-bugatti-chiron-super-sport-300-zw1_720x540.jpg',
      heading: 'Card title',
      para: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      button: 'Go Somewhere'
    },
  ]

}
