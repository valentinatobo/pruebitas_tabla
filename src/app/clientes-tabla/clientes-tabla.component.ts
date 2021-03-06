import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-tabla',
  templateUrl: './clientes-tabla.component.html',
  styleUrls: ['./clientes-tabla.component.css']
})
export class ClientesTablaComponent implements OnInit {

  //tittles: string[]=['Nombre', 'Cedula', 'Rol', 'Area', 'Estado','']
  //states: string[]=['Activo', 'Inactivo', 'Desvinculado']
  //@Input() tittles: string[] = [];
  @Input() data: any;
  title: any;
  values: any = []
  constructor() { }

  ngOnInit(): void {
    if(this.data) {
      this.title = Object.keys(this.data[0]);
      this.data.forEach((row: any) => {
        this.values.push(Object.values(row));
      })
    }
  }

  classValidation(i:number, column:any){
    let _class = ''
    _class += i === 0 ? 'starting-cell ': 'middle-cell '
    _class += column.length > 20 ? 'big ': column.length<6?' small':' medium'
    return _class
  }

  edtionPersonData(name: String){
    console.log(`se editara ${name}` )
  }

}
