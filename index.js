function generateStrongPassword(length = 12) {
    const allowedPasswordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let strongPassword = ""; // Startet mit einem leeren Passwort

    // Die Schleife läuft so lange, bis isStrongPassword "true" ergibt
    while (!isStrongPassword(strongPassword)) {
        strongPassword = Array.from({ length }, () => {
            const randomAllowedPasswordCharacterIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
            const randomAllowedPasswordCharacter = allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
            return randomAllowedPasswordCharacter;
        }).join('');
    }

    return strongPassword;
}

function isStrongPassword(password) {
    // Verhindert Fehler, falls noch gar kein Passwort übergeben wurde
    if (!password || password.length < 8) {
        return false;
    }

    const isPasswordStrong = /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*()_+]/.test(password);

    return isPasswordStrong;
}

module.exports = {
    generateStrongPassword,
    isStrongPassword
};