// ============================================================
// App: Navegación y lógica principal V6 - Mejorada
// ============================================================

const AppState = {
    currentScreen: 'home',
    userType: null,
    currentUser: null,
    isLoggedIn: false,
    uploadedImages: { od: false, oi: false },
    isAnalysisComplete: false,
    analysisResults: {
        probability: 75,
        cdRatio: 0.82,
        rnfl: 68,
        pio: 22,
        confidence: 91,
        risk: 'high'
    },
    patientData: {
        name: 'Rosa Elena',
        lastName: 'Mendoza Ríos',
        dni: '42156783',
        birthDate: '1958-03-14',
        age: 68,
        pioOd: 22,
        pioOi: 21
    },
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
            analyses: [
                { date: '2026-06-03', probability: 75, cdRatio: 0.82, rnfl: 68, pio: 22, risk: 'high' }
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
            analyses: [
                { date: '2026-06-01', probability: 55, cdRatio: 0.65, rnfl: 75, pio: 19, risk: 'medium' }
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
            analyses: [
                { date: '2026-05-28', probability: 25, cdRatio: 0.42, rnfl: 92, pio: 16, risk: 'low' }
            ]
        }
    ],
    users: [
        {
            type: 'patient',
            dni: '42156783',
            password: '123456',
            name: 'Rosa Elena',
            lastName: 'Mendoza Ríos',
            patientId: 1
        },
        {
            type: 'doctor',
            dni: '48923',
            password: '123456',
            name: 'Carlos',
            lastName: 'Ramírez Torres'
        }
    ],
    history: [],
    analysisCounter: 47
};

// ============================================================
// Navegación Principal
// ============================================================

function navigateTo(screen) {
    const mainContent = document.getElementById('mainContent');
    let html = '';

    switch (screen) {
        case 'home':
            html = renderHome();
            break;
        case 'patient':
            html = renderPatientPortal();
            break;
        case 'doctor':
            html = renderDoctorPortal();
            break;
        default:
            html = renderHome();
    }

    mainContent.innerHTML = html;
    AppState.currentScreen = screen;

    // Inicializar scripts después de renderizar
    if (screen === 'patient') {
        initPatientDashboard();
    }
    if (screen === 'doctor') {
        initDoctorDashboard();
    }
}

// ============================================================
// Render: Home (Landing Page)
// ============================================================

function renderHome() {
    return `
        <section class="screen active">
            <div class="hero-section">
                <div class="hero-content">
                    <div class="hero-badge"><i class="fas fa-robot"></i> IA aplicada a oftalmología</div>
                    <h1 class="hero-title">Apoyo al diagnóstico <br />preliminar de glaucoma</h1>
                    <p class="hero-subtitle">Sistema basado en inteligencia artificial que analiza imágenes de fondo de ojo para apoyar la detección temprana del glaucoma.</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg" onclick="showAuthModal('patient')"><i class="fas fa-user"></i> Soy Paciente</button>
                        <button class="btn btn-outline-light btn-lg" onclick="showAuthModal('doctor')"><i class="fas fa-user-md"></i> Soy Médico</button>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-brain"></i></div><div class="stat-info"><span class="stat-number">94%</span><span class="stat-label">Precisión del modelo</span></div></div>
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-clock"></i></div><div class="stat-info"><span class="stat-number">&lt;2 min</span><span class="stat-label">Tiempo de análisis</span></div></div>
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-shield-alt"></i></div><div class="stat-info"><span class="stat-number">100%</span><span class="stat-label">Datos seguros</span></div></div>
                </div>
            </div>
            <div class="features-section">
                <h2 class="section-title">¿Qué puedes hacer en GlaucoIA?</h2>
                <div class="features-grid">
                    <div class="feature-card" onclick="showAuthModal('patient')">
                        <div class="feature-icon" style="background: #dbeafe; color: #1d4ed8;"><i class="fas fa-user"></i></div>
                        <h3>Portal del Paciente</h3>
                        <p>Accede a tus resultados, aprende sobre el glaucoma y mantente informado sobre tu salud visual.</p>
                        <span class="feature-link">Explorar <i class="fas fa-arrow-right"></i></span>
                    </div>
                    <div class="feature-card" onclick="showAuthModal('doctor')">
                        <div class="feature-icon" style="background: #dcfce7; color: #15803d;"><i class="fas fa-stethoscope"></i></div>
                        <h3>Portal del Médico</h3>
                        <p>Gestiona pacientes, realiza análisis con IA y genera reportes clínicos detallados.</p>
                        <span class="feature-link">Explorar <i class="fas fa-arrow-right"></i></span>
                    </div>
                    <div class="feature-card" onclick="showAuthModal('patient')">
                        <div class="feature-icon" style="background: #fef3c7; color: #d97706;"><i class="fas fa-file-pdf"></i></div>
                        <h3>Reportes en PDF</h3>
                        <p>Genera reportes profesionales de diagnóstico para compartir con pacientes y colegas.</p>
                        <span class="feature-link">Explorar <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ============================================================
// Render: Patient Portal (Completo)
// ============================================================

function renderPatientPortal() {
    const name = AppState.currentUser?.name || 'Rosa Elena';
    const lastName = AppState.currentUser?.lastName || 'Mendoza Ríos';
    const initials = name.charAt(0) + lastName.charAt(0);

    return `
        <div class="patient-portal">
            <div class="screen-header">
                <h2><i class="fas fa-user" style="color: var(--primary);"></i> Portal del Paciente</h2>
                <p>Bienvenido a tu espacio de salud visual</p>
                <button class="btn btn-sm btn-outline-primary" onclick="logoutPatient()" style="margin-top:10px;">
                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                </button>
            </div>
            <div class="patient-sidebar-layout">
                <div class="patient-sidebar">
                    <div class="sidebar-profile">
                        <div class="profile-avatar" id="pAvatar">${initials}</div>
                        <div class="profile-name" id="pName">${name} ${lastName}</div>
                        <div class="profile-role">Paciente</div>
                    </div>
                    <nav class="sidebar-nav">
                        <button class="sidebar-nav-item active" data-panel="panel-dash" onclick="showPatientPanel('panel-dash')">
                            <i class="fas fa-home"></i> <span>Mi salud visual</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-upload" onclick="showPatientPanel('panel-upload')">
                            <i class="fas fa-upload"></i> <span>Subir imagen</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-result" onclick="showPatientPanel('panel-result')">
                            <i class="fas fa-chart-bar"></i> <span>Mi resultado</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-gradcam" onclick="showPatientPanel('panel-gradcam')">
                            <i class="fas fa-eye"></i> <span>Mapa de calor IA</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-edu" onclick="showPatientPanel('panel-edu')">
                            <i class="fas fa-book"></i> <span>Entender diagnóstico</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-glaucoma" onclick="showPatientPanel('panel-glaucoma')">
                            <i class="fas fa-eye"></i> <span>¿Qué es el glaucoma?</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-citas" onclick="showPatientPanel('panel-citas')">
                            <i class="fas fa-calendar"></i> <span>Mis citas</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-reporte" onclick="showPatientPanel('panel-reporte')">
                            <i class="fas fa-file-text"></i> <span>Mi reporte</span>
                        </button>
                    </nav>
                </div>
                <div class="patient-content">
                    <!-- Panel: Dashboard -->
                    <div class="patient-panel active" id="panel-dash">
                        <div class="dashboard-header">
                            <div class="patient-greeting">
                                <div class="patient-avatar-lg" id="pAvatarLg">${initials}</div>
                                <div>
                                    <h3 id="patientName">${name} ${lastName}</h3>
                                    <span class="patient-detail" id="patientDetail">68 años · Último análisis: 03 de junio, 2026</span>
                                </div>
                            </div>
                            <div class="risk-badge high" id="riskBadge"><i class="fas fa-exclamation-triangle"></i> Riesgo alto detectado</div>
                        </div>
                        <div class="dashboard-alert">
                            <div class="alert alert-danger">
                                <i class="fas fa-exclamation-triangle"></i>
                                <div><strong>Acción recomendada</strong><p>Su médico recomienda una consulta de seguimiento pronto.</p></div>
                                <button class="btn btn-sm btn-outline-danger" onclick="showPatientPanel('panel-citas')">Agendar cita</button>
                            </div>
                        </div>
                        <div class="dashboard-grid">
                            <div class="result-card" onclick="showPatientPanel('panel-result')">
                                <div class="result-header"><span class="result-label"><i class="fas fa-chart-bar"></i> Mi último resultado</span><span class="result-value" id="dashProb">75%</span></div>
                                <div class="result-progress"><div class="progress-bar" id="dashProgress" style="width:75%; background: var(--danger);"></div></div>
                                <span class="result-sub">Probabilidad de glaucoma</span>
                            </div>
                            <div class="result-card" onclick="showPatientPanel('panel-citas')">
                                <div class="result-header"><span class="result-label"><i class="fas fa-calendar"></i> Próxima cita</span><span class="result-value" style="font-size:22px;">15 Jun</span></div>
                                <div class="result-detail">Dr. Ramírez · 10:00 am</div>
                                <span class="result-sub badge-confirmed">Confirmada</span>
                            </div>
                        </div>
                        <div class="patient-actions">
                            <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-upload')"><i class="fas fa-upload"></i> Subir imagen</button>
                            <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-result')"><i class="fas fa-chart-bar"></i> Ver resultado</button>
                            <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-gradcam')"><i class="fas fa-eye"></i> Mapa de calor</button>
                            <button class="btn btn-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> Mi reporte</button>
                        </div>
                    </div>

                    <!-- Panel: Subir Imagen -->
                    <div class="patient-panel" id="panel-upload">
                        <div class="panel-header">
                            <h3><i class="fas fa-upload"></i> Subir imagen de fondo de ojo</h3>
                        </div>
                        <div class="upload-content">
                            <div class="alert alert-info">
                                <i class="fas fa-info-circle"></i>
                                <span>Simula la carga de imágenes de fondo de ojo. Haz clic en cada ojo para cargar la imagen.</span>
                            </div>
                            <div class="image-upload-grid">
                                <div class="upload-zone" onclick="simulatePatientUpload('od')">
                                    <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                    <h5>Ojo Derecho (OD)</h5>
                                    <p>Haz clic para simular carga</p>
                                    <span class="upload-status" id="pUploadOd">Pendiente</span>
                                </div>
                                <div class="upload-zone" onclick="simulatePatientUpload('oi')">
                                    <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                    <h5>Ojo Izquierdo (OI)</h5>
                                    <p>Haz clic para simular carga</p>
                                    <span class="upload-status" id="pUploadOi">Pendiente</span>
                                </div>
                            </div>
                            <div id="pUploadResult" style="display:none;" class="upload-result">
                                <div class="alert alert-success">
                                    <i class="fas fa-check-circle"></i>
                                    <div>
                                        <strong>Imágenes cargadas correctamente</strong>
                                        <p>La IA está analizando tus imágenes. Recibirás un resultado preliminar.</p>
                                    </div>
                                </div>
                                <button class="btn btn-primary" onclick="simulatePatientAnalysis()">
                                    <i class="fas fa-brain"></i> Analizar imágenes (simulación)
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Resultado -->
                    <div class="patient-panel" id="panel-result">
                        <div class="panel-header">
                            <h3><i class="fas fa-chart-bar"></i> Mi resultado</h3>
                            <button class="btn btn-sm btn-outline-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> Reporte</button>
                        </div>
                        <div class="result-detail-card">
                            <div class="detail-header">
                                <h3>Resultado del análisis</h3>
                                <span class="badge badge-danger" id="resultBadge">Riesgo alto</span>
                            </div>
                            <div class="detail-grid">
                                <div class="metric-card"><span class="metric-label">Probabilidad</span><span class="metric-value" style="color: var(--danger);" id="resultProb">75%</span></div>
                                <div class="metric-card"><span class="metric-label">Relación Copa/Disco</span><span class="metric-value" style="color: var(--danger);" id="resultCd">0.82</span></div>
                                <div class="metric-card"><span class="metric-label">Grosor RNFL</span><span class="metric-value" style="color: var(--warning);" id="resultRnfl">68 µm</span></div>
                                <div class="metric-card"><span class="metric-label">Presión Intraocular</span><span class="metric-value" style="color: var(--warning);" id="resultPio">22 mmHg</span></div>
                            </div>
                            <div class="detail-interpretation">
                                <h4><i class="fas fa-lightbulb"></i> ¿Qué significa esto?</h4>
                                <p>La IA encontró señales en sus imágenes que podrían indicar glaucoma. Su médico revisará esto con usted en su próxima cita. <strong>No entre en pánico</strong> — detectarlo temprano es lo mejor que puede pasar.</p>
                            </div>
                            <div class="detail-actions">
                                <button class="btn btn-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> Descargar reporte</button>
                                <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-gradcam')"><i class="fas fa-eye"></i> Ver mapa de calor</button>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Grad-CAM -->
                    <div class="patient-panel" id="panel-gradcam">
                        <div class="panel-header">
                            <h3><i class="fas fa-eye"></i> Mapa de calor - Explicabilidad IA</h3>
                        </div>
                        <div class="gradcam-content">
                            <div class="alert alert-info">
                                <i class="fas fa-info-circle"></i>
                                <span>El mapa de calor muestra las regiones que la IA consideró más relevantes para su clasificación. Las zonas en rojo/naranja indican alta relevancia.</span>
                            </div>
                            <div class="gradcam-grid">
                                <div class="gradcam-card">
                                    <div class="gradcam-image">
                                        <svg viewBox="0 0 200 200" style="width:100%; height:auto; max-height:220px; background:#0d1117; border-radius:8px;">
                                            <defs>
                                                <radialGradient id="heat1" cx="45%" cy="45%">
                                                    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.95"/>
                                                    <stop offset="30%" stop-color="#ff6600" stop-opacity="0.8"/>
                                                    <stop offset="60%" stop-color="#ffaa00" stop-opacity="0.5"/>
                                                    <stop offset="100%" stop-color="#0044aa" stop-opacity="0.05"/>
                                                </radialGradient>
                                                <radialGradient id="heat2" cx="55%" cy="60%">
                                                    <stop offset="0%" stop-color="#ff4400" stop-opacity="0.7"/>
                                                    <stop offset="50%" stop-color="#ff8800" stop-opacity="0.4"/>
                                                    <stop offset="100%" stop-color="transparent"/>
                                                </radialGradient>
                                            </defs>
                                            <ellipse cx="100" cy="100" rx="80" ry="72" fill="#1a2035"/>
                                            <ellipse cx="100" cy="100" rx="60" ry="55" fill="none" stroke="#2d3a5a" stroke-width="1.5" opacity="0.6"/>
                                            <circle cx="100" cy="100" r="28" fill="#E8572A" opacity="0.6"/>
                                            <circle cx="100" cy="100" r="10" fill="#1a0a00"/>
                                            <ellipse cx="98" cy="95" rx="42" ry="35" fill="url(#heat1)" opacity="0.85"/>
                                            <ellipse cx="88" cy="108" rx="22" ry="18" fill="url(#heat2)" opacity="0.7"/>
                                            <circle cx="100" cy="95" r="42" fill="none" stroke="#ff4400" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>
                                            <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">Ojo Derecho (OD)</text>
                                        </svg>
                                        <span class="gradcam-label">OD</span>
                                    </div>
                                    <div class="gradcam-info">
                                        <span class="gradcam-badge high">Alta activación</span>
                                        <p>El modelo se enfoca en la región del disco óptico y la copa, donde se observa una relación C/D elevada (0.82).</p>
                                    </div>
                                </div>
                                <div class="gradcam-card">
                                    <div class="gradcam-image">
                                        <svg viewBox="0 0 200 200" style="width:100%; height:auto; max-height:220px; background:#0d1117; border-radius:8px;">
                                            <defs>
                                                <radialGradient id="heat3" cx="50%" cy="45%">
                                                    <stop offset="0%" stop-color="#ff3300" stop-opacity="0.8"/>
                                                    <stop offset="35%" stop-color="#ff7700" stop-opacity="0.6"/>
                                                    <stop offset="65%" stop-color="#ffbb00" stop-opacity="0.3"/>
                                                    <stop offset="100%" stop-color="#0044aa" stop-opacity="0.03"/>
                                                </radialGradient>
                                                <radialGradient id="heat4" cx="40%" cy="55%">
                                                    <stop offset="0%" stop-color="#ff5500" stop-opacity="0.5"/>
                                                    <stop offset="60%" stop-color="#ff9900" stop-opacity="0.3"/>
                                                    <stop offset="100%" stop-color="transparent"/>
                                                </radialGradient>
                                            </defs>
                                            <ellipse cx="100" cy="100" rx="80" ry="72" fill="#1a2035"/>
                                            <ellipse cx="100" cy="100" rx="60" ry="55" fill="none" stroke="#2d3a5a" stroke-width="1.5" opacity="0.6"/>
                                            <circle cx="100" cy="100" r="28" fill="#E8572A" opacity="0.5"/>
                                            <circle cx="100" cy="100" r="10" fill="#1a0a00"/>
                                            <ellipse cx="102" cy="96" rx="38" ry="30" fill="url(#heat3)" opacity="0.75"/>
                                            <ellipse cx="85" cy="108" rx="18" ry="14" fill="url(#heat4)" opacity="0.6"/>
                                            <circle cx="100" cy="96" r="38" fill="none" stroke="#ff6600" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
                                            <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">Ojo Izquierdo (OI)</text>
                                        </svg>
                                        <span class="gradcam-label">OI</span>
                                    </div>
                                    <div class="gradcam-info">
                                        <span class="gradcam-badge medium">Activación media</span>
                                        <p>El modelo muestra activación en la zona nasal inferior del anillo neuroretinal, compatible con pérdida de fibras nerviosas.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="gradcam-legend">
                                <div class="legend-item"><span style="background:#ff2200;"></span> Alta relevancia</div>
                                <div class="legend-item"><span style="background:#ff8800;"></span> Relevancia media</div>
                                <div class="legend-item"><span style="background:#ffdd00;"></span> Baja relevancia</div>
                            </div>
                            <div class="gradcam-interpretation">
                                <h4><i class="fas fa-lightbulb"></i> Interpretación del mapa</h4>
                                <p>El modelo focalizó su atención principalmente en la región del <strong>disco óptico y la copa</strong>, donde se observa una relación C/D elevada (0.82). La zona nasal inferior del anillo neuroretinal muestra el mayor nivel de activación, compatible con pérdida de fibras nerviosas característica del glaucoma.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Educación -->
                    <div class="patient-panel" id="panel-edu">
                        <div class="panel-header">
                            <h3><i class="fas fa-book"></i> Entender mi diagnóstico</h3>
                        </div>
                        <div class="edu-list">
                            <div class="edu-card" onclick="toggleEduCard(this)">
                                <div class="edu-header">
                                    <div class="edu-icon" style="background: var(--danger-light); color: var(--danger);">75%</div>
                                    <div class="edu-title">
                                        <h4>¿Qué significa el 75%?</h4>
                                        <p>La probabilidad de glaucoma</p>
                                    </div>
                                    <i class="fas fa-chevron-down edu-toggle"></i>
                                </div>
                                <div class="edu-body" style="display:none;">
                                    <p>El 75% significa que de cada 100 personas con imágenes similares a las suyas, 75 tienen glaucoma. Es una señal importante, no un diagnóstico definitivo.</p>
                                    <div class="edu-bar"><div class="edu-bar-fill" style="width:75%; background: var(--danger);"></div></div>
                                    <div class="edu-bar-labels"><span>25% sin glaucoma</span><span>75% con glaucoma</span></div>
                                    <div class="alert alert-info" style="font-size:14px; margin-top:8px;"><i class="fas fa-info-circle"></i> Solo su médico puede confirmar el diagnóstico final.</div>
                                </div>
                            </div>
                            <div class="edu-card" onclick="toggleEduCard(this)">
                                <div class="edu-header">
                                    <div class="edu-icon" style="background: var(--primary-light); color: var(--primary);"><i class="fas fa-circle"></i></div>
                                    <div class="edu-title">
                                        <h4>La relación copa/disco (C/D)</h4>
                                        <p>¿Qué es y por qué importa?</p>
                                    </div>
                                    <i class="fas fa-chevron-down edu-toggle"></i>
                                </div>
                                <div class="edu-body" style="display:none;">
                                    <p>El nervio óptico tiene dos partes: el disco (el borde rosado) y la copa (el centro más claro). Cuando la copa se agranda, puede ser señal de glaucoma.</p>
                                    <div class="edu-visual">
                                        <div><span>Normal C/D 0.4</span> <span style="font-size:20px;">●</span></div>
                                        <div><span>Su C/D: 0.82</span> <span style="font-size:20px; color: var(--danger);">●</span></div>
                                    </div>
                                    <div class="alert alert-warning" style="font-size:14px; margin-top:8px;"><i class="fas fa-exclamation-circle"></i> Una copa más grande indica que el nervio pudo haber sufrido daño.</div>
                                </div>
                            </div>
                            <div class="edu-card" onclick="toggleEduCard(this)">
                                <div class="edu-header">
                                    <div class="edu-icon" style="background: var(--secondary-light); color: var(--secondary);"><i class="fas fa-brain"></i></div>
                                    <div class="edu-title">
                                        <h4>¿Cómo analiza la IA mis imágenes?</h4>
                                        <p>El proceso explicado paso a paso</p>
                                    </div>
                                    <i class="fas fa-chevron-down edu-toggle"></i>
                                </div>
                                <div class="edu-body" style="display:none;">
                                    <div class="edu-steps">
                                        <div><span class="step-num">1</span> La cámara toma una fotografía del fondo de su ojo</div>
                                        <div><span class="step-num">2</span> La IA estudia más de 50 características del nervio óptico</div>
                                        <div><span class="step-num">3</span> La compara con miles de imágenes de personas con y sin glaucoma</div>
                                        <div><span class="step-num">4</span> Entrega un porcentaje de probabilidad al médico</div>
                                    </div>
                                </div>
                            </div>
                            <div class="edu-card" onclick="toggleEduCard(this)">
                                <div class="edu-header">
                                    <div class="edu-icon" style="background: var(--warning-light); color: var(--warning);"><i class="fas fa-heartbeat"></i></div>
                                    <div class="edu-title">
                                        <h4>¿Qué debo hacer ahora?</h4>
                                        <p>Próximos pasos para usted</p>
                                    </div>
                                    <i class="fas fa-chevron-down edu-toggle"></i>
                                </div>
                                <div class="edu-body" style="display:none;">
                                    <div class="alert alert-success" style="font-size:14px;"><i class="fas fa-check-circle"></i> Asista a su cita de seguimiento el 15 de junio con el Dr. Ramírez</div>
                                    <div class="alert alert-info" style="font-size:14px;"><i class="fas fa-pills"></i> Si le recetan gotas, úselas exactamente como le indiquen</div>
                                    <div class="alert alert-info" style="font-size:14px;"><i class="fas fa-sun"></i> Use lentes de sol al salir y evite frotarse los ojos</div>
                                    <button class="btn btn-primary btn-sm" onclick="showPatientPanel('panel-citas')"><i class="fas fa-calendar"></i> Ver mi cita</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Glaucoma -->
                    <div class="patient-panel" id="panel-glaucoma">
                        <div class="panel-header">
                            <h3><i class="fas fa-eye"></i> ¿Qué es el glaucoma?</h3>
                        </div>
                        <div class="glaucoma-content">
                            <div class="card" style="background: var(--primary-light); border-color: #B5D4F4; padding:20px; border-radius: var(--radius);">
                                <p style="font-size:18px; font-weight:600; color: #0C447C;"><i class="fas fa-eye"></i> El glaucoma en palabras sencillas</p>
                                <p style="font-size:16px; color: #185FA5; line-height:1.8;">El glaucoma es una enfermedad que daña el nervio óptico, que es el cable que conecta sus ojos con su cerebro. Generalmente ocurre cuando la presión dentro del ojo es demasiado alta, y puede causar pérdida de visión si no se trata a tiempo.</p>
                            </div>
                            <h4 style="margin-top: 20px; font-size:18px;">Señales de alerta</h4>
                            <div class="alert-list">
                                <div class="alert-item"><i class="fas fa-eye-slash" style="color: var(--danger);"></i> Pérdida gradual de la visión periférica (los bordes)</div>
                                <div class="alert-item"><i class="fas fa-tint" style="color: var(--warning);"></i> Visión borrosa o ver halos alrededor de las luces</div>
                                <div class="alert-item"><i class="fas fa-headache" style="color: var(--warning);"></i> Dolor en los ojos o dolores de cabeza frecuentes</div>
                                <div class="alert-item"><i class="fas fa-sun" style="color: #854F0B;"></i> Dificultad para adaptarse a cuartos oscuros</div>
                            </div>
                            <div class="alert alert-success">
                                <i class="fas fa-shield-alt"></i>
                                <div><strong>La buena noticia</strong><p>El glaucoma tratado a tiempo rara vez causa ceguera. Con gotas o cirugía, la mayoría de pacientes mantienen buena visión por muchos años.</p></div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Citas -->
                    <div class="patient-panel" id="panel-citas">
                        <div class="panel-header">
                            <h3><i class="fas fa-calendar"></i> Mis citas</h3>
                        </div>
                        <div class="citas-content">
                            <div class="cita-card proxima">
                                <div class="cita-badge">Próxima cita</div>
                                <h4>15 de junio, 2026</h4>
                                <p>10:00 am · Consultorio 3</p>
                                <div class="cita-doctor">
                                    <div class="doctor-avatar">CR</div>
                                    <div><strong>Dr. Carlos Ramírez Torres</strong><br><span>Oftalmólogo · CMP 48923</span></div>
                                </div>
                                <p style="font-size:14px; color: var(--text-muted); margin-top:8px;">Clínica San Lucas · Jr. Las Américas 340, Chiclayo</p>
                            </div>
                            <div class="alert alert-warning" style="margin-top:12px;">
                                <i class="fas fa-bell"></i>
                                <div style="font-size:14px;">Recuerde llegar 15 minutos antes. Traiga sus anteojos y una lista de sus medicamentos actuales.</div>
                            </div>
                            <h4 style="margin-top:20px; font-size:17px;">Historial de citas</h4>
                            <div class="cita-historial">
                                <div class="cita-item"><span class="cita-status done"><i class="fas fa-check"></i></span><div><strong>03 de junio, 2026</strong><span>Dr. Ramírez · Análisis IA realizado</span></div></div>
                                <div class="cita-item"><span class="cita-status done"><i class="fas fa-check"></i></span><div><strong>10 de enero, 2026</strong><span>Dr. Ramírez · Control de presión</span></div></div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Reporte -->
                    <div class="patient-panel" id="panel-reporte">
                        <div class="panel-header">
                            <h3><i class="fas fa-file-text"></i> Mi reporte</h3>
                            <button class="btn btn-sm btn-primary" onclick="generatePatientPDF()"><i class="fas fa-file-pdf"></i> PDF</button>
                        </div>
                        <div class="reporte-content" id="patientReportContent">
                            <div class="report-header-small">
                                <div><i class="fas fa-eye"></i> GlaucoIA</div>
                                <div><span class="report-badge-sm">REPORTE DE ANÁLISIS</span><br><span class="report-date-sm" id="reportDate">03 de junio, 2026</span></div>
                            </div>
                            <div class="report-body-small">
                                <div class="report-row">
                                    <div><strong id="reportName">Rosa Elena Mendoza Ríos</strong><br><span id="reportDni">DNI: 42156783 · 68 años</span></div>
                                    <div><strong>Dr. Carlos Ramírez Torres</strong><br><span>CMP: 48923 · Oftalmólogo</span></div>
                                </div>
                                <div class="report-metrics-small">
                                    <div><span>Probabilidad</span><strong style="color: var(--danger);" id="reportProb">75%</strong></div>
                                    <div><span>C/D Ratio</span><strong style="color: var(--danger);" id="reportCd">0.82</strong></div>
                                    <div><span>RNFL</span><strong style="color: var(--warning);" id="reportRnfl">68 µm</strong></div>
                                    <div><span>Confianza IA</span><strong style="color: var(--success);" id="reportConf">91%</strong></div>
                                </div>
                                <div class="report-interp-small">
                                    <p>Los indicadores morfológicos sugieren daño estructural significativo en el nervio óptico. Se recomienda evaluación perimetral y tomografía OCT de forma urgente.</p>
                                </div>
                                <div class="report-footer-small">
                                    <p>Este reporte es de carácter preliminar y de apoyo al diagnóstico. No reemplaza la evaluación clínica del especialista.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// Render: Doctor Portal (Completo)
// ============================================================

function renderDoctorPortal() {
    const name = AppState.currentUser?.name || 'Carlos';
    const lastName = AppState.currentUser?.lastName || 'Ramírez';
    const initials = name.charAt(0) + lastName.charAt(0);

    return `
        <div class="doctor-portal">
            <div class="screen-header">
                <h2><i class="fas fa-user-md" style="color: var(--primary);"></i> Portal del Médico</h2>
                <p>Gestión y diagnóstico asistido por IA</p>
                <button class="btn btn-sm btn-outline-primary" onclick="logoutDoctor()" style="margin-top:10px;">
                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                </button>
            </div>
            <div class="doctor-layout">
                <div class="doctor-sidebar">
                    <div class="sidebar-profile">
                        <div class="profile-avatar" id="dAvatar">${initials}</div>
                        <div class="profile-name" id="dName">Dr. ${name} ${lastName}</div>
                        <div class="profile-role">Oftalmólogo</div>
                    </div>
                    <nav class="sidebar-nav">
                        <button class="sidebar-nav-item active" data-dpanel="dpanel-dash" onclick="showDoctorPanel('dpanel-dash')">
                            <i class="fas fa-home"></i> <span>Panel principal</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-patient" onclick="showDoctorPanel('dpanel-patient')">
                            <i class="fas fa-user-plus"></i> <span>Nuevo paciente</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-analysis" onclick="showDoctorPanel('dpanel-analysis')">
                            <i class="fas fa-upload"></i> <span>Nuevo análisis</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-history" onclick="showDoctorPanel('dpanel-history')">
                            <i class="fas fa-history"></i> <span>Historial</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-reports" onclick="showDoctorPanel('dpanel-reports')">
                            <i class="fas fa-file-text"></i> <span>Reportes</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-help" onclick="showDoctorPanel('dpanel-help')">
                            <i class="fas fa-question-circle"></i> <span>Ayuda</span>
                        </button>
                    </nav>
                </div>
                <div class="doctor-content">
                    <!-- Panel: Dashboard -->
                    <div class="doctor-panel active" id="dpanel-dash">
                        <div style="margin-bottom:16px;">
                            <h3 style="font-size:20px;" id="doctorGreeting">Buenos días, Dr. ${name}</h3>
                            <p style="color: var(--text-muted); font-size:15px;" id="doctorDate">Lunes 5 de junio de 2026 · Consulta Oftalmología</p>
                        </div>
                        <div class="stat-grid">
                            <div class="stat-card"><div class="stat-num" id="totalPatients">47</div><div class="stat-label"><i class="fas fa-users"></i> Pacientes registrados</div></div>
                            <div class="stat-card"><div class="stat-num" id="monthlyAnalyses">12</div><div class="stat-label"><i class="fas fa-chart-bar"></i> Análisis este mes</div></div>
                            <div class="stat-card"><div class="stat-num" id="highRiskCount">3</div><div class="stat-label"><i class="fas fa-exclamation-triangle" style="color:var(--warning);"></i> Riesgo alto detectado</div></div>
                        </div>
                        <div class="alert alert-warning" style="margin-bottom:16px;">
                            <i class="fas fa-clock"></i>
                            <span>Tiene <span id="pendingCount">2</span> análisis pendientes de revisión.</span>
                            <button class="btn btn-sm btn-outline-warning" onclick="showDoctorPanel('dpanel-history')">Ver historial</button>
                        </div>
                        <div class="table-wrap">
                            <div class="table-header">
                                <span style="font-size:15px; font-weight:500;">Últimos pacientes analizados</span>
                                <button class="btn btn-primary btn-sm" onclick="showDoctorPanel('dpanel-patient')"><i class="fas fa-user-plus"></i> Nuevo</button>
                            </div>
                            <table>
                                <thead><tr><th>Paciente</th><th>Edad</th><th>Último análisis</th><th>Resultado</th><th>Acción</th></tr></thead>
                                <tbody id="recentPatientsTable"></tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Panel: Nuevo Paciente -->
                    <div class="doctor-panel" id="dpanel-patient">
                        <div class="panel-header">
                            <h3><i class="fas fa-user-plus"></i> Registrar nuevo paciente</h3>
                        </div>
                        <div class="form-card">
                            <h4>Datos personales</h4>
                            <div class="form-grid">
                                <div class="form-group"><label>Nombres</label><input type="text" class="form-control" id="docName" value="Rosa Elena" /></div>
                                <div class="form-group"><label>Apellidos</label><input type="text" class="form-control" id="docLastName" value="Mendoza Ríos" /></div>
                                <div class="form-group"><label>DNI</label><input type="text" class="form-control" id="docDni" value="42156783" /></div>
                                <div class="form-group"><label>Fecha de nacimiento</label><input type="date" class="form-control" id="docBirth" value="1958-03-14" /></div>
                                <div class="form-group"><label>PIO OD (mmHg)</label><input type="number" class="form-control" id="docPioOd" value="22" /></div>
                                <div class="form-group"><label>PIO OI (mmHg)</label><input type="number" class="form-control" id="docPioOi" value="21" /></div>
                            </div>
                            <div class="form-actions">
                                <button class="btn btn-outline-primary" onclick="showDoctorPanel('dpanel-dash')">Cancelar</button>
                                <button class="btn btn-primary" onclick="savePatientAndGoToAnalysis()"><i class="fas fa-arrow-right"></i> Guardar y analizar</button>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Análisis -->
                    <div class="doctor-panel" id="dpanel-analysis">
                        <div class="panel-header">
                            <h3><i class="fas fa-brain"></i> Análisis con IA</h3>
                            <span id="analysisPatientName" style="font-size:14px; color:var(--text-muted);">Paciente: Rosa Mendoza</span>
                        </div>
                        <div class="analysis-container">
                            <div class="analysis-stepper" id="analysisStepper">
                                <div class="step-item active" data-step="1"><div class="step-circle">1</div><span>Datos</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="2"><div class="step-circle">2</div><span>Imágenes</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="3"><div class="step-circle">3</div><span>Análisis</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="4"><div class="step-circle">4</div><span>Resultados</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="5"><div class="step-circle">5</div><span>Mapa IA</span></div>
                            </div>

                            <!-- Step 1 -->
                            <div class="step-content" id="dstep1">
                                <div class="form-card">
                                    <h4>Datos del paciente</h4>
                                    <div class="form-grid">
                                        <div class="form-group"><label>Nombres</label><input type="text" class="form-control" id="aName" value="Rosa Elena" /></div>
                                        <div class="form-group"><label>Apellidos</label><input type="text" class="form-control" id="aLastName" value="Mendoza Ríos" /></div>
                                        <div class="form-group"><label>DNI</label><input type="text" class="form-control" id="aDni" value="42156783" /></div>
                                        <div class="form-group"><label>Edad</label><input type="number" class="form-control" id="aAge" value="68" /></div>
                                    </div>
                                    <div class="form-actions">
                                        <button class="btn btn-primary" onclick="goToStep(2)"><i class="fas fa-arrow-right"></i> Siguiente</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 2 -->
                            <div class="step-content" id="dstep2" style="display:none;">
                                <div class="form-card">
                                    <h4>Carga de imágenes de fondo de ojo</h4>
                                    <div class="image-upload-grid">
                                        <div class="upload-zone" onclick="simulateUpload('od')">
                                            <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                            <h5>Ojo Derecho (OD)</h5>
                                            <p>Haz clic para simular carga</p>
                                            <span class="upload-status" id="uploadOd">Pendiente</span>
                                        </div>
                                        <div class="upload-zone" onclick="simulateUpload('oi')">
                                            <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                            <h5>Ojo Izquierdo (OI)</h5>
                                            <p>Haz clic para simular carga</p>
                                            <span class="upload-status" id="uploadOi">Pendiente</span>
                                        </div>
                                    </div>
                                    <div class="form-actions">
                                        <button class="btn btn-outline-primary" onclick="goToStep(1)"><i class="fas fa-arrow-left"></i> Atrás</button>
                                        <button class="btn btn-primary" id="analyzeBtn" disabled onclick="goToStep(3)"><i class="fas fa-brain"></i> Iniciar análisis</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 3 -->
                            <div class="step-content" id="dstep3" style="display:none;">
                                <div class="processing-card">
                                    <div class="processing-animation">
                                        <div class="spinner"></div>
                                        <i class="fas fa-brain" style="font-size:44px; color:var(--primary); position:absolute;"></i>
                                    </div>
                                    <h4>Analizando imágenes</h4>
                                    <p>La IA está procesando las imágenes de fondo de ojo...</p>
                                    <div class="processing-steps">
                                        <div class="processing-step done"><i class="fas fa-check-circle"></i> Pre-procesamiento de imagen</div>
                                        <div class="processing-step done"><i class="fas fa-check-circle"></i> Segmentación del disco óptico</div>
                                        <div class="processing-step active" id="procStep3"><div class="spinner-small"></div> Extracción de características</div>
                                        <div class="processing-step pending" id="procStep4"><i class="far fa-circle"></i> Clasificación ResNet-50</div>
                                        <div class="processing-step pending" id="procStep5"><i class="far fa-circle"></i> Generación de mapa de atención</div>
                                    </div>
                                    <button class="btn btn-primary" id="showResultsBtn" style="display:none;" onclick="goToStep(4)"><i class="fas fa-chart-bar"></i> Ver resultados</button>
                                </div>
                            </div>

                            <!-- Step 4: Resultados -->
                            <div class="step-content" id="dstep4" style="display:none;">
                                <div class="results-card">
                                    <div class="results-header">
                                        <div class="results-summary">
                                            <span class="badge badge-danger"><i class="fas fa-exclamation-triangle"></i> Riesgo alto</span>
                                            <h3>Resultado del diagnóstico</h3>
                                            <p id="resultPatientName">Rosa Mendoza · 68 años</p>
                                        </div>
                                        <div class="results-probability">
                                            <div class="probability-circle">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" stroke-width="8"/>
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" stroke-width="8" stroke-dasharray="263.89" stroke-dashoffset="65.97" stroke-linecap="round" transform="rotate(-90 50 50)"/>
                                                </svg>
                                                <span class="probability-text">75%</span>
                                            </div>
                                            <span class="probability-label">Probabilidad estimada</span>
                                        </div>
                                    </div>
                                    <div class="results-metrics">
                                        <div class="metric-card"><span class="metric-label">C/D Ratio</span><span class="metric-value" style="color:var(--danger);">0.82</span><span class="metric-normal">Normal: &lt; 0.5</span></div>
                                        <div class="metric-card"><span class="metric-label">RNFL</span><span class="metric-value" style="color:var(--warning);">68 µm</span><span class="metric-normal">Normal: &gt; 80 µm</span></div>
                                        <div class="metric-card"><span class="metric-label">PIO</span><span class="metric-value" style="color:var(--warning);">22 mmHg</span><span class="metric-normal">Límite: ≤ 21 mmHg</span></div>
                                        <div class="metric-card"><span class="metric-label">Confianza IA</span><span class="metric-value" style="color:var(--success);">91%</span><span class="metric-normal">Alta calidad</span></div>
                                    </div>
                                    <div class="alert alert-danger">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <div><strong>Interpretación clínica</strong><p>Los indicadores morfológicos sugieren daño estructural significativo en el nervio óptico. Se recomienda evaluación perimetral y OCT.</p></div>
                                    </div>
                                    <div class="results-actions">
                                        <button class="btn btn-outline-primary" onclick="resetAnalysis()"><i class="fas fa-redo"></i> Nuevo análisis</button>
                                        <button class="btn btn-outline-primary" onclick="goToStep(5)"><i class="fas fa-eye"></i> Ver mapa IA</button>
                                        <button class="btn btn-primary" onclick="saveAnalysisResult()"><i class="fas fa-save"></i> Guardar resultado</button>
                                        <button class="btn btn-primary" onclick="showDoctorPanel('dpanel-reports')"><i class="fas fa-file-pdf"></i> Generar reporte</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 5: Grad-CAM -->
                            <div class="step-content" id="dstep5" style="display:none;">
                                <div class="gradcam-content">
                                    <div class="alert alert-info">
                                        <i class="fas fa-info-circle"></i>
                                        <span>El mapa de calor muestra las regiones que la IA consideró más relevantes para su clasificación. Las zonas en rojo/naranja indican alta relevancia.</span>
                                    </div>
                                    <div class="gradcam-grid">
                                        <div class="gradcam-card">
                                            <div class="gradcam-image">
                                                <svg viewBox="0 0 200 200" style="width:100%; height:auto; max-height:220px; background:#0d1117; border-radius:8px;">
                                                    <defs>
                                                        <radialGradient id="dheat1" cx="45%" cy="45%">
                                                            <stop offset="0%" stop-color="#ff2200" stop-opacity="0.95"/>
                                                            <stop offset="30%" stop-color="#ff6600" stop-opacity="0.8"/>
                                                            <stop offset="60%" stop-color="#ffaa00" stop-opacity="0.5"/>
                                                            <stop offset="100%" stop-color="#0044aa" stop-opacity="0.05"/>
                                                        </radialGradient>
                                                        <radialGradient id="dheat2" cx="55%" cy="60%">
                                                            <stop offset="0%" stop-color="#ff4400" stop-opacity="0.7"/>
                                                            <stop offset="50%" stop-color="#ff8800" stop-opacity="0.4"/>
                                                            <stop offset="100%" stop-color="transparent"/>
                                                        </radialGradient>
                                                    </defs>
                                                    <ellipse cx="100" cy="100" rx="80" ry="72" fill="#1a2035"/>
                                                    <ellipse cx="100" cy="100" rx="60" ry="55" fill="none" stroke="#2d3a5a" stroke-width="1.5" opacity="0.6"/>
                                                    <circle cx="100" cy="100" r="28" fill="#E8572A" opacity="0.6"/>
                                                    <circle cx="100" cy="100" r="10" fill="#1a0a00"/>
                                                    <ellipse cx="98" cy="95" rx="42" ry="35" fill="url(#dheat1)" opacity="0.85"/>
                                                    <ellipse cx="88" cy="108" rx="22" ry="18" fill="url(#dheat2)" opacity="0.7"/>
                                                    <circle cx="100" cy="95" r="42" fill="none" stroke="#ff4400" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>
                                                    <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">Ojo Derecho (OD)</text>
                                                </svg>
                                                <span class="gradcam-label">OD</span>
                                            </div>
                                            <div class="gradcam-info">
                                                <span class="gradcam-badge high">Alta activación</span>
                                                <p>El modelo se enfoca en la región del disco óptico y la copa, donde se observa una relación C/D elevada (0.82).</p>
                                            </div>
                                        </div>
                                        <div class="gradcam-card">
                                            <div class="gradcam-image">
                                                <svg viewBox="0 0 200 200" style="width:100%; height:auto; max-height:220px; background:#0d1117; border-radius:8px;">
                                                    <defs>
                                                        <radialGradient id="dheat3" cx="50%" cy="45%">
                                                            <stop offset="0%" stop-color="#ff3300" stop-opacity="0.8"/>
                                                            <stop offset="35%" stop-color="#ff7700" stop-opacity="0.6"/>
                                                            <stop offset="65%" stop-color="#ffbb00" stop-opacity="0.3"/>
                                                            <stop offset="100%" stop-color="#0044aa" stop-opacity="0.03"/>
                                                        </radialGradient>
                                                        <radialGradient id="dheat4" cx="40%" cy="55%">
                                                            <stop offset="0%" stop-color="#ff5500" stop-opacity="0.5"/>
                                                            <stop offset="60%" stop-color="#ff9900" stop-opacity="0.3"/>
                                                            <stop offset="100%" stop-color="transparent"/>
                                                        </radialGradient>
                                                    </defs>
                                                    <ellipse cx="100" cy="100" rx="80" ry="72" fill="#1a2035"/>
                                                    <ellipse cx="100" cy="100" rx="60" ry="55" fill="none" stroke="#2d3a5a" stroke-width="1.5" opacity="0.6"/>
                                                    <circle cx="100" cy="100" r="28" fill="#E8572A" opacity="0.5"/>
                                                    <circle cx="100" cy="100" r="10" fill="#1a0a00"/>
                                                    <ellipse cx="102" cy="96" rx="38" ry="30" fill="url(#dheat3)" opacity="0.75"/>
                                                    <ellipse cx="85" cy="108" rx="18" ry="14" fill="url(#dheat4)" opacity="0.6"/>
                                                    <circle cx="100" cy="96" r="38" fill="none" stroke="#ff6600" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
                                                    <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">Ojo Izquierdo (OI)</text>
                                                </svg>
                                                <span class="gradcam-label">OI</span>
                                            </div>
                                            <div class="gradcam-info">
                                                <span class="gradcam-badge medium">Activación media</span>
                                                <p>El modelo muestra activación en la zona nasal inferior del anillo neuroretinal.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gradcam-legend">
                                        <div class="legend-item"><span style="background:#ff2200;"></span> Alta relevancia</div>
                                        <div class="legend-item"><span style="background:#ff8800;"></span> Relevancia media</div>
                                        <div class="legend-item"><span style="background:#ffdd00;"></span> Baja relevancia</div>
                                    </div>
                                    <div class="gradcam-interpretation">
                                        <h4><i class="fas fa-lightbulb"></i> Interpretación del mapa</h4>
                                        <p>El modelo focalizó su atención principalmente en la región del <strong>disco óptico y la copa</strong>, donde se observa una relación C/D elevada (0.82). La zona nasal inferior del anillo neuroretinal muestra el mayor nivel de activación, compatible con pérdida de fibras nerviosas característica del glaucoma.</p>
                                    </div>
                                    <div class="results-actions">
                                        <button class="btn btn-outline-primary" onclick="goToStep(4)"><i class="fas fa-arrow-left"></i> Volver a resultados</button>
                                        <button class="btn btn-primary" onclick="showDoctorPanel('dpanel-reports')"><i class="fas fa-file-pdf"></i> Reporte con mapa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Historial -->
                    <div class="doctor-panel" id="dpanel-history">
                        <div class="panel-header">
                            <h3><i class="fas fa-history"></i> Historial de diagnósticos</h3>
                        </div>
                        <div class="table-wrap">
                            <div class="table-header">
                                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                                    <input class="form-control" placeholder="🔍 Buscar..." id="historySearch" style="max-width:200px; padding:8px 14px; font-size:15px;" oninput="filterHistory()" />
                                    <select class="form-control" id="historyFilter" style="max-width:160px; padding:8px 14px; font-size:15px;" onchange="filterHistory()">
                                        <option value="all">Todos</option>
                                        <option value="high">Riesgo alto</option>
                                        <option value="medium">Riesgo medio</option>
                                        <option value="low">Riesgo bajo</option>
                                    </select>
                                </div>
                            </div>
                            <table>
                                <thead><tr><th>#</th><th>Paciente</th><th>Edad</th><th>Fecha</th><th>C/D</th><th>Resultado</th><th>Acción</th></tr></thead>
                                <tbody id="historyTableBody"></tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Panel: Reportes -->
                    <div class="doctor-panel" id="dpanel-reports">
                        <div class="panel-header">
                            <h3><i class="fas fa-file-text"></i> Reportes clínicos</h3>
                            <button class="btn btn-sm btn-primary" onclick="generateDoctorPDF()"><i class="fas fa-file-pdf"></i> Generar PDF</button>
                        </div>
                        <div class="reporte-content" id="doctorReportContent">
                            <div class="report-header-small">
                                <div><i class="fas fa-eye"></i> GlaucoIA</div>
                                <div><span class="report-badge-sm">REPORTE CLÍNICO</span><br><span class="report-date-sm" id="docReportDate">05 de junio de 2026</span></div>
                            </div>
                            <div class="report-body-small">
                                <div class="report-row">
                                    <div><strong id="docReportName">Rosa Elena Mendoza Ríos</strong><br><span id="docReportDni">DNI: 42156783 · 68 años</span></div>
                                    <div><strong>Dr. Carlos Ramírez Torres</strong><br><span>CMP: 48923 · Oftalmólogo</span><br><span>Clínica San Lucas</span></div>
                                </div>
                                <div class="report-metrics-small">
                                    <div><span>Probabilidad</span><strong style="color:var(--danger);" id="docReportProb">75%</strong></div>
                                    <div><span>C/D Ratio</span><strong style="color:var(--danger);" id="docReportCd">0.82</strong></div>
                                    <div><span>RNFL</span><strong style="color:var(--warning);" id="docReportRnfl">68 µm</strong></div>
                                    <div><span>Confianza IA</span><strong style="color:var(--success);" id="docReportConf">91%</strong></div>
                                </div>
                                <div class="report-interp-small">
                                    <p>Los indicadores morfológicos sugieren daño estructural significativo en el nervio óptico. Se recomienda evaluación perimetral y tomografía OCT de forma urgente.</p>
                                </div>
                                <div class="report-footer-small">
                                    <p>Este reporte es de carácter preliminar y de apoyo al diagnóstico. No reemplaza la evaluación clínica del especialista.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel: Ayuda -->
                    <div class="doctor-panel" id="dpanel-help">
                        <div class="panel-header">
                            <h3><i class="fas fa-question-circle"></i> Centro de ayuda</h3>
                        </div>
                        <div class="help-content">
                            <div class="help-card">
                                <h4><i class="fas fa-users"></i> Guía para pacientes adultos mayores</h4>
                                <div class="help-steps">
                                    <div><span class="step-num">1</span> Su médico cargará las fotografías de sus ojos</div>
                                    <div><span class="step-num">2</span> La IA analizará las imágenes en ~90 segundos</div>
                                    <div><span class="step-num">3</span> Su médico le explicará los resultados</div>
                                </div>
                            </div>
                            <div class="help-card">
                                <h4>Preguntas frecuentes</h4>
                                <div class="faq-item"><strong>¿El sistema reemplaza al médico?</strong><p>No. GlaucoIA es una herramienta de apoyo al diagnóstico.</p></div>
                                <div class="faq-item"><strong>¿Mis datos están seguros?</strong><p>Sí. Todos los datos se almacenan encriptados.</p></div>
                                <div class="faq-item"><strong>¿Qué es el glaucoma?</strong><p>Es una enfermedad que daña el nervio óptico, generalmente por presión elevada.</p></div>
                            </div>
                            <div class="help-card">
                                <h4><i class="fas fa-headset"></i> Contacto técnico</h4>
                                <p><i class="fas fa-envelope"></i> soporte@glaucoia.pe</p>
                                <p><i class="fas fa-phone"></i> (074) 200-3456</p>
                                <p><i class="fas fa-clock"></i> Lun–Vie 8:00–18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// Utilidades
// ============================================================

function getAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
}

function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

function formatDateShort(date) {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function showToast(message, type = 'info') {
    console.log(`[${type}] ${message}`);
}

function getRiskLabel(risk) {
    const labels = {
        'high': 'Riesgo alto',
        'medium': 'Riesgo medio',
        'low': 'Riesgo bajo'
    };
    return labels[risk] || risk;
}

function getRiskBadge(risk) {
    const classes = {
        'high': 'badge-danger',
        'medium': 'badge-warning',
        'low': 'badge-success'
    };
    return classes[risk] || 'badge-info';
}

function generateId() {
    return Math.floor(Math.random() * 10000) + 1;
}

function logoutPatient() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    AppState.userType = null;
    navigateTo('home');
    showToast('Sesión cerrada', 'info');
}

function logoutDoctor() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    AppState.userType = null;
    navigateTo('home');
    showToast('Sesión cerrada', 'info');
}

// ============================================================
// Autenticación
// ============================================================

function showAuthModal(type) {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const footer = document.getElementById('authModalType');

    if (type === 'patient') {
        title.textContent = 'Acceso Paciente';
        footer.textContent = 'Paciente';
        document.getElementById('authUser').value = '42156783';
        document.getElementById('authPassword').value = '123456';
    } else {
        title.textContent = 'Acceso Médico';
        footer.textContent = 'Médico';
        document.getElementById('authUser').value = '48923';
        document.getElementById('authPassword').value = '123456';
    }

    AppState.userType = type;
    document.getElementById('authLoginForm').style.display = 'block';
    document.getElementById('authRegisterForm').style.display = 'none';
    modal.classList.add('open');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('open');
}

function showLoginForm() {
    document.getElementById('authLoginForm').style.display = 'block';
    document.getElementById('authRegisterForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('authLoginForm').style.display = 'none';
    document.getElementById('authRegisterForm').style.display = 'block';
}

function handleAuth() {
    const user = document.getElementById('authUser').value.trim();
    const password = document.getElementById('authPassword').value.trim();

    if (!user || !password) {
        alert('Por favor, ingresa tus credenciales.');
        return;
    }

    const foundUser = AppState.users.find(u => {
        if (AppState.userType === 'patient') {
            return u.type === 'patient' && u.dni === user && u.password === password;
        } else {
            return u.type === 'doctor' && u.dni === user && u.password === password;
        }
    });

    if (!foundUser) {
        alert('Credenciales incorrectas. Por favor, verifica tus datos.');
        return;
    }

    AppState.currentUser = foundUser;
    AppState.isLoggedIn = true;
    closeAuthModal();

    if (AppState.userType === 'patient') {
        const patient = AppState.patients.find(p => p.id === foundUser.patientId);
        if (patient) {
            AppState.patientData = {
                name: patient.name,
                lastName: patient.lastName,
                dni: patient.dni,
                birthDate: patient.birthDate,
                age: patient.age,
                pioOd: patient.pioOd || 22,
                pioOi: patient.pioOi || 21
            };
            if (patient.analyses && patient.analyses.length > 0) {
                const last = patient.analyses[patient.analyses.length - 1];
                AppState.analysisResults = {
                    probability: last.probability || 75,
                    cdRatio: last.cdRatio || 0.82,
                    rnfl: last.rnfl || 68,
                    pio: last.pio || 22,
                    confidence: 91,
                    risk: last.risk || 'high'
                };
            }
        }
        navigateTo('patient');
    } else {
        navigateTo('doctor');
    }

    showToast(`Bienvenido ${foundUser.name}`, 'success');
}

function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const dni = document.getElementById('regDni').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    if (!name || !lastName || !dni || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const exists = AppState.users.find(u => u.dni === dni);
    if (exists) {
        alert('Ya existe un usuario con este DNI.');
        return;
    }

    if (AppState.userType === 'patient') {
        const newPatient = {
            id: AppState.patients.length + 1,
            name: name,
            lastName: lastName,
            dni: dni,
            birthDate: '1970-01-01',
            age: 56,
            pioOd: 20,
            pioOi: 20,
            analyses: []
        };
        AppState.patients.push(newPatient);
        AppState.users.push({
            type: 'patient',
            dni: dni,
            password: password,
            name: name,
            lastName: lastName,
            patientId: newPatient.id
        });
        alert('¡Registro exitoso! Ahora inicia sesión con tu DNI y contraseña.');
        showLoginForm();
        document.getElementById('authUser').value = dni;
    } else {
        AppState.users.push({
            type: 'doctor',
            dni: dni,
            password: password,
            name: name,
            lastName: lastName
        });
        alert('¡Registro exitoso! Ahora inicia sesión con tu DNI y contraseña.');
        showLoginForm();
        document.getElementById('authUser').value = dni;
    }
}

// ============================================================
// Patient Logic
// ============================================================

function initPatientDashboard() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const initials = AppState.patientData.name.charAt(0) + AppState.patientData.lastName.charAt(0);

    document.getElementById('patientName').textContent = name;
    document.getElementById('pName').textContent = name;
    document.getElementById('pAvatar').textContent = initials;
    document.getElementById('pAvatarLg').textContent = initials;

    const age = getAge(AppState.patientData.birthDate);
    document.getElementById('patientDetail').textContent =
        `${age} años · Último análisis: ${formatDate(new Date())}`;

    updatePatientResults();
    updatePatientReport();
}

function updatePatientResults() {
    const prob = AppState.analysisResults.probability;
    const cd = AppState.analysisResults.cdRatio;
    const rnfl = AppState.analysisResults.rnfl;
    const pio = AppState.analysisResults.pio;
    const risk = AppState.analysisResults.risk;

    document.getElementById('dashProb').textContent = prob + '%';
    document.getElementById('dashProgress').style.width = prob + '%';

    document.getElementById('resultProb').textContent = prob + '%';
    document.getElementById('resultCd').textContent = cd;
    document.getElementById('resultRnfl').textContent = rnfl + ' µm';
    document.getElementById('resultPio').textContent = pio + ' mmHg';

    const badge = document.getElementById('resultBadge');
    const riskBadge = document.getElementById('riskBadge');
    const riskLabels = {
        'high': 'Riesgo alto',
        'medium': 'Riesgo medio',
        'low': 'Riesgo bajo'
    };
    const riskClasses = {
        'high': 'badge-danger',
        'medium': 'badge-warning',
        'low': 'badge-success'
    };

    badge.textContent = riskLabels[risk] || 'Riesgo alto';
    badge.className = 'badge ' + (riskClasses[risk] || 'badge-danger');

    riskBadge.className = 'risk-badge ' + risk;
    riskBadge.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${riskLabels[risk] || 'Riesgo alto'}`;

    const probColor = prob > 60 ? 'var(--danger)' : (prob > 30 ? 'var(--warning)' : 'var(--success)');
    document.getElementById('dashProb').style.color = probColor;
    document.getElementById('resultProb').style.color = probColor;
    document.getElementById('dashProgress').style.background = probColor;
}

function updatePatientReport() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const age = getAge(AppState.patientData.birthDate);
    const prob = AppState.analysisResults.probability;
    const cd = AppState.analysisResults.cdRatio;
    const rnfl = AppState.analysisResults.rnfl;
    const conf = AppState.analysisResults.confidence;

    document.getElementById('reportName').textContent = name;
    document.getElementById('reportDni').textContent = `DNI: ${AppState.patientData.dni} · ${age} años`;
    document.getElementById('reportProb').textContent = prob + '%';
    document.getElementById('reportCd').textContent = cd;
    document.getElementById('reportRnfl').textContent = rnfl + ' µm';
    document.getElementById('reportConf').textContent = conf + '%';
}

function showPatientPanel(panelId) {
    document.querySelectorAll('.patient-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-item[data-panel]').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(panelId);
    if (target) target.classList.add('active');

    const navItem = document.querySelector(`.sidebar-nav-item[data-panel="${panelId}"]`);
    if (navItem) navItem.classList.add('active');

    if (panelId === 'panel-reporte') {
        updatePatientReport();
    }
}

function toggleEduCard(card) {
    const body = card.querySelector('.edu-body');
    const isOpen = card.classList.contains('open');

    if (isOpen) {
        body.style.display = 'none';
        card.classList.remove('open');
    } else {
        body.style.display = 'block';
        card.classList.add('open');
    }
}

function simulatePatientUpload(eye) {
    const zone = document.querySelector(`#panel-upload .upload-zone:has(#pUpload${eye === 'od' ? 'Od' : 'Oi'})`);
    if (!zone) return;

    zone.classList.add('uploaded');
    const status = document.getElementById(`pUpload${eye === 'od' ? 'Od' : 'Oi'}`);
    if (status) {
        status.textContent = '✅ Cargada';
        status.style.color = 'var(--success)';
    }

    AppState.uploadedImages[eye] = true;

    if (AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        document.getElementById('pUploadResult').style.display = 'block';
        showToast('Ambas imágenes cargadas. Listo para analizar.', 'success');
    } else {
        showToast(`Imagen de ojo ${eye === 'od' ? 'derecho' : 'izquierdo'} cargada.`, 'info');
    }
}

function simulatePatientAnalysis() {
    const result = document.getElementById('pUploadResult');
    result.innerHTML = `
        <div class="alert alert-info">
            <i class="fas fa-spinner fa-spin"></i>
            <div>
                <strong>Analizando imágenes...</strong>
                <p>La IA está procesando tus imágenes de fondo de ojo.</p>
            </div>
        </div>
    `;

    setTimeout(() => {
        const prob = Math.floor(Math.random() * 40) + 50;
        const cd = (Math.random() * 0.5 + 0.4).toFixed(2);
        const rnfl = Math.floor(Math.random() * 30) + 55;

        let risk = 'medium';
        if (prob > 70) risk = 'high';
        else if (prob < 50) risk = 'low';

        AppState.analysisResults = {
            probability: prob,
            cdRatio: parseFloat(cd),
            rnfl: rnfl,
            pio: AppState.patientData.pioOd || 22,
            confidence: Math.floor(Math.random() * 10) + 88,
            risk: risk
        };

        updatePatientResults();
        updatePatientReport();

        const patient = AppState.patients.find(p => p.dni === AppState.patientData.dni);
        if (patient) {
            if (!patient.analyses) patient.analyses = [];
            patient.analyses.push({
                date: new Date().toISOString().split('T')[0],
                probability: prob,
                cdRatio: parseFloat(cd),
                rnfl: rnfl,
                pio: AppState.patientData.pioOd || 22,
                risk: risk
            });
        }

        addToHistory(AppState.patientData, AppState.analysisResults);

        result.innerHTML = `
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>Análisis completado</strong>
                    <p>Tu resultado preliminar es: <strong>${prob}%</strong> de probabilidad de glaucoma.</p>
                    <p style="font-size:14px; margin-top:4px;">Tu médico revisará este resultado en tu próxima cita.</p>
                </div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
                <button class="btn btn-primary" onclick="showPatientPanel('panel-result')">
                    <i class="fas fa-chart-bar"></i> Ver resultado detallado
                </button>
                <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-gradcam')">
                    <i class="fas fa-eye"></i> Ver mapa de calor
                </button>
            </div>
        `;

        showToast('Análisis completado', 'success');
    }, 3000);
}

function addToHistory(patientData, results) {
    AppState.analysisCounter++;
    AppState.history.push({
        id: AppState.analysisCounter,
        patientName: `${patientData.name} ${patientData.lastName}`,
        patientDni: patientData.dni,
        age: getAge(patientData.birthDate),
        date: new Date().toISOString().split('T')[0],
        cdRatio: results.cdRatio,
        risk: results.risk,
        probability: results.probability,
        reviewed: false
    });
}

function generatePatientPDF() {
    const content = document.getElementById('patientReportContent');
    if (!content) {
        alert('No hay contenido para generar el PDF.');
        return;
    }

    html2canvas(content, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('reporte_paciente_glaucoia.pdf');
        showToast('PDF generado correctamente', 'success');
    }).catch(() => {
        alert('Generando PDF... (usa la opción de imprimir si no funciona)');
    });
}

// ============================================================
// Doctor Logic
// ============================================================

function initDoctorDashboard() {
    const name = AppState.currentUser ? AppState.currentUser.name : 'Carlos';
    document.getElementById('doctorGreeting').textContent = `Buenos días, Dr. ${name}`;
    document.getElementById('dName').textContent = `Dr. ${name}`;
    document.getElementById('dAvatar').textContent = name.charAt(0) + (AppState.currentUser?.lastName?.charAt(0) || 'R');

    updateDoctorStats();
    updateHistoryTable();
}

function updateDoctorStats() {
    const total = AppState.patients.length;
    const analyses = AppState.history.length;
    const highRisk = AppState.history.filter(h => h.risk === 'high').length;
    const pending = AppState.history.filter(h => !h.reviewed).length;

    document.getElementById('totalPatients').textContent = total;
    document.getElementById('monthlyAnalyses').textContent = analyses || 12;
    document.getElementById('highRiskCount').textContent = highRisk || 3;
    document.getElementById('pendingCount').textContent = pending || 2;

    const tableBody = document.getElementById('recentPatientsTable');
    if (tableBody) {
        const recent = AppState.patients.slice(-3).reverse();
        tableBody.innerHTML = recent.map(p => {
            const lastAnalysis = p.analyses && p.analyses.length > 0 ? p.analyses[p.analyses.length - 1] : null;
            const risk = lastAnalysis ? lastAnalysis.risk : 'low';
            const date = lastAnalysis ? formatDateShort(lastAnalysis.date) : 'Sin análisis';
            const riskLabel = getRiskLabel(risk);
            const badgeClass = getRiskBadge(risk);
            return `
                <tr>
                    <td><b>${p.name} ${p.lastName}</b></td>
                    <td>${p.age}</td>
                    <td>${date}</td>
                    <td><span class="badge ${badgeClass}">${riskLabel}</span></td>
                    <td><button class="btn btn-sm btn-secondary" onclick="loadPatientForAnalysis(${p.id})">Ver</button></td>
                </tr>
            `;
        }).join('');
    }
}

function loadPatientForAnalysis(patientId) {
    const patient = AppState.patients.find(p => p.id === patientId);
    if (!patient) return;

    AppState.patientData = {
        name: patient.name,
        lastName: patient.lastName,
        dni: patient.dni,
        birthDate: patient.birthDate,
        age: patient.age,
        pioOd: patient.pioOd || 22,
        pioOi: patient.pioOi || 21
    };

    if (patient.analyses && patient.analyses.length > 0) {
        const last = patient.analyses[patient.analyses.length - 1];
        AppState.analysisResults = {
            probability: last.probability || 75,
            cdRatio: last.cdRatio || 0.82,
            rnfl: last.rnfl || 68,
            pio: last.pio || 22,
            confidence: 91,
            risk: last.risk || 'high'
        };
    }

    showDoctorPanel('dpanel-analysis');
    resetAnalysis();

    document.getElementById('aName').value = patient.name;
    document.getElementById('aLastName').value = patient.lastName;
    document.getElementById('aDni').value = patient.dni;
    document.getElementById('aAge').value = patient.age;

    document.getElementById('analysisPatientName').textContent =
        `Paciente: ${patient.name} ${patient.lastName}`;
}

function showDoctorPanel(panelId) {
    document.querySelectorAll('.doctor-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-item[data-dpanel]').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(panelId);
    if (target) target.classList.add('active');

    const navItem = document.querySelector(`.sidebar-nav-item[data-dpanel="${panelId}"]`);
    if (navItem) navItem.classList.add('active');

    if (panelId === 'dpanel-reports') {
        updateDoctorReport();
    }
    if (panelId === 'dpanel-history') {
        updateHistoryTable();
    }
    if (panelId === 'dpanel-dash') {
        updateDoctorStats();
    }
}

function savePatientAndGoToAnalysis() {
    const name = document.getElementById('docName').value || 'Rosa Elena';
    const lastName = document.getElementById('docLastName').value || 'Mendoza Ríos';
    const dni = document.getElementById('docDni').value || '42156783';
    const birthDate = document.getElementById('docBirth').value || '1958-03-14';
    const pioOd = parseInt(document.getElementById('docPioOd').value) || 22;
    const pioOi = parseInt(document.getElementById('docPioOi').value) || 21;
    const age = getAge(birthDate);

    let patient = AppState.patients.find(p => p.dni === dni);

    if (!patient) {
        patient = {
            id: AppState.patients.length + 1,
            name: name,
            lastName: lastName,
            dni: dni,
            birthDate: birthDate,
            age: age,
            pioOd: pioOd,
            pioOi: pioOi,
            analyses: []
        };
        AppState.patients.push(patient);
        showToast('Paciente registrado correctamente', 'success');
    }

    AppState.patientData = {
        name: patient.name,
        lastName: patient.lastName,
        dni: patient.dni,
        birthDate: patient.birthDate,
        age: patient.age,
        pioOd: patient.pioOd || pioOd,
        pioOi: patient.pioOi || pioOi
    };

    document.getElementById('aName').value = patient.name;
    document.getElementById('aLastName').value = patient.lastName;
    document.getElementById('aDni').value = patient.dni;
    document.getElementById('aAge').value = patient.age;

    document.getElementById('analysisPatientName').textContent =
        `Paciente: ${patient.name} ${patient.lastName}`;

    showDoctorPanel('dpanel-analysis');
    resetAnalysis();
    goToStep(1);
}

function resetAnalysis() {
    AppState.uploadedImages = { od: false, oi: false };
    AppState.isAnalysisComplete = false;

    document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.step-item').forEach(el => el.classList.remove('active', 'done'));
    document.querySelectorAll('.step-connector').forEach(el => el.classList.remove('active', 'done'));

    const step1 = document.querySelector('.step-item[data-step="1"]');
    if (step1) step1.classList.add('active');

    document.querySelectorAll('.upload-zone').forEach(el => {
        el.classList.remove('uploaded');
        const status = el.querySelector('.upload-status');
        if (status) status.textContent = 'Pendiente';
    });

    document.getElementById('analyzeBtn').disabled = true;
    document.getElementById('showResultsBtn').style.display = 'none';

    document.querySelectorAll('.processing-step').forEach(el => {
        el.className = 'processing-step pending';
        const icon = el.querySelector('i');
        if (icon) icon.className = 'far fa-circle';
        const spinner = el.querySelector('.spinner-small');
        if (spinner) spinner.remove();
    });

    const steps = ['procStep3', 'procStep4', 'procStep5'];
    const labels = [
        'Extracción de características morfológicas',
        'Clasificación por modelo ResNet-50',
        'Generación de mapa de atención'
    ];
    steps.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            el.className = 'processing-step pending';
            el.innerHTML = `<i class="far fa-circle"></i> ${labels[i]}`;
        }
    });

    document.getElementById('dstep1').style.display = 'block';
}

function goToStep(step) {
    document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
    const target = document.getElementById(`dstep${step}`);
    if (target) target.style.display = 'block';

    document.querySelectorAll('.step-item').forEach(el => {
        const num = parseInt(el.dataset.step);
        el.classList.remove('active', 'done');
        if (num < step) el.classList.add('done');
        if (num === step) el.classList.add('active');
    });

    document.querySelectorAll('.step-connector').forEach((el, index) => {
        el.classList.remove('active', 'done');
        if (index < step - 1) el.classList.add('done');
        if (index === step - 1) el.classList.add('active');
    });

    if (step === 3 && AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        startAnalysisSimulation();
    }

    if (step === 4) {
        displayResults();
    }

    const stepEl = document.querySelector('.step-content');
    if (stepEl) stepEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function simulateUpload(eye) {
    const zone = document.querySelector(`.upload-zone:has(#upload${eye === 'od' ? 'Od' : 'Oi'})`);
    if (!zone) return;

    zone.classList.add('uploaded');
    const status = document.getElementById(`upload${eye === 'od' ? 'Od' : 'Oi'}`);
    if (status) {
        status.textContent = '✅ Cargada';
        status.style.color = 'var(--success)';
    }

    AppState.uploadedImages[eye] = true;

    if (AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        document.getElementById('analyzeBtn').disabled = false;
        showToast('Ambas imágenes cargadas. Listo para analizar.', 'success');
    } else {
        showToast(`Imagen de ojo ${eye === 'od' ? 'derecho' : 'izquierdo'} cargada.`, 'info');
    }
}

function startAnalysisSimulation() {
    const steps = [
        { id: 'procStep3', label: 'Extracción de características morfológicas', delay: 800 },
        { id: 'procStep4', label: 'Clasificación por modelo ResNet-50', delay: 1600 },
        { id: 'procStep5', label: 'Generación de mapa de atención', delay: 2400 }
    ];

    steps.forEach((step, index) => {
        setTimeout(() => {
            const el = document.getElementById(step.id);
            if (el) {
                el.className = 'processing-step done';
                el.innerHTML = `<i class="fas fa-check-circle"></i> ${step.label}`;
            }
        }, step.delay);
    });

    setTimeout(() => {
        AppState.isAnalysisComplete = true;
        document.getElementById('showResultsBtn').style.display = 'inline-flex';
        showToast('Análisis completado. ¡Resultados listos!', 'success');
    }, 3000);
}

function displayResults() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const age = getAge(AppState.patientData.birthDate);
    document.getElementById('resultPatientName').textContent = `${name} · ${age} años`;

    const prob = AppState.analysisResults.probability || 75;
    const cd = AppState.analysisResults.cdRatio || 0.82;
    const rnfl = AppState.analysisResults.rnfl || 68;
    const pio = AppState.analysisResults.pio || 22;
    const conf = AppState.analysisResults.confidence || 91;

    const metrics = document.querySelectorAll('.results-metrics .metric-card');
    if (metrics.length >= 4) {
        metrics[0].querySelector('.metric-value').textContent = cd;
        metrics[1].querySelector('.metric-value').textContent = `${rnfl} µm`;
        metrics[2].querySelector('.metric-value').textContent = `${pio} mmHg`;
        metrics[3].querySelector('.metric-value').textContent = `${conf}%`;
    }

    document.querySelector('.probability-text').textContent = prob + '%';
}

function saveAnalysisResult() {
    const name = AppState.patientData.name;
    const lastName = AppState.patientData.lastName;
    const dni = AppState.patientData.dni;
    const age = getAge(AppState.patientData.birthDate);

    let patient = AppState.patients.find(p => p.dni === dni);
    if (!patient) {
        patient = {
            id: AppState.patients.length + 1,
            name: name,
            lastName: lastName,
            dni: dni,
            birthDate: AppState.patientData.birthDate || '1970-01-01',
            age: age,
            pioOd: AppState.patientData.pioOd || 22,
            pioOi: AppState.patientData.pioOi || 21,
            analyses: []
        };
        AppState.patients.push(patient);
    }

    const analysis = {
        date: new Date().toISOString().split('T')[0],
        probability: AppState.analysisResults.probability,
        cdRatio: AppState.analysisResults.cdRatio,
        rnfl: AppState.analysisResults.rnfl,
        pio: AppState.analysisResults.pio,
        risk: AppState.analysisResults.risk,
        reviewed: false
    };

    if (!patient.analyses) patient.analyses = [];
    patient.analyses.push(analysis);

    addToHistory(AppState.patientData, AppState.analysisResults);

    updateDoctorStats();
    updateHistoryTable();

    showToast('Resultado guardado en el historial', 'success');
}

function updateHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;

    if (AppState.history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-muted); font-size:15px; padding:24px;">No hay análisis registrados</td></tr>`;
        return;
    }

    tbody.innerHTML = AppState.history.map((h, index) => {
        const riskLabel = getRiskLabel(h.risk);
        const badgeClass = getRiskBadge(h.risk);
        return `
            <tr>
                <td>${h.id}</td>
                <td><b>${h.patientName}</b></td>
                <td>${h.age}</td>
                <td>${formatDateShort(h.date)}</td>
                <td>${h.cdRatio}</td>
                <td><span class="badge ${badgeClass}">${riskLabel}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="viewHistoryDetail(${index})">Ver</button>
                    ${!h.reviewed ? '<span class="badge badge-warning" style="font-size:11px; margin-left:4px;">Pendiente</span>' : ''}
                </td>
            </tr>
        `;
    }).join('');
}

function viewHistoryDetail(index) {
    const h = AppState.history[index];
    if (!h) return;

    h.reviewed = true;
    updateHistoryTable();

    const patient = AppState.patients.find(p => p.dni === h.patientDni);
    if (patient) {
        loadPatientForAnalysis(patient.id);
        showDoctorPanel('dpanel-analysis');
        AppState.analysisResults = {
            probability: h.probability,
            cdRatio: h.cdRatio,
            risk: h.risk,
            confidence: 91
        };
        goToStep(4);
    }
}

function filterHistory() {
    const search = document.getElementById('historySearch').value.toLowerCase();
    const filter = document.getElementById('historyFilter').value;

    const rows = document.querySelectorAll('#historyTableBody tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const riskCell = row.querySelector('.badge');
        const riskText = riskCell ? riskCell.textContent.toLowerCase() : '';

        let show = true;
        if (search && !text.includes(search)) show = false;
        if (filter !== 'all') {
            const riskMap = {
                'high': 'riesgo alto',
                'medium': 'riesgo medio',
                'low': 'riesgo bajo'
            };
            if (!riskText.includes(riskMap[filter])) show = false;
        }
        row.style.display = show ? '' : 'none';
    });
}

function updateDoctorReport() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const age = getAge(AppState.patientData.birthDate);
    const prob = AppState.analysisResults.probability || 75;
    const cd = AppState.analysisResults.cdRatio || 0.82;
    const rnfl = AppState.analysisResults.rnfl || 68;
    const conf = AppState.analysisResults.confidence || 91;

    document.getElementById('docReportName').textContent = name;
    document.getElementById('docReportDni').textContent = `DNI: ${AppState.patientData.dni} · ${age} años`;
    document.getElementById('docReportProb').textContent = prob + '%';
    document.getElementById('docReportCd').textContent = cd;
    document.getElementById('docReportRnfl').textContent = rnfl + ' µm';
    document.getElementById('docReportConf').textContent = conf + '%';
}

function generateDoctorPDF() {
    const content = document.getElementById('doctorReportContent');
    if (!content) {
        alert('No hay contenido para generar el PDF.');
        return;
    }

    html2canvas(content, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('reporte_clinico_glaucoia.pdf');
        showToast('PDF clínico generado correctamente', 'success');
    }).catch(() => {
        alert('Generando PDF... (usa la opción de imprimir si no funciona)');
    });
}

// ============================================================
// Inicialización
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    document.querySelectorAll('.report-date, .report-date-sm').forEach(el => {
        if (el) el.textContent = formatDate(now);
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAuthModal();
        }
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('authModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
        }
    });

    // Mostrar home por defecto
    navigateTo('home');

    console.log('🚀 GlaucoIA App V6 - Versión Profesional cargada');
});