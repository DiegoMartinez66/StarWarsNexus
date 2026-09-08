const createLink = ({ term, type, limit, page = 1 }) => {
    const cleanTerm = term.trim();
    const encodedTerm = encodeURIComponent(cleanTerm);

    if(page < 1) {
        page = 1;
    }

    if (cleanTerm.length < 1) {
        return `https://starwars-databank-server.onrender.com/api/v1/${type}?page=${page}&limit=${limit}`;
    }

    else {
        return `https://starwars-databank-server.onrender.com/api/v1/characters/name/${encodedTerm}`;
    }
};

export { createLink };