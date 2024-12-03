import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['concluido', 'titulo'];

  ngOnInit(): void {
    // Carrega a lista de tarefas do LocalStorage quando o componente é inicializado
    this.loadTasks();
  }

  // Adiciona uma nova tarefa
  addTask(titulo: string): void {
    console.log(titulo)
    if (titulo.trim()) {
      this.tasks.push({ titulo, concluido: false });
      this.saveTasks(); // Salva no LocalStorage
      this.loadTasks();
    }
  }

  // Alterna o estado de conclusão da tarefa
  toggleTask(task: Task): void {
    task.concluido = !task.concluido;
    this.saveTasks(); // Atualiza no LocalStorage
  }

  // Salva as tarefas no LocalStorage
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Carrega as tarefas do LocalStorage
  loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

}
