import { Component, OnInit } from "@angular/core";
import { TapserviceService } from "src/app/services/tapservice.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  body: any = {
    name: '',
    userid: '',
    stationgroup: '',
    devicename: ''
  };

  data: any;

  constructor(
    private service: TapserviceService
  ) {

  }

  ngOnInit() { }

  async saveData() {

    this.data = await this.service.saveData(this.body)
    console.log(this.data)

  }
}
