import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL="http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Task[]>(this.apiURL);
  }
  delete(id){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  // add new task
  persist(task){
    return this.http.post<Task>(this.apiURL, task);
  }
  // change it if completed or not
  completed(id, completed){
    return this.http.patch(`${this.apiURL}/${id}`,{completed: !completed})
  }
  update(task){
  return this.http.put(`${this.apiURL}/${task.id}`,task);

  }
}
