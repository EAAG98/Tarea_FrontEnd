import { Component, OnInit } from '@angular/core';
import { Transportistas } from 'src/app/api/models';
import { TransportistasControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-flotavehicular',
  templateUrl: './flotavehicular.component.html'
})
export class FlotavehicularComponent implements OnInit {
  listOfData: Transportistas[] = []
  
constructor(
  private TransportistasService:TransportistasControllerService
){}

ngOnInit(): void {
    this.getData();
    console.log(this.listOfData)
}

  getData():void{
    this.TransportistasService.find().subscribe(data=>this.listOfData=data)
  }
}
