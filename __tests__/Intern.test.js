
const Intern = require('../lib/Intern')

test('creates new Intern object', () => {
    const intern = new Intern({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", school: 'UCF'});

    expect(intern.name).toBe('Ethan');
    expect(intern.id).toBe(1234);
    expect(intern.email).toBe('andersmith29@gmail.com')
    expect(intern.school).toBe('UCF')
});

test('returns Intern school', () => {
    const intern = new Intern({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", school: 'UCF'});

    expect(intern.getSchool()).toBe('UCF')
})
