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
      title: 'Card One',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae finibus nisl, vitae molestie felis. Nulla eget leo efficitur, rutrum tortor rutrum, blandit diam. Integer id neque ut nisi posuere porttitor et vel nulla. Praesent quis cursus erat. Donec efficitur id arcu non maximus. Ut eget molestie odio. Phasellus porttitor mi libero, non efficitur metus suscipit a. Vivamus sit amet efficitur nibh.',
    },
    {
      title: 'Card Two',
      content:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet ullamcorper enim. Nulla convallis, libero eget accumsan finibus, diam quam commodo nibh, nec scelerisque risus felis et odio. Morbi laoreet in lectus id luctus. Etiam ut laoreet nisl. Maecenas quis leo velit. Nam facilisis felis nulla, posuere rutrum quam sollicitudin ac.',
    },
    {
      title: 'Card Three',
      content:
        'Proin ex nisi, tincidunt in laoreet facilisis, bibendum quis mi. Mauris placerat suscipit euismod. Suspendisse condimentum dolor a varius sollicitudin. Vivamus vel congue quam, a gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin cursus pretium leo. Ut ullamcorper quis erat in lacinia. Duis vitae ultricies odio. Nulla a tortor lobortis, convallis ex quis, commodo enim.',
    },
    {
      title: 'Card Four',
      content:
        'Sed volutpat blandit lacus, quis commodo leo vestibulum id. Sed viverra tempor est, ut molestie ligula interdum nec. Sed imperdiet, sapien ac finibus gravida, ex lectus pretium eros, sed lobortis lacus metus sit amet lectus. Sed quis congue dui. Proin rhoncus interdum consectetur. Nullam tincidunt dui condimentum justo ullamcorper fermentum. Donec ultrices interdum sem ac pharetra. Suspendisse pretium dui nec ante placerat, vel congue dui tincidunt. Quisque auctor finibus nisl, vel finibus lectus dapibus laoreet. Donec eget velit varius, fermentum turpis quis, consequat felis. Mauris quis tristique nibh. Mauris rhoncus sem ac felis sagittis, in pulvinar augue mollis.',
    },
    {
      title: 'Large Title aaaaaaaa Five',
      content:
        'Nulla in libero sit amet ipsum tempus varius. Sed consectetur nulla sed lectus interdum eleifend. Phasellus pretium nisi sit amet lacus faucibus tempus et ac neque. Sed odio magna, mollis sed laoreet quis, rhoncus sit amet metus. Maecenas sit amet augue vel odio convallis euismod ac a velit. Maecenas eget turpis nibh. Nunc semper facilisis finibus. Cras cursus, purus ut maximus dignissim, lectus velit tempor magna, ut ullamcorper velit felis eu nunc.',
    },
  ];

  ngOnInit(): void {}
}
