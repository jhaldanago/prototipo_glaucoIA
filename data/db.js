// data/db.js
const DB_KEY = 'glaucomaIA_db_v13';

const NOMBRES_M = ['Carlos', 'Jorge', 'Luis', 'Miguel', 'José', 'Pedro', 'Juan', 'Ricardo', 'Fernando', 'Alberto', 'Roberto', 'Eduardo', 'Manuel', 'Raúl', 'Víctor', 'Hugo', 'Diego', 'Álvaro', 'Andrés', 'Sergio'];
const NOMBRES_F = ['María', 'Rosa', 'Ana', 'Lucía', 'Elena', 'Carmen', 'Sofía', 'Patricia', 'Isabel', 'Marta', 'Julia', 'Laura', 'Daniela', 'Gabriela', 'Silvia', 'Verónica', 'Paula', 'Natalia', 'Claudia', 'Adriana'];
const NOMBRES_M2 = ['Alberto', 'Antonio', 'Alejandro', 'Arturo', 'Benjamín', 'Bruno', 'César', 'Cristian', 'Damián', 'Emilio'];
const NOMBRES_F2 = ['Alejandra', 'Beatriz', 'Carolina', 'Cecilia', 'Diana', 'Estefanía', 'Fernanda', 'Gloria', 'Helena', 'Irene'];
const APELLIDOS = ['Mendoza', 'Ramírez', 'Torres', 'Castillo', 'Santos', 'García', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'González', 'Pérez', 'Sánchez', 'Romero', 'Díaz', 'Vargas', 'Rojas', 'Flores', 'Cruz', 'Reyes', 'Ortiz', 'Morales', 'Jiménez', 'Ruiz', 'Herrera', 'Medina', 'Aguilar', 'Vega', 'Ríos', 'Silva', 'Chávez', 'Salazar', 'Cabrera', 'Paredes', 'Quispe', 'Mamani', 'Huamán', 'Ccorimanya', 'Condori', 'Aparicio'];

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randomDate(startYear, endYear) {
    const year = randomInt(startYear, endYear);
    const month = randomInt(1, 12);
    const day = randomInt(1, 28);
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function generatePatients(count) {
    const patients = [];
    patients.push({
        id: 1, name: 'Rosa Elena', lastName: 'Mendoza Ríos', dni: '42156783',
        birthDate: '1958-03-14', age: 68, pioOd: 22, pioOi: 21, password: '123456',
        status: 'active',
        analyses: [{ date: '2026-06-03', probability: 75, cdRatio: 0.82, rnfl: 68, pio: 22, confidence: 91, risk: 'high' }]
    });
    patients.push({
        id: 2, name: 'Jorge', lastName: 'Castillo Vargas', dni: '42156784',
        birthDate: '1954-05-12', age: 72, pioOd: 19, pioOi: 20, password: '123456',
        status: 'active',
        analyses: [{ date: '2026-06-01', probability: 55, cdRatio: 0.65, rnfl: 75, pio: 19, confidence: 90, risk: 'medium' }]
    });
    patients.push({
        id: 3, name: 'María', lastName: 'Santos Flores', dni: '42156785',
        birthDate: '1961-08-23', age: 65, pioOd: 16, pioOi: 15, password: '123456',
        status: 'active',
        analyses: [{ date: '2026-05-28', probability: 25, cdRatio: 0.42, rnfl: 92, pio: 16, confidence: 93, risk: 'low' }]
    });

    for (let i = patients.length + 1; i <= count; i++) {
        const isMale = Math.random() < 0.5;
        const firstName = isMale ? randomFrom(NOMBRES_M) : randomFrom(NOMBRES_F);
        const secondName = Math.random() < 0.7 ? (isMale ? randomFrom(NOMBRES_M2) : randomFrom(NOMBRES_F2)) : '';
        const name = secondName ? `${firstName} ${secondName}` : firstName;

        const lastName1 = randomFrom(APELLIDOS);
        let lastName2 = randomFrom(APELLIDOS);
        while (lastName2 === lastName1) lastName2 = randomFrom(APELLIDOS);
        const lastName = `${lastName1} ${lastName2}`;

        const birthDate = randomDate(1940, 1985);
        const age = new Date().getFullYear() - parseInt(birthDate.split('-')[0]);
        const pioOd = randomInt(12, 28);
        const pioOi = randomInt(12, 28);
        const status = Math.random() < 0.85 ? 'active' : 'inactive';

        const analyses = [];
        if (Math.random() < 0.6) {
            const avgPio = (pioOd + pioOi) / 2;
            let prob;
            if (avgPio <= 21 && age <= 50) prob = randomInt(10, 24);
            else if (avgPio <= 21 && age > 50) prob = randomInt(25, 44);
            else if (avgPio > 21 && age <= 50) prob = randomInt(40, 59);
            else prob = randomInt(65, 89);
            let risk = prob >= 65 ? 'high' : (prob >= 40 ? 'medium' : 'low');
            const cdRatio = parseFloat((0.3 + (prob / 100) * 0.6).toFixed(2));
            const rnfl = Math.round(100 - (prob / 100) * 50);
            analyses.push({
                date: randomDate(2026, 2026),
                probability: prob, cdRatio, rnfl,
                pio: Math.round(avgPio), confidence: randomInt(88, 97), risk
            });
        }

        patients.push({
            id: i, name, lastName,
            dni: String(40000000 + i * 137 + randomInt(1, 999)),
            birthDate, age, pioOd, pioOi,
            password: '123456', status, analyses
        });
    }
    return patients;
}

function generateHistory(count, patients) {
    const history = [];
    for (let i = 0; i < count; i++) {
        const patient = patients[randomInt(0, patients.length - 1)];
        const pioOd = patient.pioOd || 16;
        const pioOi = patient.pioOi || 16;
        const age = patient.age || 50;
        const avgPio = (pioOd + pioOi) / 2;

        let prob;
        if (avgPio <= 21 && age <= 50) prob = randomInt(10, 24);
        else if (avgPio <= 21 && age > 50) prob = randomInt(25, 44);
        else if (avgPio > 21 && age <= 50) prob = randomInt(40, 59);
        else prob = randomInt(65, 89);

        let risk = prob >= 65 ? 'high' : (prob >= 40 ? 'medium' : 'low');
        const cdRatio = parseFloat((0.3 + (prob / 100) * 0.6).toFixed(2));
        const rnfl = Math.round(100 - (prob / 100) * 50);

        const monthsAgo = randomInt(0, 18);
        const d = new Date();
        d.setMonth(d.getMonth() - monthsAgo);
        d.setDate(randomInt(1, 28));
        const dateStr = d.toISOString().split('T')[0];

        history.push({
            id: 1000 + i,
            patientName: `${patient.lastName} ${patient.name}`,
            patientDni: patient.dni,
            age: patient.age,
            date: dateStr,
            cdRatio, rnfl,
            pio: Math.round(avgPio),
            confidence: randomInt(88, 97),
            risk,
            probability: prob,
            reviewed: Math.random() < 0.5
        });
    }
    return history.sort((a, b) => new Date(b.date) - new Date(a.date));
}

const patientsData = generatePatients(105);
const historyData = generateHistory(80, patientsData);

const defaultData = {
    patients: patientsData,
    doctors: [
        { id: 'd1', name: 'Carlos', lastName: 'Ramírez Torres', dni: '48923', password: '123456', cmp: '48923' }
    ],
    history: historyData,
    analysisCounter: 1080,
    patientsPerPage: 8,
    currentPage: 1
};

function getDB() {
    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        try { return JSON.parse(stored); } catch (e) { return JSON.parse(JSON.stringify(defaultData)); }
    }
    localStorage.setItem(DB_KEY, JSON.stringify(defaultData));
    return JSON.parse(JSON.stringify(defaultData));
}

function saveDB(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
}

window.DB = { get: getDB, save: saveDB, defaults: defaultData };