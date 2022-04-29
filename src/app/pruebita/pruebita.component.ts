import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebita',
  templateUrl: './pruebita.component.html',
  styleUrls: ['./pruebita.component.css']
})

export class PruebitaComponent implements OnInit {

  //tittles: string[]=['Nombre','cedula', 'Rol', 'Area', 'Estado',''];
  data: any = [{
		"nombre": "Diana Valentina Uscategui Tobo",
		"cedula": 12345678910,
		"rol": "FrontEnd",
		"area": "Desarrollo",
		"estado": "True",
    "test1":"1",
    "test2":"2",
    "test3":"3",
    "test4":"4"
	},
	{
		"nombre": "Juan Neisa",
		"cedula": 1987654321,
		"rol": "FrontEnd",
		"area": "Desarrollo",
		"estado": "True",
    "test1":"1",
    "test2":"2",
    "test3":"3",
    "test4":"4"
	},
	{
		"nombre": "Molly Chicken",
		"cedula": 1111111,
		"rol": "Apoyo moral",
		"area": "RRHH",
		"estado": "True",
    "test1":"1",
    "test2":"2",
    "test3":"3",
    "test4":"4"
	},
    {
      "nombre": "Molly Chicken",
      "cedula": 1111111,
      "rol": "Apoyo moral",
      "area": "RRHH",
      "estado": "True",
      "test1":"1",
      "test2":"2",
      "test3":"3",
      "test4":"4"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
