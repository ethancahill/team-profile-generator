
const Manager = require('../lib/Manager')

test('creates a new Manager object', () => {
    const manager = new Manager({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", officeNumber: 8445});

    expect(manager.name).toBe('Ethan');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('andersmith29@gmail.com')
    expect(manager.officeNumber).toBe(8445)
    expect(manager.role).toBe('Manager')

});

test('returns manager office number', () => {
    const manager = new Manager({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", officeNumber: 8445});

    expect(manager.getOfficeNumber()).toBe(8445)
});

test('returns role of "manager"', () => {
    const manager = new Manager({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", officeNumber: 8445});

    expect(manager.getRole()).toBe('Manager')
})

