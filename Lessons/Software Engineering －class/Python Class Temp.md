```python
employees = [
#     {'empid':'' , 'name':'' , 'dept':''},
    {'empid':'001' , 'name':'Hoover' , 'dept':'CS'},
    {'empid':'002' , 'name':'Cooper' , 'dept':'CS'},
    {'empid':'003' , 'name':'James' , 'dept':'EE'},

]

def add_new_employee(empid,name,dept):
    temp_emp={'empid':'empid' , 'name':'name' , 'dept':'dept'}
#     print(temp_emp)
    employees.append(temp_emp)
    print(f'Successfully added {name} into the list.')
    
def remove_employee(empid):
    count= 0
    found = False
    #Traverse through the element in the list
    for emp in employees:
        # Find the employee ID in the dictionary
        if empid in emp.values():
            found = True # Found It
            employees.remove(emp) #So we remove it
            print(f'Employee {empid} is deleted')
            break #Stop the Loop because the employee has been removed anyway
            
        if not found:
            print('Employee not found')
            
def update_employee(empid, name, dept)
    for emp in employees:
        emp.update(('name', newname) for k,v in emp.items() if v == empid)
        emp.update(('name', newdept) for k,v in emp.items() if v == empid)

def search_employee(empid)
	found = False
	temp = dict()
	for emp in employees:
		if empid in emp.values:
			print('Found It!')
			return temp

		else:
			print('Not Found.')
			return None
```

``` python
# add_new_employee('004','May','HR')
# remove_employee('001')
search_employee('001')
employees

```