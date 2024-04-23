import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css'],
})
export class AcercaComponent {
  id: number = 0;
  tareas: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.tareas = [
      { tarea: 'routing', done: true },
      { tarea: 'directivas (atributos, estructurales)', done: true },
      { tarea: 'observables subscribe unsubscribe', done: true },
      { tarea: 'pipes', done: true },
      { tarea: 'componentes input output', done: true },
      { tarea: 'form', done: true },
      { tarea: 'validating', done: true },
      { tarea: 'lazy loading', done: false },
      { tarea: 'Testing', done: false },
      { tarea: 'Protect routes', done: false },
      { tarea: 'Nested routes', done: false },
    ];
  }

  goInit() {
    this.router.navigate(['/']);
  }
}
