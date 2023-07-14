import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
  // count = 0
  // counter(type:string){
  //   type==='add' ?this.count++:this.count--;
  // }

}
