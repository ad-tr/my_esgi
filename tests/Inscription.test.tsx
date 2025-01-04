import fc from 'fast-check';

const checkPassword = (password: string) => {
    const checkFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g;
    return checkFormat.test(password);
};

describe('Mot de passe respecte le format', () => {
    it('contain at least 8 chars, maj and number', () => {
        fc.assert(
            fc.property(fc.string(), (password) => {
                const isValid = checkPassword(password);
                if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
                    return isValid === true;
                } else {
                    return isValid === false;
                }
            })
        );
    });
});



const checkPasswordConfirmation = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
};

describe('Les deux mots de passes doivent etre identiques', () => {
    it('Les mots de passe doivent être identiques', () => {
        fc.assert(
            fc.property(fc.string(), fc.string(), (password, confirmPassword) => {
                const isValid = checkPasswordConfirmation(password, confirmPassword);
                return isValid === (password === confirmPassword);
            })
        );
    });
});


const checkIdentifiant = (identifiant: string) => {
    const checkFormat = /\w{5,}/;
    return checkFormat.test(identifiant); // Valide seulement si l'identifiant fait au moins 5 caractères
};

describe('L\idenfiant ne respecte pas le format', () => {
    it('should reject id with 4 chars and -', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 1, maxLength: 4 }), (identifiant) => {
                const isValid = checkIdentifiant(identifiant);
                return isValid === false; // On s'attend à ce que l'identifiant soit invalide
            })
        );
    });
});


const checkBadPassword = (password: string) => {
    const checkFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g;
    return checkFormat.test(password); // Valide si le mot de passe a au moins 8 caractères, 1 majuscule, 1 chiffre
};

describe('Le mot de passe ne respecte pas les conditions', () => {
    it('doesnt contain number, maj or is not big enough', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 1, maxLength: 7 }), (password) => {
                const isValid = checkBadPassword(password);
                return isValid === false; // On s'attend à ce que le mot de passe soit invalide
            })
        );
    });
});
