import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Início', link: '/home' },
    { label: 'Clientes', subItems: [
      { label: 'Lista de clientes', link: '/customers' },
      { label: 'Adicionar novo cliente', link: '/customers/new' },
    ]},
    { label: '(Dynamic) Clientes', subItems: [
      { label: 'Lista de clientes', link: '/dynamic-customers' },
      { label: 'Adicionar novo cliente', link: '/dynamic-customers/new' },
    ]},
    { label: '(Template) Clientes', subItems: [
      { label: 'Lista de clientes', link: '/template-customers' },
      { label: 'Adicionar novo cliente', link: '/template-customers/new' },
    ]},
    { label: '(Metadata) Clientes', subItems: [
      { label: 'Lista de clientes', link: '/metadata-customers' },
      { label: 'Adicionar novo cliente', link: '/metadata-customers/new' },
    ]}
  ];
}
