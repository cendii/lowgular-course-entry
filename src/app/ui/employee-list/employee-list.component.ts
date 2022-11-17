import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();

  constructor(private _projectService: ProjectService) {
  }
}
