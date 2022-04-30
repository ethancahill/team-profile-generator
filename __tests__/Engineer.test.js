

const Engineer = require('../lib/Engineer')

test('creates engineer class', () => {
    const engineer = new Engineer({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", github: 'ethancahill'});

    expect(engineer.name).toBe('Ethan');
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe('andersmith29@gmail.com');
    expect(engineer.github).toBe('ethancahill')
});

test('returns github username', () => {
    const engineer = new Engineer({name: 'Ethan', id: 1234, email: "andersmith29@gmail.com", github: 'ethancahill'});

    expect(engineer.getGithub()).toBe('ethancahill')
});

