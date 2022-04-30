
const Employee = require('../lib/Employee')

test('creates employee class', () => {
    const employee = new Employee({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com"});

    expect(employee.name).toBe('Ethan');
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe('andersmith29@gmail.com')
});

test('returns employee name', () => {
    const employee = new Employee({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com"});
    expect(employee.getName()).toBe('Ethan')
})

test('returns employee id', () => {
    const employee = new Employee({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com"});
    expect(employee.getId()).toBe(1234)
})


test('returns employee email', () => {
    const employee = new Employee({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com"});
    
    expect(employee.getEmail()).toBe('andersmith29@gmail.com')
})

