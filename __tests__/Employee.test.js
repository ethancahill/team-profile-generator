const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Ethan', '1234567', 'andersmith29@gmail.com')

    expect(employee.name).toBe('Ethan');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('andersmith29@gmail.com')
});
