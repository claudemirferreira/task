import { Component } from '@angular/core';
import { ListTaskComponent } from './component/list-task/list-task.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'; // Importação do MatListModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Para usar checkboxes
import { MatCardModule } from '@angular/material/card'; // Para usar checkboxes
import { MatInputModule } from '@angular/material/input'; // Para usar checkboxes
import { MatButtonModule } from '@angular/material/button'; // Para usar checkboxes
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListTaskComponent, 
    CommonModule, 
    MatListModule, 
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
}
