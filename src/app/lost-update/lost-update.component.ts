import { Component, OnInit } from '@angular/core';
import { dirty_read_data1 } from 'src/api/dirty_read';
import { BillingInfo } from 'src/models/BillingInfo';
export class Employee {
  'ID': number;

  'FirstName': string;

  'LastName': string;

  'Prefix': string;

  'Position': string;

  'Picture': string;

  'BirthDate': string;

  'HireDate': string;

  'Notes': string;

  'Address': string;

  'StateID': number;
}

export class State {
  'ID': number;

  'Name': string;
}
@Component({
  selector: 'app-lost-update',
  templateUrl: './lost-update.component.html',
  styleUrls: ['./lost-update.component.scss'],
})
export class LostUpdateComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  async ngOnInit() {
    await this.loadData();
  }

  dataSource: BillingInfo[];

  constructor() {
    this.dataSource = [];
  }
  async loadData() {
    // this.dataSource = await dirty_read_data1();
  }

  test(e: any) {
    console.log(e);
  }
}
