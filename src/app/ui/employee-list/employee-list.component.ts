import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";
import {EmployeeModel} from "../../model/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";



@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }
  remove(personalNumber:string){
    this._employeeService.delete(personalNumber).subscribe();
  }

}
