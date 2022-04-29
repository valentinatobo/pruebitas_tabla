import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebita',
  templateUrl: './pruebita.component.html',
  styleUrls: ['./pruebita.component.css']
})
export class PruebitaComponent implements OnInit {

  //tittles: string[]=['Nombre','cedula', 'Rol', 'Area', 'Estado',''];
  data: any = [{
		"nombre": "Diana Uscategui",
		"cedula": 12345678910,
		"rol": "FrontEnd",
		"area": "Desarrollo",
		"estado": "True"
	},
	{
		"nombre": "Juan Neisa",
		"cedula": 1987654321,
		"rol": "FrontEnd",
		"area": "Desarrollo",
		"estado": "True"
	},
	{
		"nombre": "Molly Chicken",
		"cedula": 1111111,
		"rol": "Apoyo moral",
		"area": "RRHH",
		"estado": "True"
	}
];


  constructor() { }

  ngOnInit(): void {
  }

}
