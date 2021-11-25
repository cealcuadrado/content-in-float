import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  cards: any = [
    {
      title: 'One',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae finibus nisl, vitae molestie felis. Nulla eget leo efficitur, rutrum tortor rutrum, blandit diam. Integer id neque ut nisi posuere porttitor et vel nulla. Praesent quis cursus erat. Donec efficitur id arcu non maximus. Ut eget molestie odio. Phasellus porttitor mi libero, non efficitur metus suscipit a. Vivamus sit amet efficitur nibh.',
    },
    {
      title: 'Two',
      content:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet ullamcorper enim. Nulla convallis, libero eget accumsan finibus, diam quam commodo nibh, nec scelerisque risus felis et odio. Morbi laoreet in lectus id luctus. Etiam ut laoreet nisl. Maecenas quis leo velit. Nam facilisis felis nulla, posuere rutrum quam sollicitudin ac.',
    },
    {
      title: 'Three',
      content:
        'Proin ex nisi, tincidunt in laoreet facilisis, bibendum quis mi. Mauris placerat suscipit euismod. Suspendisse condimentum dolor a varius sollicitudin. Vivamus vel congue quam, a gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin cursus pretium leo. Ut ullamcorper quis erat in lacinia. Duis vitae ultricies odio. Nulla a tortor lobortis, convallis ex quis, commodo enim.',
    },
  ];

  ngOnInit(): void {}
}
