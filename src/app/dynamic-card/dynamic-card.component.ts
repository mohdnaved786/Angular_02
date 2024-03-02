import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit {

  AmazonData = [
    {
      title: "mobile",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://images.hindustantimes.com/tech/img/2022/08/20/960x540/Untitled_design_-_2022-08-20T143510.743_1660986921934_1660986948247_1660986948247.png"
    },
    {
      title: "laptop",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx98vzq8eSJ0XwFA3qQIpTcYGY9wwZg7ZpOQ&usqp=CAU"
    },
    {
      title: "watch",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://www.dizo.net/img/qywdasb1.jpg"
    },
    {
      title: "tablet",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gImKXmsPQXot7fK_hF3enC7RQ6xBV3KZc3xWgdgSfziCycRKLJBdJCG0uAsTlsyZc0I&usqp=CAU"
    },
    {
      title: "earbuds",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://img02.honorfile.com/eu/uk/honor/pms/product/6936520808106/428_428_0AAB69D54ED5E375EC195DEF2F14320CF615EADA36C021CBmp.png"
    },
    {
      title: "camera",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsMldxkXDGKbzlB16AA6coPylZFwj1F-fACx-4NJkX0iN3GdsZN8CbHfnTopQ2bHfyrQ&usqp=CAU"
    },
    {
      title: "speaker",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "view more",
      image: "https://m.media-amazon.com/images/I/91Dp5mRYNeL._AC_UF1000,1000_QL80_.jpg"
    },
  ]
  myFilterData!: any;
  constructor() { }

  ngOnInit(): void {
    console.log("deafult myfilterData===>", this.myFilterData)
  }

  findCar(name: string) {
    this.myFilterData = this.AmazonData.filter(resp => resp.title == name)
    console.log("myFilteredData===>", this.myFilterData)
  }
}

