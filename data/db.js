// data/db.js
// Simulación de base de datos usando localStorage

const DB_KEY = 'glaucomaIA_db_v8';

const defaultData = {
    patients: [
        {
            id: 1,
            name: 'Rosa Elena',
            lastName: 'Mendoza Ríos',
            dni: '42156783',
            birthDate: '1958-03-14',
            age: 68,
            pioOd: 22,
            pioOi: 21,
            password: '123456',
            analyses: [
                { date: '2026-06-03', probability: 75, cdRatio: 0.82, rnfl: 68, pio: 22, confidence: 91, risk: 'high' }
            ]
        },
        {
            id: 2,
            name: 'Jorge',
            lastName: 'Castillo',
            dni: '42156784',
            birthDate: '1954-05-12',
            age: 72,
            pioOd: 19,
            pioOi: 20,
            password: '123456',
            analyses: [
                { date: '2026-06-01', probability: 55, cdRatio: 0.65, rnfl: 75, pio: 19, confidence: 90, risk: 'medium' }
            ]
        },
        {
            id: 3,
            name: 'María',
            lastName: 'Santos',
            dni: '42156785',
            birthDate: '1961-08-23',
            age: 65,
            pioOd: 16,
            pioOi: 15,
            password: '123456',
            analyses: [
                { date: '2026-05-28', probability: 25, cdRatio: 0.42, rnfl: 92, pio: 16, confidence: 93, risk: 'low' }
            ]
        }
    ],
    doctors: [
        { id: 'd1', name: 'Carlos', lastName: 'Ramírez Torres', dni: '48923', password: '123456', cmp: '48923' }
    ],
    history: [],
    analysisCounter: 47
};

function getDB() {
    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            return JSON.parse(JSON.stringify(defaultData));
        }
    }
    localStorage.setItem(DB_KEY, JSON.stringify(defaultData));
    return JSON.parse(JSON.stringify(defaultData));
}

function saveDB(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
}

window.DB = {
    get: getDB,
    save: saveDB,
    defaults: defaultData
};