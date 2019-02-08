import { Component, OnInit } from "@angular/core";
import { TapserviceService } from "src/app/services/tapservice.service";
import { MatSnackBar } from "@angular/material";
import { NgxSpinnerService } from "ngx-spinner";

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
    private service: TapserviceService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() { }

  async saveData() {
    this.spinner.show();
    try {
      this.data = await this.service.saveData(this.body)
      this.spinner.hide();
      this.body = {
        name: '',
        userid: '',
        stationgroup: '',
        devicename: ''
      };
      console.log(this.data)
      if (this.data.status === 200) {
          this.snackBar.open('บันทึกสำเร็จ', '', {
            duration: 2000,
          });

      }
    } catch (error) {
      this.snackBar.open('บันทึกไม่สำเร็จ', 'โปรดลองใหม่', {
        duration: 2000,
      });


    }


  }
}
