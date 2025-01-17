import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  data$: Observable<ProjectModel[]> = this._projectService.getAll();
  constructor(private _projectService: ProjectService) {
  }
}
