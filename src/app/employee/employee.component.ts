import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employeeList: Employee[] = [];
  showEditor = true;
  myName: string = '';
  newEmployee: Employee = new Employee();
  findEmployee: Employee = new Employee();

  constructor(private dataService: EmployeeService) {
    // this.newEmployee = new Employee();
    // this.findEmployee = new Employee();
    // this.findEmployee.name = '';
  }

  ngOnInit() {
    this.getAll();
  }

  employeeSearch() {
    console.log('In employeeSearch ');
    if (this.findEmployee.name.trim()) return;
    this.dataService.searchEmployees(this.findEmployee.name).subscribe(
      (data: Employee[]) => {
        console.log('found employees ' + data);
        this.employeeList = data;
      },
      (error) => {
        console.log('could not get Employees', error);
        this.employeeList = [];
      }
    );
  }

  getAll() {
    console.log('In getAll:');
    this.dataService.getAll().subscribe(
      (data: Employee[]) => {
        console.log('found employees ' + data);
        this.employeeList = data;
      },
      (error) => {
        console.log('could not get Employees', error);
        this.employeeList = [];
      }
    );
  }

  public addEmployee(item: Employee) {
    // console.log("In addEmployee: " + this.newEmployee);
    this.dataService.addEmployee(this.newEmployee).subscribe((employee) => {
      this.employeeList.push(employee);
      console.dir(employee);
    });
    // console.dir(employeeId);
  }

  public updateEmployee(item: Employee) {
    console.dir(item);
    // console.log("In updateEmployee: " + item);
    this.dataService.updateEmployee(item).subscribe((employee) => {
      // this.employeeList.push(employee);
      console.dir(employee);
      this.getAll();
    });
    // console.log("In updateEmployee:");
  }

  public deleteEmployee(employee: Employee) {
    console.log('In deleteEmployee: ' + employee.id);
    // this.dataService.deleteEmployee(employee.id);
    this.employeeList = this.employeeList.filter((h) => h !== employee);
    this.dataService.deleteEmployee(employee).subscribe();
  }

  findEmployeeById() {
    this.dataService
      .getEmployeeNo404({ id: this.findEmployee.id })
      .subscribe((e) => {
        if (e !== undefined) this.findEmployee = e;
      });
  }

  getEmployeeById() {
    this.dataService.getEmployee(this.findEmployee.id).subscribe(
      (e) => {
        if (e !== undefined) this.findEmployee = e;
      },
      (error) => {
        console.log('could not get Employees', error);
      }
    );
  }
}

export class Employee {
  public id: number = 0;
  public name: string = '';
  public gender: string = '';
  public departmentId: number = 0;
  public salary: number = 0;
}
