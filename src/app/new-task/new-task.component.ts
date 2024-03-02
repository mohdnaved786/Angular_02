import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  
  carddata = [
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://st4.depositphotos.com/5697630/27335/i/600/depositphotos_273359270-stock-photo-poke-bowl-with-salmon-served.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://st4.depositphotos.com/8005734/39241/i/600/depositphotos_392416262-stock-photo-hawaiian-salmon-poke-bowl-with.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://thumbs.dreamstime.com/b/hawaiian-salmon-fish-poke-bowl-rice-radish-cucumber-tomato-sesame-seeds-seaweeds-buddha-bowl-diet-food-hawaiian-salmon-121368664.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://www.shutterstock.com/image-photo/portrait-happy-fashionable-handsome-man-260nw-600200732.jpg',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://st4.depositphotos.com/37260078/40821/i/600/depositphotos_408214700-stock-photo-hawaiian-dish-fresh-salmon-salad.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://www.shutterstock.com/image-photo/portrait-happy-fashionable-handsome-man-260nw-600200732.jpg',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://st2.depositphotos.com/10614052/44060/i/600/depositphotos_440608476-stock-photo-bowl-tasty-rice-fish-vegetables.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://www.shutterstock.com/shutterstock/photos/1531460873/display_1500/stock-photo-portrait-of-positive-cheerful-guy-promoter-point-index-finger-recommend-ads-select-suggest-adverts-1531460873.jpg',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://thumbs.dreamstime.com/b/fresh-hawaiian-salmon-tofu-poke-bowl-healthy-lunch-fast-food-nutrition-concept-organic-rice-seaweed-avocado-cucumber-137507015.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://www.shutterstock.com/shutterstock/photos/1531460873/display_1500/stock-photo-portrait-of-positive-cheerful-guy-promoter-point-index-finger-recommend-ads-select-suggest-adverts-1531460873.jpg',
      footerheading: 'Salim Aldosery'
    },
    {
      image: 'https://thumbs.dreamstime.com/b/fresh-hawaiian-salmon-tofu-poke-bowl-healthy-lunch-fast-food-nutrition-concept-organic-rice-seaweed-avocado-cucumber-137507015.jpg',
      mainheading: 'Slow Cooker Loaded Potato Soup',
      middlecontentone: 'Save',
      middlecontenttwo: '6-8 servings',
      footerimage: 'https://www.shutterstock.com/shutterstock/photos/1531460873/display_1500/stock-photo-portrait-of-positive-cheerful-guy-promoter-point-index-finger-recommend-ads-select-suggest-adverts-1531460873.jpg',
      footerheading: 'Salim Aldosery'
    }
  ]

  listingdata = [
   {
    select: 'Property Status',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Property Location',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Property Type',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Property Style',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Total Rooms',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Bedrooms',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Bathrooms',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   },
   {
    select: 'Car Parking',
    value1: 'For sale',
    value2: 'For rent',
    value3: 'For open',
    value4: 'For close'
   }
  ]

  checkbox = [
    {
      content: 'Attended Lobby'
    },
    {
      content: 'Concierge'
    },
    {
      content: 'Fireplace'
    },
    {
      content: 'Gym'
    },
    {
      content: 'Outdoor Space'
    },
    {
      content: 'Parking'
    },
    {
      content: 'Pet Friendly'
    },
    {
      content: 'Pool'
    },
    {
      content: 'Views'
    },
    {
      content: 'Washer / Drye'
    }
  ]

  secondcheckbox = [
    {
      content: 'New Listings Only'
    },
    {
      content: 'Open Houses'
    },
    {
      content: 'Sponsor Units'
    },
    {
      content: 'Show Listings In Contract'
    }
  ]

  ngOnInit(): void {
    console.log("My Card Data===>", this.carddata)
    console.log("my list data" , this.listingdata)
    console.log("my checkbox data" , this.checkbox)
    console.log("my checkbox data two" , this.secondcheckbox)
  }

}


