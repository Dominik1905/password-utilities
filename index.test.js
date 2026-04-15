const { generateStrongPassword, isStrongPassword } = require('./index');

describe('Password Utilities', () => {
    // Tests für isStrongPassword
    test('isStrongPassword returns false for "Hello World"', () => {
        expect(isStrongPassword("Hello World")).toBe(false);
    });

    test('isStrongPassword returns true for "pC%mD8TpCKn2"', () => {
        expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
    });

    // Tests für generateStrongPassword
    test('generateStrongPassword with default length returns a 12-character string', () => {
        const pwd = generateStrongPassword();
        expect(pwd.length).toBe(12);
    });

    test('generateStrongPassword always generates a strong password', () => {
        // Wir generieren 10 Passwörter und prüfen jedes einzelne
        for (let i = 0; i < 10; i++) {
            const pwd = generateStrongPassword(12);
            expect(isStrongPassword(pwd)).toBe(true);
        }
    });
});