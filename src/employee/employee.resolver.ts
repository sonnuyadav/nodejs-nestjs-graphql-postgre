import { Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entities';
import { Query } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
@Resolver(()=>Employee)
export class EmployeeResolver {
    constructor(private employeeService: EmployeeService){}
    @Query(()=>Employee,{name:"getAllEmployees"})
    findAll(){
        return this.employeeService.findAll();
    }

}
