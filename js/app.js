// ============================================================
// GlaucoIA - Lógica principal
// ============================================================

// ============================================================
// Translations
// ============================================================
const TRANSLATIONS = {
    es: {
        'app.title': 'GlaucoIA - Diagnóstico Asistido por IA',
        'footer.app': 'GlaucoIA · Diagnóstico Asistido por IA',
        'footer.disclaimer': 'Herramienta de apoyo al diagnóstico · No reemplaza al especialista',

        'auth.user': 'Usuario / DNI',
        'auth.password': 'Contraseña / Código',
        'auth.login': 'Ingresar',
        'auth.or': 'o',
        'auth.register': '¿No tienes cuenta?',
        'auth.names': 'Nombres',
        'auth.lastNames': 'Apellidos',
        'auth.dni': 'DNI',
        'auth.cmp': 'CMP',
        'auth.passwordCreate': 'Contraseña',
        'auth.registerBtn': 'Registrarme',
        'auth.backToLogin': 'Volver al inicio de sesión',
        'auth.patientAccess': 'Acceso Paciente',
        'auth.doctorAccess': 'Acceso Médico',
        'auth.patientInfo': 'Su cuenta debe ser creada por su médico tratante. Si ya fue registrado, ingrese con su DNI y contraseña.',
        'auth.doctorInfo': 'Puede ingresar con su cuenta o registrar una nueva cuenta médica.',
        'auth.registerDoctor': 'Registrar nuevo médico',
        'auth.contactSupport': 'Contactar soporte',

        'home.badge': 'IA aplicada a oftalmología',
        'home.title': 'Apoyo al diagnóstico preliminar de glaucoma',
        'home.subtitle': 'Aplicación web basada en deep learning que analiza imágenes de fondo de ojo para apoyar la detección temprana del glaucoma.',
        'home.accessTitle': 'Accede aquí',
        'home.patientAccess': 'Soy Paciente',
        'home.patientAccessDesc': 'Consulta tus resultados',
        'home.doctorAccess': 'Soy Médico',
        'home.doctorAccessDesc': 'Gestiona tus pacientes',
        'home.stat1': 'Precisión del modelo',
        'home.stat2': 'Tiempo de análisis',
        'home.stat3': 'Datos seguros',
        'home.featuresTitle': '¿Qué puedes hacer en GlaucoIA?',
        'home.feature1Title': 'Portal del Paciente',
        'home.feature1Desc': 'Accede a tus resultados, aprende sobre el glaucoma y mantente informado sobre tu salud visual.',
        'home.feature2Title': 'Portal del Médico',
        'home.feature2Desc': 'Gestiona pacientes, realiza análisis con IA y genera reportes clínicos detallados.',
        'home.feature3Title': 'Reportes en PDF',
        'home.feature3Desc': 'Genera reportes profesionales de diagnóstico para compartir con pacientes y colegas.',
        'home.explore': 'Explorar',

        'patient.portal': 'Portal del Paciente',
        'patient.welcome': 'Bienvenido a tu espacio de salud visual',
        'patient.logout': 'Cerrar sesión',
        'patient.role': 'Paciente',
        'patient.nav.dashboard': 'Mi salud visual',
        'patient.nav.upload': 'Subir imagen',
        'patient.nav.result': 'Mi resultado',
        'patient.nav.edu': 'Entender diagnóstico',
        'patient.nav.glaucoma': '¿Qué es el glaucoma?',
        'patient.nav.appointments': 'Mis citas',
        'patient.nav.report': 'Mi reporte',
        'patient.nav.help': 'Ayuda',
        'patient.dashboard.title': 'Mi salud visual',
        'patient.dashboard.lastAnalysis': 'Último análisis',
        'patient.dashboard.probability': 'Probabilidad de glaucoma',
        'patient.dashboard.nextAppointment': 'Próxima cita',
        'patient.dashboard.confirmed': 'Confirmada',
        'patient.dashboard.viewResult': 'Ver resultado',
        'patient.dashboard.uploadImage': 'Subir imagen',
        'patient.dashboard.myReport': 'Mi reporte',
        'patient.dashboard.noAnalysis': 'Aún no tiene análisis registrados',
        'patient.upload.title': 'Subir imagen de fondo de ojo',
        'patient.upload.info': 'Simula la carga de imágenes de fondo de ojo. Haz clic en cada ojo para cargar la imagen.',
        'patient.upload.rightEye': 'Ojo Derecho (OD)',
        'patient.upload.leftEye': 'Ojo Izquierdo (OI)',
        'patient.upload.clickToLoad': 'Haz clic para simular carga',
        'patient.upload.pending': 'Pendiente',
        'patient.upload.loaded': 'Cargada',
        'patient.upload.success': 'Imágenes cargadas correctamente',
        'patient.upload.analyzing': 'La IA está analizando tus imágenes. Recibirás un resultado preliminar.',
        'patient.upload.analyzeBtn': 'Analizar imágenes (simulación)',
        'patient.result.title': 'Mi resultado',
        'patient.result.analysisResult': 'Resultado del análisis',
        'patient.result.probability': 'Probabilidad',
        'patient.result.whatMeans': '¿Qué significa esto?',
        'patient.result.interpretation': 'La IA encontró señales en sus imágenes que podrían indicar glaucoma. Su médico revisará esto con usted en su próxima cita. No entre en pánico — detectarlo temprano es lo mejor que puede pasar.',
        'patient.result.doctorWillExplain': 'En su cita, el médico le explicará con mayor detalle su resultado.',
        'patient.result.downloadReport': 'Descargar reporte',
        'patient.edu.title': 'Entender mi diagnóstico',
        'patient.edu.card1Title': '¿Qué significa el porcentaje?',
        'patient.edu.card1Sub': 'La probabilidad de glaucoma',
        'patient.edu.card2Title': 'La relación copa/disco (C/D)',
        'patient.edu.card2Sub': '¿Qué es y por qué importa?',
        'patient.edu.card3Title': '¿Cómo analiza la IA mis imágenes?',
        'patient.edu.card3Sub': 'El proceso explicado paso a paso',
        'patient.edu.card4Title': '¿Qué debo hacer ahora?',
        'patient.edu.card4Sub': 'Próximos pasos para usted',
        'patient.glaucoma.title': '¿Qué es el glaucoma?',
        'patient.glaucoma.simple': 'El glaucoma en palabras sencillas',
        'patient.glaucoma.simpleText': 'El glaucoma es una enfermedad que daña el nervio óptico, que es el cable que conecta sus ojos con su cerebro. Generalmente ocurre cuando la presión dentro del ojo es demasiado alta, y puede causar pérdida de visión si no se trata a tiempo.',
        'patient.glaucoma.warningSigns': 'Señales de alerta',
        'patient.glaucoma.goodNews': 'La buena noticia',
        'patient.glaucoma.goodNewsText': 'El glaucoma tratado a tiempo rara vez causa ceguera. Con gotas o cirugía, la mayoría de pacientes mantienen buena visión por muchos años.',
        'patient.appointments.title': 'Mis citas',
        'patient.appointments.next': 'Próxima cita',
        'patient.appointments.history': 'Historial de citas',
        'patient.report.title': 'Mi reporte',
        'patient.help.title': 'Centro de ayuda',

        'help.guideTitle': 'Guía para pacientes adultos mayores',
        'help.guide1': 'Su médico cargará las fotografías de sus ojos',
        'help.guide2': 'La IA analizará las imágenes en ~90 segundos',
        'help.guide3': 'Su médico le explicará los resultados',
        'help.faqTitle': 'Preguntas frecuentes',
        'help.faq1Q': '¿El sistema reemplaza al médico?',
        'help.faq1A': 'No. GlaucoIA es una herramienta de apoyo al diagnóstico.',
        'help.faq2Q': '¿Mis datos están seguros?',
        'help.faq2A': 'Sí. Todos los datos se almacenan de forma segura.',
        'help.faq3Q': '¿Qué es el glaucoma?',
        'help.faq3A': 'Es una enfermedad que daña el nervio óptico, generalmente por presión elevada.',
        'help.contactTitle': 'Contacto técnico',
        'help.schedule': 'Lun–Vie 8:00–18:00',

        'doctor.portal': 'Portal del Médico',
        'doctor.welcome': 'Gestión y diagnóstico asistido por IA',
        'doctor.logout': 'Cerrar sesión',
        'doctor.role': 'Oftalmólogo',
        'doctor.nav.dashboard': 'Panel principal',
        'doctor.nav.newPatient': 'Nuevo paciente',
        'doctor.nav.registeredPatients': 'Pacientes registrados',
        'doctor.nav.newAnalysis': 'Nuevo análisis',
        'doctor.nav.history': 'Historial',
        'doctor.nav.help': 'Ayuda',
        'doctor.dashboard.greeting': 'Buenos días',
        'doctor.dashboard.date': 'Consulta Oftalmología',
        'doctor.dashboard.totalPatients': 'Pacientes registrados',
        'doctor.dashboard.monthlyAnalyses': 'Análisis este mes',
        'doctor.dashboard.highRisk': 'Riesgo alto detectado',
        'doctor.dashboard.pendingReviews': 'Tiene análisis pendientes de revisión.',
        'doctor.dashboard.viewHistory': 'Ver historial',
        'doctor.dashboard.recentPatients': 'Últimos pacientes analizados',
        'doctor.dashboard.new': 'Nuevo',
        'doctor.dashboard.patient': 'Paciente',
        'doctor.dashboard.age': 'Edad',
        'doctor.dashboard.lastAnalysis': 'Último análisis',
        'doctor.dashboard.result': 'Resultado',
        'doctor.dashboard.action': 'Acción',
        'doctor.dashboard.view': 'Ver',
        'doctor.dashboard.edit': 'Editar',
        'doctor.newPatient.title': 'Registrar nuevo paciente',
        'doctor.newPatient.personalData': 'Datos personales',
        'doctor.newPatient.names': 'Nombres',
        'doctor.newPatient.lastNames': 'Apellidos',
        'doctor.newPatient.dni': 'DNI',
        'doctor.newPatient.birthDate': 'Fecha de nacimiento',
        'doctor.newPatient.password': 'Contraseña de acceso',
        'doctor.newPatient.pioOd': 'PIO OD (mmHg)',
        'doctor.newPatient.pioOi': 'PIO OI (mmHg)',
        'doctor.newPatient.cancel': 'Cancelar',
        'doctor.newPatient.save': 'Guardar paciente',
        'doctor.newPatient.help': 'Registre al paciente con sus datos y una contraseña de acceso. El paciente usará su DNI y esta contraseña para ingresar al sistema.',
        'doctor.editPatient.title': 'Editar paciente',
        'doctor.editPatient.save': 'Guardar cambios',
        'doctor.registeredPatients.title': 'Pacientes registrados',
        'doctor.registeredPatients.search': 'Buscar paciente...',
        'doctor.registeredPatients.noPatients': 'No hay pacientes registrados',
        'doctor.newAnalysis.title': 'Análisis con IA',
        'doctor.newAnalysis.patient': 'Paciente',
        'doctor.newAnalysis.searchPatient': 'Buscar paciente por nombre o DNI...',
        'doctor.newAnalysis.noResults': 'No se encontraron pacientes',
        'doctor.newAnalysis.noPatients': 'No hay pacientes registrados. Registre uno primero en "Nuevo paciente".',
        'doctor.newAnalysis.step1': 'Datos',
        'doctor.newAnalysis.step2': 'Imágenes',
        'doctor.newAnalysis.step3': 'Análisis',
        'doctor.newAnalysis.step4': 'Resultados',
        'doctor.newAnalysis.step5': 'Mapa IA',
        'doctor.newAnalysis.next': 'Siguiente',
        'doctor.newAnalysis.back': 'Atrás',
        'doctor.newAnalysis.startAnalysis': 'Iniciar análisis',
        'doctor.newAnalysis.analyzing': 'Analizando imágenes',
        'doctor.newAnalysis.processing': 'La IA está procesando las imágenes de fondo de ojo...',
        'doctor.newAnalysis.viewResults': 'Ver resultados',
        'doctor.newAnalysis.diagnosisResult': 'Resultado del diagnóstico',
        'doctor.newAnalysis.probabilityEstimated': 'Probabilidad estimada',
        'doctor.newAnalysis.cdRatio': 'C/D Ratio',
        'doctor.newAnalysis.rnfl': 'RNFL',
        'doctor.newAnalysis.pio': 'PIO',
        'doctor.newAnalysis.aiConfidence': 'Confianza IA',
        'doctor.newAnalysis.clinicalInterpretation': 'Interpretación clínica',
        'doctor.newAnalysis.viewAIMap': 'Ver mapa IA',
        'doctor.newAnalysis.saveAndReport': 'Guardar y generar reporte',
        'doctor.history.title': 'Historial de diagnósticos',
        'doctor.history.search': 'Buscar...',
        'doctor.history.all': 'Todos',
        'doctor.history.highRisk': 'Riesgo alto',
        'doctor.history.mediumRisk': 'Riesgo medio',
        'doctor.history.lowRisk': 'Riesgo bajo',
        'doctor.history.noRecords': 'No hay análisis registrados',
        'doctor.help.title': 'Centro de ayuda',
        'doctor.help.contact': 'Contacto técnico',

        'alert.info': 'Información',
        'alert.success': 'Éxito',
        'alert.warning': 'Advertencia',
        'alert.danger': 'Error',
        'alert.confirm': 'Confirmación',
        'alert.accept': 'Aceptar',
        'alert.cancel': 'Cancelar',
        'alert.yes': 'Sí',
        'alert.no': 'No',

        'msg.patientRegistered': 'Paciente registrado correctamente',
        'msg.patientUpdated': 'Paciente actualizado correctamente',
        'msg.profileUpdated': 'Perfil actualizado correctamente',
        'msg.selectImages': 'Por favor, ingrese imágenes de ojo derecho e izquierdo',
        'msg.analysisComplete': 'Análisis completo',
        'msg.analysisCompleteDesc': 'El análisis ha finalizado correctamente.',
        'msg.generateReportConfirm': '¿Desea generar el reporte en PDF?',
        'msg.reportGenerated': 'Reporte generado correctamente',
        'msg.imagesLoaded': 'Ambas imágenes cargadas. Listo para analizar.',
        'msg.imageLoaded': 'Imagen cargada.',
        'msg.loginSuccess': 'Bienvenido',
        'msg.logoutSuccess': 'Sesión cerrada',
        'msg.invalidCredentials': 'Credenciales incorrectas. Por favor, verifica tus datos.',
        'msg.completeFields': 'Por favor, completa todos los campos.',
        'msg.dniExists': 'Ya existe un usuario con este DNI.',
        'msg.selectPatient': 'Por favor, seleccione un paciente',
        'msg.patientNotRegistered': 'Su cuenta no ha sido registrada por un médico. Por favor, contacte a su médico tratante.',
        'msg.doctorRegistered': 'Cuenta médica registrada correctamente',
        'msg.analysisReset': 'Análisis reiniciado. Puede realizar uno nuevo.',
        'msg.noAnalysisYet': 'Aún no hay análisis registrados para este paciente.',

        'metric.cdNormal': 'Normal: < 0.5',
        'metric.rnflNormal': 'Normal: > 80 µm',
        'metric.pioNormal': 'Normal: 10 - 21 mmHg',
        'metric.highQuality': 'Alta calidad',

        'risk.high': 'Riesgo alto',
        'risk.medium': 'Riesgo medio',
        'risk.low': 'Riesgo bajo',

        'edu.percentText': 'El {prob}% significa que de cada 100 personas con imágenes similares a las suyas, {prob} tienen glaucoma. Es una señal importante, no un diagnóstico definitivo.',
        'edu.percentBarLeft': 'sin glaucoma',
        'edu.percentBarRight': 'con glaucoma',
        'edu.percentInfo': 'Solo su médico puede confirmar el diagnóstico final.',
        'edu.cdText': 'El nervio óptico tiene dos partes: el disco (el borde rosado) y la copa (el centro más claro). Cuando la copa se agranda, puede ser señal de glaucoma.',
        'edu.cdNormal': 'Normal C/D 0.4',
        'edu.cdYours': 'Su C/D:',
        'edu.cdWarning': 'Una copa más grande indica que el nervio pudo haber sufrido daño.',
        'edu.aiStep1': 'La cámara toma una fotografía del fondo de su ojo',
        'edu.aiStep2': 'La IA estudia más de 50 características del nervio óptico',
        'edu.aiStep3': 'La compara con miles de imágenes de personas con y sin glaucoma',
        'edu.aiStep4': 'Entrega un porcentaje de probabilidad al médico',
        'edu.nextStep1': 'Asista a su cita de seguimiento con el Dr. Ramírez',
        'edu.nextStep2': 'Si le recetan gotas, úselas exactamente como le indiquen',
        'edu.nextStep3': 'Use lentes de sol al salir y evite frotarse los ojos',

        'glaucoma.warning1': 'Pérdida gradual de la visión periférica (los bordes)',
        'glaucoma.warning2': 'Visión borrosa o ver halos alrededor de las luces',
        'glaucoma.warning3': 'Dolor en los ojos o dolores de cabeza frecuentes',
        'glaucoma.warning4': 'Dificultad para adaptarse a cuartos oscuros',

        'appt.doctorName': 'Dr. Carlos Ramírez Torres',
        'appt.doctorInfo': 'Oftalmólogo · CMP 48923',
        'appt.location': 'Clínica San Lucas · Jr. Las Américas 340, Chiclayo',
        'appt.reminder': 'Recuerde llegar 15 minutos antes. Traiga sus anteojos y una lista de sus medicamentos actuales.',
        'appt.history1': 'Dr. Ramírez · Análisis IA realizado',
        'appt.history2': 'Dr. Ramírez · Control de presión',

        'report.title': 'REPORTE DE ANÁLISIS',
        'report.clinicalTitle': 'REPORTE CLÍNICO',
        'report.interpretationHigh': 'Los indicadores morfológicos sugieren daño estructural significativo en el nervio óptico. Se recomienda evaluación perimetral y tomografía OCT de forma urgente.',
        'report.interpretationMedium': 'Los indicadores morfológicos muestran hallazgos compatibles con glaucoma incipiente. Se recomienda seguimiento estrecho con evaluación perimetral en los próximos meses.',
        'report.interpretationLow': 'Los indicadores morfológicos se encuentran dentro de parámetros normales. Se recomienda continuar con controles oftalmológicos de rutina.',
        'report.disclaimer': 'Este reporte es de carácter preliminar y de apoyo al diagnóstico. No reemplaza la evaluación clínica del especialista.',

        'gradcam.info': 'El mapa de calor muestra las regiones que la IA consideró más relevantes para su clasificación. Las zonas en rojo/naranja indican alta relevancia.',
        'gradcam.highActivation': 'Alta activación',
        'gradcam.mediumActivation': 'Activación media',
        'gradcam.odDesc': 'El modelo se enfoca en la región del disco óptico y la copa, donde se observa una relación C/D elevada.',
        'gradcam.oiDesc': 'El modelo muestra activación en la zona nasal inferior del anillo neuroretinal.',
        'gradcam.legendHigh': 'Alta relevancia',
        'gradcam.legendMedium': 'Relevancia media',
        'gradcam.legendLow': 'Baja relevancia',
        'gradcam.interpretationTitle': 'Interpretación del mapa',
        'gradcam.interpretationText': 'El modelo focalizó su atención principalmente en la región del disco óptico y la copa. La zona nasal inferior del anillo neuroretinal muestra el mayor nivel de activación, compatible con pérdida de fibras nerviosas característica del glaucoma.',
        'gradcam.eyeOd': 'Ojo Derecho (OD)',
        'gradcam.eyeOi': 'Ojo Izquierdo (OI)',
        'gradcam.reportTitle': 'Mapa de Calor IA (Grad-CAM)',

        'profile.title': 'Editar perfil',
        'profile.names': 'Nombres',
        'profile.lastNames': 'Apellidos',
        'profile.dni': 'DNI',
        'profile.birthDate': 'Fecha de nacimiento',
        'profile.password': 'Contraseña',
        'profile.passwordHint': 'Dejar en blanco para mantener la actual',
        'profile.cmp': 'CMP',
        'profile.cancel': 'Cancelar',
        'profile.save': 'Guardar cambios',
        'profile.editTooltip': 'Clic para editar'
    },
    en: {
        'app.title': 'GlaucoIA - AI-Assisted Diagnosis',
        'footer.app': 'GlaucoIA · AI-Assisted Diagnosis',
        'footer.disclaimer': 'Diagnostic support tool · Does not replace the specialist',

        'auth.user': 'User / ID',
        'auth.password': 'Password / Code',
        'auth.login': 'Sign In',
        'auth.or': 'or',
        'auth.register': "Don't have an account?",
        'auth.names': 'First Names',
        'auth.lastNames': 'Last Names',
        'auth.dni': 'ID Number',
        'auth.cmp': 'Medical License',
        'auth.passwordCreate': 'Password',
        'auth.registerBtn': 'Register',
        'auth.backToLogin': 'Back to sign in',
        'auth.patientAccess': 'Patient Access',
        'auth.doctorAccess': 'Doctor Access',
        'auth.patientInfo': 'Your account must be created by your treating doctor. If already registered, sign in with your ID and password.',
        'auth.doctorInfo': 'You can sign in with your account or register a new medical account.',
        'auth.registerDoctor': 'Register new doctor',
        'auth.contactSupport': 'Contact support',

        'home.badge': 'AI applied to ophthalmology',
        'home.title': 'Support for preliminary glaucoma diagnosis',
        'home.subtitle': 'Web application based on deep learning that analyzes fundus images to support early glaucoma detection.',
        'home.accessTitle': 'Access here',
        'home.patientAccess': 'I am a Patient',
        'home.patientAccessDesc': 'Check your results',
        'home.doctorAccess': 'I am a Doctor',
        'home.doctorAccessDesc': 'Manage your patients',
        'home.stat1': 'Model accuracy',
        'home.stat2': 'Analysis time',
        'home.stat3': 'Secure data',
        'home.featuresTitle': 'What can you do in GlaucoIA?',
        'home.feature1Title': 'Patient Portal',
        'home.feature1Desc': 'Access your results, learn about glaucoma and stay informed about your visual health.',
        'home.feature2Title': 'Doctor Portal',
        'home.feature2Desc': 'Manage patients, perform AI analyses and generate detailed clinical reports.',
        'home.feature3Title': 'PDF Reports',
        'home.feature3Desc': 'Generate professional diagnostic reports to share with patients and colleagues.',
        'home.explore': 'Explore',

        'patient.portal': 'Patient Portal',
        'patient.welcome': 'Welcome to your visual health space',
        'patient.logout': 'Sign Out',
        'patient.role': 'Patient',
        'patient.nav.dashboard': 'My visual health',
        'patient.nav.upload': 'Upload image',
        'patient.nav.result': 'My result',
        'patient.nav.edu': 'Understand diagnosis',
        'patient.nav.glaucoma': 'What is glaucoma?',
        'patient.nav.appointments': 'My appointments',
        'patient.nav.report': 'My report',
        'patient.nav.help': 'Help',
        'patient.dashboard.title': 'My visual health',
        'patient.dashboard.lastAnalysis': 'Last analysis',
        'patient.dashboard.probability': 'Glaucoma probability',
        'patient.dashboard.nextAppointment': 'Next appointment',
        'patient.dashboard.confirmed': 'Confirmed',
        'patient.dashboard.viewResult': 'View result',
        'patient.dashboard.uploadImage': 'Upload image',
        'patient.dashboard.myReport': 'My report',
        'patient.dashboard.noAnalysis': 'No analysis recorded yet',
        'patient.upload.title': 'Upload fundus image',
        'patient.upload.info': 'Simulates fundus image upload. Click on each eye to load the image.',
        'patient.upload.rightEye': 'Right Eye (OD)',
        'patient.upload.leftEye': 'Left Eye (OS)',
        'patient.upload.clickToLoad': 'Click to simulate load',
        'patient.upload.pending': 'Pending',
        'patient.upload.loaded': 'Loaded',
        'patient.upload.success': 'Images loaded successfully',
        'patient.upload.analyzing': 'AI is analyzing your images. You will receive a preliminary result.',
        'patient.upload.analyzeBtn': 'Analyze images (simulation)',
        'patient.result.title': 'My result',
        'patient.result.analysisResult': 'Analysis result',
        'patient.result.probability': 'Probability',
        'patient.result.whatMeans': 'What does this mean?',
        'patient.result.interpretation': 'AI found signals in your images that could indicate glaucoma. Your doctor will review this with you at your next appointment. Do not panic — early detection is the best thing that can happen.',
        'patient.result.doctorWillExplain': 'At your appointment, the doctor will explain your result in greater detail.',
        'patient.result.downloadReport': 'Download report',
        'patient.edu.title': 'Understand my diagnosis',
        'patient.edu.card1Title': 'What does the percentage mean?',
        'patient.edu.card1Sub': 'The probability of glaucoma',
        'patient.edu.card2Title': 'The cup/disc ratio (C/D)',
        'patient.edu.card2Sub': 'What is it and why does it matter?',
        'patient.edu.card3Title': 'How does AI analyze my images?',
        'patient.edu.card3Sub': 'The process explained step by step',
        'patient.edu.card4Title': 'What should I do now?',
        'patient.edu.card4Sub': 'Next steps for you',
        'patient.glaucoma.title': 'What is glaucoma?',
        'patient.glaucoma.simple': 'Glaucoma in simple words',
        'patient.glaucoma.simpleText': 'Glaucoma is a disease that damages the optic nerve, which is the cable that connects your eyes to your brain. It usually occurs when the pressure inside the eye is too high, and can cause vision loss if not treated in time.',
        'patient.glaucoma.warningSigns': 'Warning signs',
        'patient.glaucoma.goodNews': 'The good news',
        'patient.glaucoma.goodNewsText': 'Glaucoma treated in time rarely causes blindness. With drops or surgery, most patients maintain good vision for many years.',
        'patient.appointments.title': 'My appointments',
        'patient.appointments.next': 'Next appointment',
        'patient.appointments.history': 'Appointment history',
        'patient.report.title': 'My report',
        'patient.help.title': 'Help Center',

        'help.guideTitle': 'Guide for elderly patients',
        'help.guide1': 'Your doctor will load the photographs of your eyes',
        'help.guide2': 'The AI will analyze the images in ~90 seconds',
        'help.guide3': 'Your doctor will explain the results to you',
        'help.faqTitle': 'Frequently asked questions',
        'help.faq1Q': 'Does the system replace the doctor?',
        'help.faq1A': 'No. GlaucoIA is a diagnostic support tool.',
        'help.faq2Q': 'Is my data safe?',
        'help.faq2A': 'Yes. All data is stored securely.',
        'help.faq3Q': 'What is glaucoma?',
        'help.faq3A': 'It is a disease that damages the optic nerve, usually due to elevated pressure.',
        'help.contactTitle': 'Technical contact',
        'help.schedule': 'Mon–Fri 8:00–18:00',

        'doctor.portal': 'Doctor Portal',
        'doctor.welcome': 'Management and AI-assisted diagnosis',
        'doctor.logout': 'Sign Out',
        'doctor.role': 'Ophthalmologist',
        'doctor.nav.dashboard': 'Main panel',
        'doctor.nav.newPatient': 'New patient',
        'doctor.nav.registeredPatients': 'Registered patients',
        'doctor.nav.newAnalysis': 'New analysis',
        'doctor.nav.history': 'History',
        'doctor.nav.help': 'Help',
        'doctor.dashboard.greeting': 'Good morning',
        'doctor.dashboard.date': 'Ophthalmology Consultation',
        'doctor.dashboard.totalPatients': 'Registered patients',
        'doctor.dashboard.monthlyAnalyses': 'Analyses this month',
        'doctor.dashboard.highRisk': 'High risk detected',
        'doctor.dashboard.pendingReviews': 'You have analyses pending review.',
        'doctor.dashboard.viewHistory': 'View history',
        'doctor.dashboard.recentPatients': 'Recently analyzed patients',
        'doctor.dashboard.new': 'New',
        'doctor.dashboard.patient': 'Patient',
        'doctor.dashboard.age': 'Age',
        'doctor.dashboard.lastAnalysis': 'Last analysis',
        'doctor.dashboard.result': 'Result',
        'doctor.dashboard.action': 'Action',
        'doctor.dashboard.view': 'View',
        'doctor.dashboard.edit': 'Edit',
        'doctor.newPatient.title': 'Register new patient',
        'doctor.newPatient.personalData': 'Personal data',
        'doctor.newPatient.names': 'First Names',
        'doctor.newPatient.lastNames': 'Last Names',
        'doctor.newPatient.dni': 'ID Number',
        'doctor.newPatient.birthDate': 'Date of birth',
        'doctor.newPatient.password': 'Access password',
        'doctor.newPatient.pioOd': 'IOP OD (mmHg)',
        'doctor.newPatient.pioOi': 'IOP OS (mmHg)',
        'doctor.newPatient.cancel': 'Cancel',
        'doctor.newPatient.save': 'Save patient',
        'doctor.newPatient.help': 'Register the patient with their data and an access password. The patient will use their ID and this password to sign in.',
        'doctor.editPatient.title': 'Edit patient',
        'doctor.editPatient.save': 'Save changes',
        'doctor.registeredPatients.title': 'Registered patients',
        'doctor.registeredPatients.search': 'Search patient...',
        'doctor.registeredPatients.noPatients': 'No registered patients',
        'doctor.newAnalysis.title': 'AI Analysis',
        'doctor.newAnalysis.patient': 'Patient',
        'doctor.newAnalysis.searchPatient': 'Search patient by name or ID...',
        'doctor.newAnalysis.noResults': 'No patients found',
        'doctor.newAnalysis.noPatients': 'No registered patients. Register one first in "New patient".',
        'doctor.newAnalysis.step1': 'Data',
        'doctor.newAnalysis.step2': 'Images',
        'doctor.newAnalysis.step3': 'Analysis',
        'doctor.newAnalysis.step4': 'Results',
        'doctor.newAnalysis.step5': 'AI Map',
        'doctor.newAnalysis.next': 'Next',
        'doctor.newAnalysis.back': 'Back',
        'doctor.newAnalysis.startAnalysis': 'Start analysis',
        'doctor.newAnalysis.analyzing': 'Analyzing images',
        'doctor.newAnalysis.processing': 'AI is processing fundus images...',
        'doctor.newAnalysis.viewResults': 'View results',
        'doctor.newAnalysis.diagnosisResult': 'Diagnosis result',
        'doctor.newAnalysis.probabilityEstimated': 'Estimated probability',
        'doctor.newAnalysis.cdRatio': 'C/D Ratio',
        'doctor.newAnalysis.rnfl': 'RNFL',
        'doctor.newAnalysis.pio': 'IOP',
        'doctor.newAnalysis.aiConfidence': 'AI Confidence',
        'doctor.newAnalysis.clinicalInterpretation': 'Clinical interpretation',
        'doctor.newAnalysis.viewAIMap': 'View AI map',
        'doctor.newAnalysis.saveAndReport': 'Save and generate report',
        'doctor.history.title': 'Diagnosis history',
        'doctor.history.search': 'Search...',
        'doctor.history.all': 'All',
        'doctor.history.highRisk': 'High risk',
        'doctor.history.mediumRisk': 'Medium risk',
        'doctor.history.lowRisk': 'Low risk',
        'doctor.history.noRecords': 'No analysis records',
        'doctor.help.title': 'Help Center',
        'doctor.help.contact': 'Technical contact',

        'alert.info': 'Information',
        'alert.success': 'Success',
        'alert.warning': 'Warning',
        'alert.danger': 'Error',
        'alert.confirm': 'Confirmation',
        'alert.accept': 'Accept',
        'alert.cancel': 'Cancel',
        'alert.yes': 'Yes',
        'alert.no': 'No',

        'msg.patientRegistered': 'Patient registered successfully',
        'msg.patientUpdated': 'Patient updated successfully',
        'msg.profileUpdated': 'Profile updated successfully',
        'msg.selectImages': 'Please upload right and left eye images',
        'msg.analysisComplete': 'Analysis complete',
        'msg.analysisCompleteDesc': 'The analysis has finished successfully.',
        'msg.generateReportConfirm': 'Do you want to generate the PDF report?',
        'msg.reportGenerated': 'Report generated successfully',
        'msg.imagesLoaded': 'Both images loaded. Ready to analyze.',
        'msg.imageLoaded': 'Image loaded.',
        'msg.loginSuccess': 'Welcome',
        'msg.logoutSuccess': 'Session closed',
        'msg.invalidCredentials': 'Invalid credentials. Please verify your data.',
        'msg.completeFields': 'Please complete all fields.',
        'msg.dniExists': 'A user with this ID already exists.',
        'msg.selectPatient': 'Please select a patient',
        'msg.patientNotRegistered': 'Your account has not been registered by a doctor. Please contact your treating doctor.',
        'msg.doctorRegistered': 'Medical account registered successfully',
        'msg.analysisReset': 'Analysis reset. You can perform a new one.',
        'msg.noAnalysisYet': 'No analyses recorded for this patient yet.',

        'metric.cdNormal': 'Normal: < 0.5',
        'metric.rnflNormal': 'Normal: > 80 µm',
        'metric.pioNormal': 'Normal: 10 - 21 mmHg',
        'metric.highQuality': 'High quality',

        'risk.high': 'High risk',
        'risk.medium': 'Medium risk',
        'risk.low': 'Low risk',

        'edu.percentText': 'The {prob}% means that out of 100 people with images similar to yours, {prob} have glaucoma. It is an important signal, not a definitive diagnosis.',
        'edu.percentBarLeft': 'without glaucoma',
        'edu.percentBarRight': 'with glaucoma',
        'edu.percentInfo': 'Only your doctor can confirm the final diagnosis.',
        'edu.cdText': 'The optic nerve has two parts: the disc (the pinkish edge) and the cup (the lighter center). When the cup enlarges, it can be a sign of glaucoma.',
        'edu.cdNormal': 'Normal C/D 0.4',
        'edu.cdYours': 'Your C/D:',
        'edu.cdWarning': 'A larger cup indicates that the nerve may have suffered damage.',
        'edu.aiStep1': 'The camera takes a photograph of the back of your eye',
        'edu.aiStep2': 'AI studies more than 50 characteristics of the optic nerve',
        'edu.aiStep3': 'It compares with thousands of images of people with and without glaucoma',
        'edu.aiStep4': 'It delivers a probability percentage to the doctor',
        'edu.nextStep1': 'Attend your follow-up appointment with Dr. Ramírez',
        'edu.nextStep2': 'If drops are prescribed, use them exactly as indicated',
        'edu.nextStep3': 'Use sunglasses outdoors and avoid rubbing your eyes',

        'glaucoma.warning1': 'Gradual loss of peripheral vision (the edges)',
        'glaucoma.warning2': 'Blurred vision or seeing halos around lights',
        'glaucoma.warning3': 'Eye pain or frequent headaches',
        'glaucoma.warning4': 'Difficulty adapting to dark rooms',

        'appt.doctorName': 'Dr. Carlos Ramírez Torres',
        'appt.doctorInfo': 'Ophthalmologist · CMP 48923',
        'appt.location': 'San Lucas Clinic · Jr. Las Américas 340, Chiclayo',
        'appt.reminder': 'Remember to arrive 15 minutes early. Bring your glasses and a list of your current medications.',
        'appt.history1': 'Dr. Ramírez · AI analysis performed',
        'appt.history2': 'Dr. Ramírez · Pressure control',

        'report.title': 'ANALYSIS REPORT',
        'report.clinicalTitle': 'CLINICAL REPORT',
        'report.interpretationHigh': 'Morphological indicators suggest significant structural damage to the optic nerve. Perimetric evaluation and OCT tomography are recommended urgently.',
        'report.interpretationMedium': 'Morphological indicators show findings compatible with incipient glaucoma. Close follow-up with perimetric evaluation is recommended in the coming months.',
        'report.interpretationLow': 'Morphological indicators are within normal parameters. Continue with routine ophthalmological check-ups.',
        'report.disclaimer': 'This report is preliminary and for diagnostic support. It does not replace the clinical evaluation of the specialist.',

        'gradcam.info': 'The heatmap shows the regions the AI considered most relevant for its classification. Red/orange areas indicate high relevance.',
        'gradcam.highActivation': 'High activation',
        'gradcam.mediumActivation': 'Medium activation',
        'gradcam.odDesc': 'The model focuses on the optic disc and cup region, where an elevated C/D ratio is observed.',
        'gradcam.oiDesc': 'The model shows activation in the inferior nasal zone of the neuroretinal rim.',
        'gradcam.legendHigh': 'High relevance',
        'gradcam.legendMedium': 'Medium relevance',
        'gradcam.legendLow': 'Low relevance',
        'gradcam.interpretationTitle': 'Map interpretation',
        'gradcam.interpretationText': 'The model focused its attention mainly on the optic disc and cup region. The inferior nasal zone of the neuroretinal rim shows the highest activation level, consistent with nerve fiber loss characteristic of glaucoma.',
        'gradcam.eyeOd': 'Right Eye (OD)',
        'gradcam.eyeOi': 'Left Eye (OS)',
        'gradcam.reportTitle': 'AI Heatmap (Grad-CAM)',

        'profile.title': 'Edit profile',
        'profile.names': 'First Names',
        'profile.lastNames': 'Last Names',
        'profile.dni': 'ID Number',
        'profile.birthDate': 'Date of birth',
        'profile.password': 'Password',
        'profile.passwordHint': 'Leave blank to keep current',
        'profile.cmp': 'Medical License',
        'profile.cancel': 'Cancel',
        'profile.save': 'Save changes',
        'profile.editTooltip': 'Click to edit'
    }
};

let currentLang = localStorage.getItem('glaucoia_lang') || 'es';

function t(key, replacements = {}) {
    let text = TRANSLATIONS[currentLang][key] || key;
    Object.keys(replacements).forEach(k => {
        text = text.replace(`{${k}}`, replacements[k]);
    });
    return text;
}

function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('glaucoia_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
    });

    const screen = AppState.currentScreen || 'home';
    if (screen === 'patient') renderPatientPortalPreservingState();
    else if (screen === 'doctor') renderDoctorPortalPreservingState();
    else navigateTo('home');
}

// ============================================================
// Alert Modal
// ============================================================
let alertCallback = null;

function showAlert(type, title, message, callback) {
    const modal = document.getElementById('alertModal');
    const icon = document.getElementById('alertModalIcon');
    const titleEl = document.getElementById('alertModalTitle');
    const messageEl = document.getElementById('alertModalMessage');
    const actions = document.getElementById('alertModalActions');
    if (!modal || !icon || !titleEl || !messageEl || !actions) return;

    icon.className = 'alert-modal-icon ' + type;
    const icons = {
        'info': 'fas fa-info-circle', 'success': 'fas fa-check-circle',
        'warning': 'fas fa-exclamation-triangle', 'danger': 'fas fa-times-circle',
        'confirm': 'fas fa-question-circle'
    };
    icon.innerHTML = `<i class="${icons[type] || icons.info}"></i>`;
    titleEl.textContent = title;
    messageEl.textContent = message;

    if (type === 'confirm') {
        actions.innerHTML = `
            <button class="btn btn-secondary" onclick="closeAlertModal()">${t('alert.no')}</button>
            <button class="btn btn-primary" onclick="confirmAlertModal()">${t('alert.yes')}</button>
        `;
    } else {
        actions.innerHTML = `<button class="btn btn-primary" onclick="closeAlertModal()">${t('alert.accept')}</button>`;
    }
    alertCallback = callback || null;
    modal.classList.add('open');
}

function closeAlertModal() {
    const modal = document.getElementById('alertModal');
    if (modal) modal.classList.remove('open');
    alertCallback = null;
}

function confirmAlertModal() {
    const modal = document.getElementById('alertModal');
    if (modal) modal.classList.remove('open');
    if (alertCallback) { alertCallback(); alertCallback = null; }
}

// ============================================================
// App State
// ============================================================
const AppState = {
    currentScreen: 'home',
    userType: null,
    currentUser: null,
    isLoggedIn: false,
    uploadedImages: { od: false, oi: false },
    isAnalysisComplete: false,
    selectedPatientForAnalysis: null,
    analysisResults: { probability: 0, cdRatio: 0, rnfl: 0, pio: 0, confidence: 0, risk: 'low' },
    patientData: { name: '', lastName: '', dni: '', birthDate: '', age: 0, pioOd: 0, pioOi: 0 },
    patients: [],
    doctors: [],
    history: [],
    analysisCounter: 47,
    UIState: {
        activePatientPanel: 'panel-dash',
        activeDoctorPanel: 'dpanel-dash',
        currentAnalysisStep: 1
    }
};

function initAppState() {
    const db = window.DB.get();
    AppState.patients = db.patients || [];
    AppState.doctors = db.doctors || [];
    AppState.history = db.history || [];
    AppState.analysisCounter = db.analysisCounter || 47;
}

function persistAppState() {
    const db = window.DB.get();
    db.patients = AppState.patients;
    db.doctors = AppState.doctors;
    db.history = AppState.history;
    db.analysisCounter = AppState.analysisCounter;
    window.DB.save(db);
}

// ============================================================
// Navigation
// ============================================================
function navigateTo(screen) {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    let html = '';
    switch (screen) {
        case 'home': html = renderHome(); break;
        case 'patient': html = renderPatientPortal(); break;
        case 'doctor': html = renderDoctorPortal(); break;
        default: html = renderHome();
    }
    mainContent.innerHTML = html;
    AppState.currentScreen = screen;
    if (screen === 'patient') initPatientDashboard();
    if (screen === 'doctor') initDoctorDashboard();
}

// ============================================================
// Render: Home
// ============================================================
function renderHome() {
    return `
        <section class="screen active">
            <div class="hero-section">
                <div class="hero-content">
                    <div class="hero-badge"><i class="fas fa-robot"></i> ${t('home.badge')}</div>
                    <h1 class="hero-title">${t('home.title')}</h1>
                    <p class="hero-subtitle">${t('home.subtitle')}</p>
                    <div class="access-section">
                        <div class="access-title">${t('home.accessTitle')}</div>
                        <div class="access-options">
                            <div class="access-card" onclick="showAuthModal('patient')">
                                <i class="fas fa-user"></i>
                                <div class="access-info">
                                    <strong>${t('home.patientAccess')}</strong>
                                    <span>${t('home.patientAccessDesc')}</span>
                                </div>
                            </div>
                            <div class="access-card" onclick="showAuthModal('doctor')">
                                <i class="fas fa-user-md"></i>
                                <div class="access-info">
                                    <strong>${t('home.doctorAccess')}</strong>
                                    <span>${t('home.doctorAccessDesc')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-brain"></i></div><div class="stat-info"><span class="stat-number">94%</span><span class="stat-label">${t('home.stat1')}</span></div></div>
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-clock"></i></div><div class="stat-info"><span class="stat-number">&lt;2 min</span><span class="stat-label">${t('home.stat2')}</span></div></div>
                    <div class="stat-card"><div class="stat-icon"><i class="fas fa-shield-alt"></i></div><div class="stat-info"><span class="stat-number">100%</span><span class="stat-label">${t('home.stat3')}</span></div></div>
                </div>
            </div>
            <div class="features-section">
                <h2 class="section-title">${t('home.featuresTitle')}</h2>
                <div class="features-grid">
                    <div class="feature-card" onclick="showAuthModal('patient')">
                        <div class="feature-icon" style="background: #dbeafe; color: #1d4ed8;"><i class="fas fa-user"></i></div>
                        <h3>${t('home.feature1Title')}</h3>
                        <p>${t('home.feature1Desc')}</p>
                        <span class="feature-link">${t('home.explore')} <i class="fas fa-arrow-right"></i></span>
                    </div>
                    <div class="feature-card" onclick="showAuthModal('doctor')">
                        <div class="feature-icon" style="background: #dcfce7; color: #15803d;"><i class="fas fa-stethoscope"></i></div>
                        <h3>${t('home.feature2Title')}</h3>
                        <p>${t('home.feature2Desc')}</p>
                        <span class="feature-link">${t('home.explore')} <i class="fas fa-arrow-right"></i></span>
                    </div>
                    <div class="feature-card" onclick="showAuthModal('patient')">
                        <div class="feature-icon" style="background: #fef3c7; color: #d97706;"><i class="fas fa-file-pdf"></i></div>
                        <h3>${t('home.feature3Title')}</h3>
                        <p>${t('home.feature3Desc')}</p>
                        <span class="feature-link">${t('home.explore')} <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ============================================================
// Render: Patient Portal
// ============================================================
function renderPatientPortal() {
    const name = AppState.currentUser?.name || '';
    const lastName = AppState.currentUser?.lastName || '';
    const initials = (name.charAt(0) + lastName.charAt(0)).toUpperCase();

    return `
        <div class="patient-portal">
            <div class="screen-header">
                <h2><i class="fas fa-user" style="color: var(--primary);"></i> ${t('patient.portal')}</h2>
                <p>${t('patient.welcome')}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="logoutPatient()" style="margin-top:10px;">
                    <i class="fas fa-sign-out-alt"></i> ${t('patient.logout')}
                </button>
            </div>
            <div class="patient-sidebar-layout">
                <div class="patient-sidebar">
                    <div class="sidebar-profile clickable-profile" onclick="openProfileModal('patient')" title="${t('profile.editTooltip')}">
                        <div class="profile-avatar" id="pAvatar">${initials}</div>
                        <div class="profile-name" id="pName">${name} ${lastName}</div>
                        <div class="profile-role">${t('patient.role')}</div>
                        <div class="profile-edit-hint"><i class="fas fa-pen"></i></div>
                    </div>
                    <nav class="sidebar-nav">
                        <button class="sidebar-nav-item active" data-panel="panel-dash" onclick="showPatientPanel('panel-dash')">
                            <i class="fas fa-home"></i> <span>${t('patient.nav.dashboard')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-upload" onclick="showPatientPanel('panel-upload')">
                            <i class="fas fa-upload"></i> <span>${t('patient.nav.upload')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-result" onclick="showPatientPanel('panel-result')">
                            <i class="fas fa-chart-bar"></i> <span>${t('patient.nav.result')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-edu" onclick="showPatientPanel('panel-edu')">
                            <i class="fas fa-book"></i> <span>${t('patient.nav.edu')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-glaucoma" onclick="showPatientPanel('panel-glaucoma')">
                            <i class="fas fa-eye"></i> <span>${t('patient.nav.glaucoma')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-citas" onclick="showPatientPanel('panel-citas')">
                            <i class="fas fa-calendar"></i> <span>${t('patient.nav.appointments')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-reporte" onclick="showPatientPanel('panel-reporte')">
                            <i class="fas fa-file-text"></i> <span>${t('patient.nav.report')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-panel="panel-help" onclick="showPatientPanel('panel-help')">
                            <i class="fas fa-question-circle"></i> <span>${t('patient.nav.help')}</span>
                        </button>
                    </nav>
                </div>
                <div class="patient-content">
                    <div class="patient-panel active" id="panel-dash">
                        <div class="dashboard-header">
                            <div class="patient-greeting clickable-profile" onclick="openProfileModal('patient')" title="${t('profile.editTooltip')}">
                                <div class="patient-avatar-lg" id="pAvatarLg">${initials}</div>
                                <div>
                                    <h3 id="patientName">${name} ${lastName}</h3>
                                    <span class="patient-detail" id="patientDetail"></span>
                                </div>
                            </div>
                            <div class="risk-badge low" id="riskBadge"><i class="fas fa-info-circle"></i> ${t('patient.dashboard.noAnalysis')}</div>
                        </div>
                        <div class="dashboard-alert" id="dashboardAlert"></div>
                        <div class="dashboard-grid">
                            <div class="result-card" onclick="showPatientPanel('panel-result')">
                                <div class="result-header"><span class="result-label"><i class="fas fa-chart-bar"></i> ${t('patient.dashboard.lastAnalysis')}</span><span class="result-value" id="dashProb">-</span></div>
                                <div class="result-progress"><div class="progress-bar" id="dashProgress" style="width:0%; background: var(--text-muted);"></div></div>
                                <span class="result-sub">${t('patient.dashboard.probability')}</span>
                            </div>
                            <div class="result-card" onclick="showPatientPanel('panel-citas')">
                                <div class="result-header"><span class="result-label"><i class="fas fa-calendar"></i> ${t('patient.dashboard.nextAppointment')}</span><span class="result-value" style="font-size:22px;">15 Jun</span></div>
                                <div class="result-detail">Dr. Ramírez · 10:00 am</div>
                                <span class="result-sub badge-confirmed">${t('patient.dashboard.confirmed')}</span>
                            </div>
                        </div>
                        <div class="patient-actions">
                            <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-upload')"><i class="fas fa-upload"></i> ${t('patient.dashboard.uploadImage')}</button>
                            <button class="btn btn-outline-primary" onclick="showPatientPanel('panel-result')"><i class="fas fa-chart-bar"></i> ${t('patient.dashboard.viewResult')}</button>
                            <button class="btn btn-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> ${t('patient.dashboard.myReport')}</button>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-upload">
                        <div class="panel-header">
                            <h3><i class="fas fa-upload"></i> ${t('patient.upload.title')}</h3>
                        </div>
                        <div class="upload-content">
                            <div class="alert alert-info">
                                <i class="fas fa-info-circle"></i>
                                <span>${t('patient.upload.info')}</span>
                            </div>
                            <div class="image-upload-grid">
                                <div class="upload-zone" onclick="simulatePatientUpload('od')">
                                    <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                    <h5>${t('patient.upload.rightEye')}</h5>
                                    <p>${t('patient.upload.clickToLoad')}</p>
                                    <span class="upload-status" id="pUploadOd">${t('patient.upload.pending')}</span>
                                </div>
                                <div class="upload-zone" onclick="simulatePatientUpload('oi')">
                                    <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                    <h5>${t('patient.upload.leftEye')}</h5>
                                    <p>${t('patient.upload.clickToLoad')}</p>
                                    <span class="upload-status" id="pUploadOi">${t('patient.upload.pending')}</span>
                                </div>
                            </div>
                            <div id="pUploadResult" style="display:none;" class="upload-result">
                                <div class="alert alert-success">
                                    <i class="fas fa-check-circle"></i>
                                    <div>
                                        <strong>${t('patient.upload.success')}</strong>
                                        <p>${t('patient.upload.analyzing')}</p>
                                    </div>
                                </div>
                                <button class="btn btn-primary" onclick="simulatePatientAnalysis()">
                                    <i class="fas fa-brain"></i> ${t('patient.upload.analyzeBtn')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-result">
                        <div class="panel-header">
                            <h3><i class="fas fa-chart-bar"></i> ${t('patient.result.title')}</h3>
                            <button class="btn btn-sm btn-outline-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> ${t('patient.nav.report')}</button>
                        </div>
                        <div class="result-detail-card">
                            <div class="detail-header">
                                <h3>${t('patient.result.analysisResult')}</h3>
                                <span class="badge badge-danger" id="resultBadge">-</span>
                            </div>
                            <div class="detail-grid">
                                <div class="metric-card"><span class="metric-label">${t('patient.result.probability')}</span><span class="metric-value" style="color: var(--danger);" id="resultProb">-</span></div>
                            </div>
                            <div class="detail-interpretation" id="resultInterpretation">
                                <h4><i class="fas fa-lightbulb"></i> ${t('patient.result.whatMeans')}</h4>
                                <p>${t('patient.result.interpretation')}</p>
                                <p style="margin-top: 8px; font-size: 15px;">${t('patient.result.doctorWillExplain')}</p>
                            </div>
                            <div class="detail-actions">
                                <button class="btn btn-primary" onclick="showPatientPanel('panel-reporte')"><i class="fas fa-file-pdf"></i> ${t('patient.result.downloadReport')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-edu">
                        <div class="panel-header">
                            <h3><i class="fas fa-book"></i> ${t('patient.edu.title')}</h3>
                        </div>
                        <div class="edu-list" id="eduList"></div>
                    </div>

                    <div class="patient-panel" id="panel-glaucoma">
                        <div class="panel-header">
                            <h3><i class="fas fa-eye"></i> ${t('patient.glaucoma.title')}</h3>
                        </div>
                        <div class="glaucoma-content">
                            <div class="card" style="background: var(--primary-light); border-color: #B5D4F4; padding:20px; border-radius: var(--radius);">
                                <p style="font-size:18px; font-weight:600; color: #0C447C;"><i class="fas fa-eye"></i> ${t('patient.glaucoma.simple')}</p>
                                <p style="font-size:16px; color: #185FA5; line-height:1.8;">${t('patient.glaucoma.simpleText')}</p>
                            </div>
                            <h4 style="margin-top: 20px; font-size:19px;">${t('patient.glaucoma.warningSigns')}</h4>
                            <div class="alert-list">
                                <div class="alert-item"><i class="fas fa-eye-slash" style="color: var(--danger);"></i> ${t('glaucoma.warning1')}</div>
                                <div class="alert-item"><i class="fas fa-tint" style="color: var(--warning);"></i> ${t('glaucoma.warning2')}</div>
                                <div class="alert-item"><i class="fas fa-headache" style="color: var(--warning);"></i> ${t('glaucoma.warning3')}</div>
                                <div class="alert-item"><i class="fas fa-sun" style="color: #854F0B;"></i> ${t('glaucoma.warning4')}</div>
                            </div>
                            <div class="alert alert-success">
                                <i class="fas fa-shield-alt"></i>
                                <div><strong>${t('patient.glaucoma.goodNews')}</strong><p>${t('patient.glaucoma.goodNewsText')}</p></div>
                            </div>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-citas">
                        <div class="panel-header">
                            <h3><i class="fas fa-calendar"></i> ${t('patient.appointments.title')}</h3>
                        </div>
                        <div class="citas-content">
                            <div class="cita-card proxima">
                                <div class="cita-badge">${t('patient.appointments.next')}</div>
                                <h4>15/06/2026</h4>
                                <p>10:00 am · Consultorio 3</p>
                                <div class="cita-doctor">
                                    <div class="doctor-avatar">CR</div>
                                    <div><strong>${t('appt.doctorName')}</strong><br><span>${t('appt.doctorInfo')}</span></div>
                                </div>
                                <p style="font-size:15px; color: var(--text-muted); margin-top:8px;">${t('appt.location')}</p>
                            </div>
                            <div class="alert alert-warning" style="margin-top:12px;">
                                <i class="fas fa-bell"></i>
                                <div style="font-size:15px;">${t('appt.reminder')}</div>
                            </div>
                            <h4 style="margin-top:20px; font-size:18px;">${t('patient.appointments.history')}</h4>
                            <div class="cita-historial">
                                <div class="cita-item"><span class="cita-status done"><i class="fas fa-check"></i></span><div><strong>03/06/2026</strong><span>${t('appt.history1')}</span></div></div>
                                <div class="cita-item"><span class="cita-status done"><i class="fas fa-check"></i></span><div><strong>10/01/2026</strong><span>${t('appt.history2')}</span></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-reporte">
                        <div class="panel-header">
                            <h3><i class="fas fa-file-text"></i> ${t('patient.report.title')}</h3>
                            <button class="btn btn-sm btn-primary" onclick="generatePatientPDF()"><i class="fas fa-file-pdf"></i> PDF</button>
                        </div>
                        <div class="reporte-content" id="patientReportContent">
                            <div class="report-header-small">
                                <div><i class="fas fa-eye"></i> GlaucoIA</div>
                                <div><span class="report-badge-sm">${t('report.title')}</span><br><span class="report-date-sm" id="reportDate"></span></div>
                            </div>
                            <div class="report-body-small">
                                <div class="report-row">
                                    <div><strong id="reportName"></strong><br><span id="reportDni"></span></div>
                                    <div><strong>Dr. Carlos Ramírez Torres</strong><br><span>CMP: 48923 · Oftalmólogo</span></div>
                                </div>
                                <div class="report-metrics-small">
                                    <div><span>${t('patient.result.probability')}</span><strong style="color: var(--danger);" id="reportProb">-</strong></div>
                                </div>
                                <div class="report-interp-small">
                                    <p id="reportInterp"></p>
                                </div>
                                <div class="report-footer-small">
                                    <p>${t('report.disclaimer')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="patient-panel" id="panel-help">
                        <div class="panel-header">
                            <h3><i class="fas fa-question-circle"></i> ${t('patient.help.title')}</h3>
                        </div>
                        <div class="help-content">
                            <div class="help-card">
                                <h4><i class="fas fa-users"></i> ${t('help.guideTitle')}</h4>
                                <div class="help-steps">
                                    <div><span class="step-num">1</span> ${t('help.guide1')}</div>
                                    <div><span class="step-num">2</span> ${t('help.guide2')}</div>
                                    <div><span class="step-num">3</span> ${t('help.guide3')}</div>
                                </div>
                            </div>
                            <div class="help-card">
                                <h4>${t('help.faqTitle')}</h4>
                                <div class="faq-item"><strong>${t('help.faq1Q')}</strong><p>${t('help.faq1A')}</p></div>
                                <div class="faq-item"><strong>${t('help.faq2Q')}</strong><p>${t('help.faq2A')}</p></div>
                                <div class="faq-item"><strong>${t('help.faq3Q')}</strong><p>${t('help.faq3A')}</p></div>
                            </div>
                            <div class="help-card">
                                <h4><i class="fas fa-headset"></i> ${t('help.contactTitle')}</h4>
                                <p><i class="fas fa-envelope"></i> soporte@glaucoia.pe</p>
                                <p><i class="fas fa-phone"></i> (074) 200-3456</p>
                                <p><i class="fas fa-clock"></i> ${t('help.schedule')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// Render: Doctor Portal
// ============================================================
function renderDoctorPortal() {
    const name = AppState.currentUser?.name || '';
    const lastName = AppState.currentUser?.lastName || '';
    const firstLastName = lastName.split(' ')[0] || '';
    const initials = (name.charAt(0) + (firstLastName.charAt(0) || '')).toUpperCase();
    const today = new Date();
    const dateStr = today.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    return `
        <div class="doctor-portal">
            <div class="screen-header">
                <h2><i class="fas fa-user-md" style="color: var(--primary);"></i> ${t('doctor.portal')}</h2>
                <p>${t('doctor.welcome')}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="logoutDoctor()" style="margin-top:10px;">
                    <i class="fas fa-sign-out-alt"></i> ${t('doctor.logout')}
                </button>
            </div>
            <div class="doctor-layout">
                <div class="doctor-sidebar">
                    <div class="sidebar-profile clickable-profile" onclick="openProfileModal('doctor')" title="${t('profile.editTooltip')}">
                        <div class="profile-avatar" id="dAvatar">${initials}</div>
                        <div class="profile-name" id="dName">Dr. ${name} ${firstLastName}</div>
                        <div class="profile-role">${t('doctor.role')}</div>
                        <div class="profile-edit-hint"><i class="fas fa-pen"></i></div>
                    </div>
                    <nav class="sidebar-nav">
                        <button class="sidebar-nav-item active" data-dpanel="dpanel-dash" onclick="showDoctorPanel('dpanel-dash')">
                            <i class="fas fa-home"></i> <span>${t('doctor.nav.dashboard')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-patient" onclick="showDoctorPanel('dpanel-patient')">
                            <i class="fas fa-user-plus"></i> <span>${t('doctor.nav.newPatient')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-registered" onclick="showDoctorPanel('dpanel-registered')">
                            <i class="fas fa-users"></i> <span>${t('doctor.nav.registeredPatients')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-analysis" onclick="showDoctorPanel('dpanel-analysis')">
                            <i class="fas fa-upload"></i> <span>${t('doctor.nav.newAnalysis')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-history" onclick="showDoctorPanel('dpanel-history')">
                            <i class="fas fa-history"></i> <span>${t('doctor.nav.history')}</span>
                        </button>
                        <button class="sidebar-nav-item" data-dpanel="dpanel-help" onclick="showDoctorPanel('dpanel-help')">
                            <i class="fas fa-question-circle"></i> <span>${t('doctor.nav.help')}</span>
                        </button>
                    </nav>
                </div>
                <div class="doctor-content">
                    <div class="doctor-panel active" id="dpanel-dash">
                        <div style="margin-bottom:16px;">
                            <h3 style="font-size:22px;" id="doctorGreeting">${t('doctor.dashboard.greeting')}, Dr. ${name} ${firstLastName}</h3>
                            <p style="color: var(--text-muted); font-size:16px;" id="doctorDate">${dateStr} · ${t('doctor.dashboard.date')}</p>
                        </div>
                        <div class="stat-grid">
                            <div class="stat-card"><div class="stat-num" id="totalPatients">0</div><div class="stat-label"><i class="fas fa-users"></i> ${t('doctor.dashboard.totalPatients')}</div></div>
                            <div class="stat-card"><div class="stat-num" id="monthlyAnalyses">0</div><div class="stat-label"><i class="fas fa-chart-bar"></i> ${t('doctor.dashboard.monthlyAnalyses')}</div></div>
                            <div class="stat-card"><div class="stat-num" id="highRiskCount">0</div><div class="stat-label"><i class="fas fa-exclamation-triangle" style="color:var(--warning);"></i> ${t('doctor.dashboard.highRisk')}</div></div>
                        </div>
                        <div class="alert alert-warning" style="margin-bottom:16px; display:none;" id="pendingAlert"></div>
                        <div class="table-wrap">
                            <div class="table-header">
                                <span style="font-size:16px; font-weight:500;">${t('doctor.dashboard.recentPatients')}</span>
                                <button class="btn btn-primary btn-sm" onclick="showDoctorPanel('dpanel-patient')"><i class="fas fa-user-plus"></i> ${t('doctor.dashboard.new')}</button>
                            </div>
                            <table>
                                <thead><tr><th>${t('doctor.dashboard.patient')}</th><th>${t('doctor.dashboard.age')}</th><th>${t('doctor.dashboard.lastAnalysis')}</th><th>${t('doctor.dashboard.result')}</th><th>${t('doctor.dashboard.action')}</th></tr></thead>
                                <tbody id="recentPatientsTable"></tbody>
                            </table>
                        </div>
                    </div>

                    <div class="doctor-panel" id="dpanel-patient">
                        <div class="panel-header">
                            <h3><i class="fas fa-user-plus"></i> ${t('doctor.newPatient.title')}</h3>
                        </div>
                        <div class="form-card">
                            <div class="alert alert-info" style="margin-bottom:16px;">
                                <i class="fas fa-info-circle"></i>
                                <span>${t('doctor.newPatient.help')}</span>
                            </div>
                            <h4>${t('doctor.newPatient.personalData')}</h4>
                            <div class="form-grid">
                                <div class="form-group"><label>${t('doctor.newPatient.names')}</label><input type="text" class="form-control" id="docName" placeholder="Nombres" /></div>
                                <div class="form-group"><label>${t('doctor.newPatient.lastNames')}</label><input type="text" class="form-control" id="docLastName" placeholder="Apellidos" /></div>
                                <div class="form-group"><label>${t('doctor.newPatient.dni')}</label><input type="text" class="form-control" id="docDni" placeholder="DNI" /></div>
                                <div class="form-group"><label>${t('doctor.newPatient.birthDate')}</label><input type="date" class="form-control" id="docBirth" /></div>
                                <div class="form-group"><label>${t('doctor.newPatient.pioOd')}</label><input type="number" class="form-control" id="docPioOd" value="16" /></div>
                                <div class="form-group"><label>${t('doctor.newPatient.pioOi')}</label><input type="number" class="form-control" id="docPioOi" value="16" /></div>
                                <div class="form-group" style="grid-column: 1 / -1;">
                                    <label>${t('doctor.newPatient.password')}</label>
                                    <div class="password-wrapper">
                                        <input type="password" class="form-control" id="docPassword" placeholder="Contraseña de acceso" />
                                        <button type="button" class="password-toggle" onclick="togglePasswordVisibility('docPassword', this)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button class="btn btn-outline-primary" onclick="clearNewPatientForm()">${t('doctor.newPatient.cancel')}</button>
                                <button class="btn btn-primary" onclick="saveNewPatient()"><i class="fas fa-save"></i> ${t('doctor.newPatient.save')}</button>
                            </div>
                        </div>
                    </div>

                    <div class="doctor-panel" id="dpanel-registered">
                        <div class="panel-header">
                            <h3><i class="fas fa-users"></i> ${t('doctor.registeredPatients.title')}</h3>
                        </div>
                        <div class="table-wrap">
                            <div class="table-header">
                                <input class="form-control" placeholder="${t('doctor.registeredPatients.search')}" id="registeredSearch" style="max-width:280px; padding:10px 16px; font-size:16px;" oninput="filterRegisteredPatients()" />
                            </div>
                            <table>
                                <thead><tr><th>${t('doctor.dashboard.patient')}</th><th>DNI</th><th>${t('doctor.dashboard.age')}</th><th>PIO OD</th><th>PIO OI</th><th>${t('doctor.dashboard.action')}</th></tr></thead>
                                <tbody id="registeredPatientsTable"></tbody>
                            </table>
                        </div>
                    </div>

                    <div class="doctor-panel" id="dpanel-analysis">
                        <div class="panel-header">
                            <h3><i class="fas fa-brain"></i> ${t('doctor.newAnalysis.title')}</h3>
                            <span id="analysisPatientName" style="font-size:15px; color:var(--text-muted);"></span>
                        </div>
                        <div class="analysis-container">
                            <div class="analysis-stepper" id="analysisStepper">
                                <div class="step-item active" data-step="1"><div class="step-circle">1</div><span>${t('doctor.newAnalysis.step1')}</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="2"><div class="step-circle">2</div><span>${t('doctor.newAnalysis.step2')}</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="3"><div class="step-circle">3</div><span>${t('doctor.newAnalysis.step3')}</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="4"><div class="step-circle">4</div><span>${t('doctor.newAnalysis.step4')}</span></div>
                                <div class="step-connector"></div>
                                <div class="step-item" data-step="5"><div class="step-circle">5</div><span>${t('doctor.newAnalysis.step5')}</span></div>
                            </div>

                            <div class="step-content active" id="dstep1">
                                <div class="form-card">
                                    <h4>${t('doctor.newAnalysis.patient')}</h4>
                                    <div class="search-patient-container">
                                        <input type="text" class="search-patient-input" id="patientSearchInput" placeholder="${t('doctor.newAnalysis.searchPatient')}" oninput="searchPatients(this.value)" autocomplete="off" />
                                        <div class="search-results" id="patientSearchResults"></div>
                                    </div>
                                    <div id="selectedPatientInfo" style="display:none;">
                                        <div class="alert alert-info" style="margin-top:12px;">
                                            <i class="fas fa-user-check"></i>
                                            <div>
                                                <strong id="selectedPatientName"></strong>
                                                <p id="selectedPatientDetails"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-actions">
                                        <button class="btn btn-primary" onclick="goToStep(2)"><i class="fas fa-arrow-right"></i> ${t('doctor.newAnalysis.next')}</button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-content" id="dstep2" style="display:none;">
                                <div class="form-card">
                                    <h4>${t('patient.upload.title')}</h4>
                                    <div class="image-upload-grid">
                                        <div class="upload-zone" onclick="simulateUpload('od')">
                                            <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                            <h5>${t('patient.upload.rightEye')}</h5>
                                            <p>${t('patient.upload.clickToLoad')}</p>
                                            <span class="upload-status" id="uploadOd">${t('patient.upload.pending')}</span>
                                        </div>
                                        <div class="upload-zone" onclick="simulateUpload('oi')">
                                            <i class="fas fa-eye" style="font-size:36px; color:var(--primary);"></i>
                                            <h5>${t('patient.upload.leftEye')}</h5>
                                            <p>${t('patient.upload.clickToLoad')}</p>
                                            <span class="upload-status" id="uploadOi">${t('patient.upload.pending')}</span>
                                        </div>
                                    </div>
                                    <div class="form-actions">
                                        <button class="btn btn-outline-primary" onclick="goToStep(1)"><i class="fas fa-arrow-left"></i> ${t('doctor.newAnalysis.back')}</button>
                                        <button class="btn btn-primary" onclick="goToStep(3)"><i class="fas fa-brain"></i> ${t('doctor.newAnalysis.startAnalysis')}</button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-content" id="dstep3" style="display:none;">
                                <div class="processing-card">
                                    <div class="processing-animation">
                                        <div class="spinner"></div>
                                        <i class="fas fa-brain" style="font-size:44px; color:var(--primary); position:absolute;"></i>
                                    </div>
                                    <h4>${t('doctor.newAnalysis.analyzing')}</h4>
                                    <p>${t('doctor.newAnalysis.processing')}</p>
                                    <div class="processing-steps">
                                        <div class="processing-step pending" id="procStep1"><i class="far fa-circle"></i> Pre-procesamiento de imagen</div>
                                        <div class="processing-step pending" id="procStep2"><i class="far fa-circle"></i> Segmentación del disco óptico</div>
                                        <div class="processing-step pending" id="procStep3"><i class="far fa-circle"></i> Extracción de características morfológicas</div>
                                        <div class="processing-step pending" id="procStep4"><i class="far fa-circle"></i> Clasificación por modelo ResNet-50</div>
                                        <div class="processing-step pending" id="procStep5"><i class="far fa-circle"></i> Generación de mapa de atención</div>
                                    </div>
                                    <button class="btn btn-primary" id="showResultsBtn" style="display:none; margin-top:20px;" onclick="goToStep(4)"><i class="fas fa-chart-bar"></i> ${t('doctor.newAnalysis.viewResults')}</button>
                                </div>
                            </div>

                            <div class="step-content" id="dstep4" style="display:none;">
                                <div class="results-card">
                                    <div class="results-header">
                                        <div class="results-summary">
                                            <span class="badge badge-danger" id="resultRiskBadge"><i class="fas fa-exclamation-triangle"></i> -</span>
                                            <h3>${t('doctor.newAnalysis.diagnosisResult')}</h3>
                                            <p id="resultPatientName"></p>
                                        </div>
                                        <div class="results-probability">
                                            <div class="probability-circle">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" stroke-width="8"/>
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" stroke-width="8" stroke-dasharray="263.89" stroke-dashoffset="65.97" stroke-linecap="round" transform="rotate(-90 50 50)" id="probCircle"/>
                                                </svg>
                                                <span class="probability-text" id="probText">-</span>
                                            </div>
                                            <span class="probability-label">${t('doctor.newAnalysis.probabilityEstimated')}</span>
                                        </div>
                                    </div>
                                    <div class="results-metrics">
                                        <div class="metric-card"><span class="metric-label">${t('doctor.newAnalysis.cdRatio')}</span><span class="metric-value" style="color:var(--danger);" id="resCd">-</span><span class="metric-normal">${t('metric.cdNormal')}</span></div>
                                        <div class="metric-card"><span class="metric-label">${t('doctor.newAnalysis.rnfl')}</span><span class="metric-value" style="color:var(--warning);" id="resRnfl">-</span><span class="metric-normal">${t('metric.rnflNormal')}</span></div>
                                        <div class="metric-card"><span class="metric-label">${t('doctor.newAnalysis.pio')}</span><span class="metric-value" style="color:var(--warning);" id="resPio">-</span><span class="metric-normal">${t('metric.pioNormal')}</span></div>
                                        <div class="metric-card"><span class="metric-label">${t('doctor.newAnalysis.aiConfidence')}</span><span class="metric-value" style="color:var(--success);" id="resConf">-</span><span class="metric-normal">${t('metric.highQuality')}</span></div>
                                    </div>
                                    <div class="alert alert-danger" id="clinicalInterpretation">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <div><strong>${t('doctor.newAnalysis.clinicalInterpretation')}</strong><p id="interpText"></p></div>
                                    </div>
                                    <div class="results-actions">
                                        <button class="btn btn-outline-primary" onclick="goToStep(5)"><i class="fas fa-eye"></i> ${t('doctor.newAnalysis.viewAIMap')}</button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-content" id="dstep5" style="display:none;">
                                <div class="gradcam-content">
                                    <div class="alert alert-info">
                                        <i class="fas fa-info-circle"></i>
                                        <span>${t('gradcam.info')}</span>
                                    </div>
                                    <div class="gradcam-grid">
                                        <div class="gradcam-card">
                                            <div class="gradcam-image" id="gradcamOd">
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
                                                    <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">${t('gradcam.eyeOd')}</text>
                                                </svg>
                                                <span class="gradcam-label">OD</span>
                                            </div>
                                            <div class="gradcam-info">
                                                <span class="gradcam-badge high">${t('gradcam.highActivation')}</span>
                                                <p>${t('gradcam.odDesc')}</p>
                                            </div>
                                        </div>
                                        <div class="gradcam-card">
                                            <div class="gradcam-image" id="gradcamOi">
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
                                                    <text x="100" y="190" text-anchor="middle" fill="#8899aa" font-size="12" font-family="Inter, sans-serif">${t('gradcam.eyeOi')}</text>
                                                </svg>
                                                <span class="gradcam-label">OI</span>
                                            </div>
                                            <div class="gradcam-info">
                                                <span class="gradcam-badge medium">${t('gradcam.mediumActivation')}</span>
                                                <p>${t('gradcam.oiDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gradcam-legend">
                                        <div class="legend-item"><span style="background:#ff2200;"></span> ${t('gradcam.legendHigh')}</div>
                                        <div class="legend-item"><span style="background:#ff8800;"></span> ${t('gradcam.legendMedium')}</div>
                                        <div class="legend-item"><span style="background:#ffdd00;"></span> ${t('gradcam.legendLow')}</div>
                                    </div>
                                    <div class="gradcam-interpretation">
                                        <h4><i class="fas fa-lightbulb"></i> ${t('gradcam.interpretationTitle')}</h4>
                                        <p>${t('gradcam.interpretationText')}</p>
                                    </div>
                                    <div class="results-actions">
                                        <button class="btn btn-outline-primary" onclick="goToStep(4)"><i class="fas fa-arrow-left"></i> ${t('doctor.newAnalysis.back')}</button>
                                        <button class="btn btn-primary" onclick="saveAndGenerateReport()"><i class="fas fa-file-pdf"></i> ${t('doctor.newAnalysis.saveAndReport')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="doctor-panel" id="dpanel-history">
                        <div class="panel-header">
                            <h3><i class="fas fa-history"></i> ${t('doctor.history.title')}</h3>
                        </div>
                        <div class="table-wrap">
                            <div class="table-header">
                                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                                    <input class="form-control" placeholder="${t('doctor.history.search')}" id="historySearch" style="max-width:220px; padding:10px 14px; font-size:16px;" oninput="filterHistory()" />
                                    <select class="form-control" id="historyFilter" style="max-width:180px; padding:10px 14px; font-size:16px;" onchange="filterHistory()">
                                        <option value="all">${t('doctor.history.all')}</option>
                                        <option value="high">${t('doctor.history.highRisk')}</option>
                                        <option value="medium">${t('doctor.history.mediumRisk')}</option>
                                        <option value="low">${t('doctor.history.lowRisk')}</option>
                                    </select>
                                </div>
                            </div>
                            <table>
                                <thead><tr><th>#</th><th>${t('doctor.dashboard.patient')}</th><th>${t('doctor.dashboard.age')}</th><th>Fecha</th><th>C/D</th><th>${t('doctor.dashboard.result')}</th><th>${t('doctor.dashboard.action')}</th></tr></thead>
                                <tbody id="historyTableBody"></tbody>
                            </table>
                        </div>
                    </div>

                    <div class="doctor-panel" id="dpanel-help">
                        <div class="panel-header">
                            <h3><i class="fas fa-question-circle"></i> ${t('doctor.help.title')}</h3>
                        </div>
                        <div class="help-content">
                            <div class="help-card">
                                <h4><i class="fas fa-headset"></i> ${t('doctor.help.contact')}</h4>
                                <p><i class="fas fa-envelope"></i> soporte@glaucoia.pe</p>
                                <p><i class="fas fa-phone"></i> (074) 200-3456</p>
                                <p><i class="fas fa-clock"></i> ${t('help.schedule')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// Utilities
// ============================================================
function getAge(birthDate) {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
}

function formatDate(date) {
    const d = new Date(date);
    const locale = currentLang === 'es' ? 'es-ES' : 'en-US';
    return d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateShort(date) {
    const d = new Date(date);
    const locale = currentLang === 'es' ? 'es-ES' : 'en-US';
    return d.toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric' });
}

function getRiskLabel(risk) { return t('risk.' + risk) || risk; }

function getRiskBadge(risk) {
    const classes = { 'high': 'badge-danger', 'medium': 'badge-warning', 'low': 'badge-success' };
    return classes[risk] || 'badge-info';
}

function logoutPatient() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    AppState.userType = null;
    AppState.selectedPatientForAnalysis = null;
    resetAnalysisState();
    navigateTo('home');
    showAlert('info', t('alert.info'), t('msg.logoutSuccess'));
}

function logoutDoctor() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    AppState.userType = null;
    AppState.selectedPatientForAnalysis = null;
    resetAnalysisState();
    navigateTo('home');
    showAlert('info', t('alert.info'), t('msg.logoutSuccess'));
}

function resetAnalysisState() {
    AppState.uploadedImages = { od: false, oi: false };
    AppState.isAnalysisComplete = false;
    AppState.UIState.currentAnalysisStep = 1;
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// ============================================================
// Auth
// ============================================================
function showAuthModal(type) {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const footer = document.getElementById('authModalType');
    const patientInfo = document.getElementById('authPatientInfo');
    const doctorInfo = document.getElementById('authDoctorInfo');
    const loginForm = document.getElementById('authLoginForm');
    const registerForm = document.getElementById('authRegisterForm');
    const doctorRegToggle = document.getElementById('doctorRegisterToggle');

    if (!modal) return;
    AppState.userType = type;

    if (type === 'patient') {
        if (title) title.textContent = t('auth.patientAccess');
        if (footer) footer.textContent = t('patient.role');
        const u = document.getElementById('authUser');
        const p = document.getElementById('authPassword');
        if (u) u.value = '42156783';
        if (p) p.value = '123456';
        if (patientInfo) patientInfo.style.display = 'flex';
        if (doctorInfo) doctorInfo.style.display = 'none';
        if (doctorRegToggle) doctorRegToggle.style.display = 'none';
    } else {
        if (title) title.textContent = t('auth.doctorAccess');
        if (footer) footer.textContent = t('doctor.role');
        const u = document.getElementById('authUser');
        const p = document.getElementById('authPassword');
        if (u) u.value = '48923';
        if (p) p.value = '123456';
        if (patientInfo) patientInfo.style.display = 'none';
        if (doctorInfo) doctorInfo.style.display = 'flex';
        if (doctorRegToggle) doctorRegToggle.style.display = 'block';
    }

    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
    modal.classList.add('open');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('open');
}

function showLoginForm() {
    const l = document.getElementById('authLoginForm');
    const r = document.getElementById('authRegisterForm');
    const t1 = document.getElementById('doctorRegisterToggle');
    if (l) l.style.display = 'block';
    if (r) r.style.display = 'none';
    if (t1 && AppState.userType === 'doctor') t1.style.display = 'block';
}

function showDoctorRegisterForm() {
    const l = document.getElementById('authLoginForm');
    const r = document.getElementById('authRegisterForm');
    if (l) l.style.display = 'none';
    if (r) r.style.display = 'block';
}

function handleAuth() {
    const userInput = document.getElementById('authUser');
    const passInput = document.getElementById('authPassword');
    if (!userInput || !passInput) return;

    const user = userInput.value.trim();
    const password = passInput.value.trim();

    if (!user || !password) {
        showAlert('warning', t('alert.warning'), t('msg.completeFields'));
        return;
    }

    if (AppState.userType === 'patient') {
        const patient = AppState.patients.find(p => p.dni === user);
        if (!patient) {
            showAlert('warning', t('alert.warning'), t('msg.patientNotRegistered'));
            return;
        }
        if (patient.password !== password) {
            showAlert('danger', t('alert.danger'), t('msg.invalidCredentials'));
            return;
        }
        AppState.currentUser = {
            type: 'patient', dni: patient.dni, name: patient.name,
            lastName: patient.lastName, patientId: patient.id
        };
        AppState.patientData = {
            name: patient.name, lastName: patient.lastName, dni: patient.dni,
            birthDate: patient.birthDate, age: patient.age,
            pioOd: patient.pioOd || 16, pioOi: patient.pioOi || 16
        };
        if (patient.analyses && patient.analyses.length > 0) {
            const last = patient.analyses[patient.analyses.length - 1];
            AppState.analysisResults = {
                probability: last.probability, cdRatio: last.cdRatio, rnfl: last.rnfl,
                pio: last.pio, confidence: last.confidence || 91, risk: last.risk
            };
        } else {
            AppState.analysisResults = { probability: 0, cdRatio: 0, rnfl: 0, pio: 0, confidence: 0, risk: 'low' };
        }
        AppState.isLoggedIn = true;
        closeAuthModal();
        navigateTo('patient');
        showAlert('success', t('alert.success'), `${t('msg.loginSuccess')} ${patient.name}`);
    } else {
        const doctor = AppState.doctors.find(d => d.dni === user);
        if (!doctor) {
            showAlert('warning', t('alert.warning'), t('msg.invalidCredentials'));
            return;
        }
        if (doctor.password !== password) {
            showAlert('danger', t('alert.danger'), t('msg.invalidCredentials'));
            return;
        }
        AppState.currentUser = {
            type: 'doctor', dni: doctor.dni, name: doctor.name,
            lastName: doctor.lastName, id: doctor.id, cmp: doctor.cmp
        };
        AppState.isLoggedIn = true;
        closeAuthModal();
        navigateTo('doctor');
        showAlert('success', t('alert.success'), `${t('msg.loginSuccess')} Dr. ${doctor.name}`);
    }
}

function handleDoctorRegister() {
    const nameEl = document.getElementById('regName');
    const lastNameEl = document.getElementById('regLastName');
    const dniEl = document.getElementById('regDni');
    const cmpEl = document.getElementById('regCmp');
    const passwordEl = document.getElementById('regPassword');
    if (!nameEl || !lastNameEl || !dniEl || !passwordEl) return;

    const name = nameEl.value.trim();
    const lastName = lastNameEl.value.trim();
    const dni = dniEl.value.trim();
    const cmp = cmpEl ? cmpEl.value.trim() : '';
    const password = passwordEl.value.trim();

    if (!name || !lastName || !dni || !password) {
        showAlert('warning', t('alert.warning'), t('msg.completeFields'));
        return;
    }

    const existsInDoctors = AppState.doctors.find(d => d.dni === dni);
    const existsInPatients = AppState.patients.find(p => p.dni === dni);
    if (existsInDoctors || existsInPatients) {
        showAlert('danger', t('alert.danger'), t('msg.dniExists'));
        return;
    }

    AppState.doctors.push({
        id: 'd' + (AppState.doctors.length + 1),
        name: name,
        lastName: lastName,
        dni: dni,
        password: password,
        cmp: cmp
    });
    persistAppState();

    showAlert('success', t('alert.success'), t('msg.doctorRegistered'));
    showLoginForm();
    const userInput = document.getElementById('authUser');
    if (userInput) userInput.value = dni;
    nameEl.value = '';
    lastNameEl.value = '';
    dniEl.value = '';
    if (cmpEl) cmpEl.value = '';
    passwordEl.value = '';
}

// ============================================================
// Patient Logic
// ============================================================
function initPatientDashboard() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const initials = (AppState.patientData.name.charAt(0) + AppState.patientData.lastName.charAt(0)).toUpperCase();

    const pName = document.getElementById('pName');
    const pAvatar = document.getElementById('pAvatar');
    const patientName = document.getElementById('patientName');
    const pAvatarLg = document.getElementById('pAvatarLg');
    const patientDetail = document.getElementById('patientDetail');

    if (pName) pName.textContent = name;
    if (pAvatar) pAvatar.textContent = initials;
    if (patientName) patientName.textContent = name;
    if (pAvatarLg) pAvatarLg.textContent = initials;

    const age = getAge(AppState.patientData.birthDate);
    const hasAnalysis = AppState.analysisResults.probability > 0;
    if (patientDetail) {
        patientDetail.textContent = hasAnalysis
            ? `${age} años · ${t('patient.dashboard.lastAnalysis')}: ${formatDate(new Date())}`
            : `${age} años`;
    }

    updatePatientResults();
    updatePatientReport();
    renderEducationCards();
}

function updatePatientResults() {
    const prob = AppState.analysisResults.probability;
    const risk = AppState.analysisResults.risk;
    const hasAnalysis = prob > 0;

    const dashProb = document.getElementById('dashProb');
    const dashProgress = document.getElementById('dashProgress');
    const resultProb = document.getElementById('resultProb');
    const badge = document.getElementById('resultBadge');
    const riskBadge = document.getElementById('riskBadge');
    const dashboardAlert = document.getElementById('dashboardAlert');

    if (!hasAnalysis) {
        if (dashProb) dashProb.textContent = '-';
        if (dashProgress) dashProgress.style.width = '0%';
        if (resultProb) resultProb.textContent = '-';
        if (badge) { badge.textContent = '-'; badge.className = 'badge'; }
        if (riskBadge) {
            riskBadge.className = 'risk-badge low';
            riskBadge.innerHTML = `<i class="fas fa-info-circle"></i> ${t('patient.dashboard.noAnalysis')}`;
        }
        if (dashboardAlert) {
            dashboardAlert.innerHTML = `<div class="alert alert-info"><i class="fas fa-info-circle"></i><div>${t('patient.dashboard.noAnalysis')}</div></div>`;
        }
        return;
    }

    if (dashProb) dashProb.textContent = prob + '%';
    if (dashProgress) dashProgress.style.width = prob + '%';
    if (resultProb) resultProb.textContent = prob + '%';

    const riskClasses = { 'high': 'badge-danger', 'medium': 'badge-warning', 'low': 'badge-success' };
    if (badge) {
        badge.textContent = getRiskLabel(risk);
        badge.className = 'badge ' + (riskClasses[risk] || 'badge-danger');
    }
    if (riskBadge) {
        riskBadge.className = 'risk-badge ' + risk;
        riskBadge.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${getRiskLabel(risk)}`;
    }

    const probColor = prob > 60 ? 'var(--danger)' : (prob > 30 ? 'var(--warning)' : 'var(--success)');
    if (dashProb) dashProb.style.color = probColor;
    if (resultProb) resultProb.style.color = probColor;
    if (dashProgress) dashProgress.style.background = probColor;

    if (dashboardAlert) {
        if (risk === 'high') {
            dashboardAlert.innerHTML = `<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i><div><strong>${t('alert.warning')}</strong><p>${t('patient.result.doctorWillExplain')}</p></div><button class="btn btn-sm btn-outline-danger" onclick="showPatientPanel('panel-citas')">${t('patient.nav.appointments')}</button></div>`;
        } else if (risk === 'medium') {
            dashboardAlert.innerHTML = `<div class="alert alert-warning"><i class="fas fa-info-circle"></i><div>${t('patient.result.doctorWillExplain')}</div></div>`;
        } else {
            dashboardAlert.innerHTML = `<div class="alert alert-success"><i class="fas fa-check-circle"></i><div>${t('report.interpretationLow')}</div></div>`;
        }
    }
}

function updatePatientReport() {
    const name = `${AppState.patientData.name} ${AppState.patientData.lastName}`;
    const age = getAge(AppState.patientData.birthDate);
    const prob = AppState.analysisResults.probability;

    const reportName = document.getElementById('reportName');
    const reportDni = document.getElementById('reportDni');
    const reportProb = document.getElementById('reportProb');
    const reportInterp = document.getElementById('reportInterp');
    const reportDate = document.getElementById('reportDate');

    if (reportName) reportName.textContent = name;
    if (reportDni) reportDni.textContent = `DNI: ${AppState.patientData.dni} · ${age} años`;
    if (reportProb) reportProb.textContent = prob > 0 ? prob + '%' : '-';
    if (reportDate) reportDate.textContent = formatDate(new Date());
    if (reportInterp) {
        const risk = AppState.analysisResults.risk;
        if (risk === 'high') reportInterp.textContent = t('report.interpretationHigh');
        else if (risk === 'medium') reportInterp.textContent = t('report.interpretationMedium');
        else reportInterp.textContent = t('report.interpretationLow');
    }
}

function renderEducationCards() {
    const prob = AppState.analysisResults.probability;
    const cd = AppState.analysisResults.cdRatio;
    const container = document.getElementById('eduList');
    if (!container) return;

    if (prob === 0) {
        container.innerHTML = `<div class="alert alert-info"><i class="fas fa-info-circle"></i><span>${t('msg.noAnalysisYet')}</span></div>`;
        return;
    }

    container.innerHTML = `
        <div class="edu-card" onclick="toggleEduCard(this)">
            <div class="edu-header">
                <div class="edu-icon" style="background: var(--danger-light); color: var(--danger);">${prob}%</div>
                <div class="edu-title"><h4>${t('patient.edu.card1Title')}</h4><p>${t('patient.edu.card1Sub')}</p></div>
                <i class="fas fa-chevron-down edu-toggle"></i>
            </div>
            <div class="edu-body" style="display:none;">
                <p>${t('edu.percentText', { prob: prob })}</p>
                <div class="edu-bar"><div class="edu-bar-fill" style="width:${prob}%; background: var(--danger);"></div></div>
                <div class="edu-bar-labels"><span>${100 - prob}% ${t('edu.percentBarLeft')}</span><span>${prob}% ${t('edu.percentBarRight')}</span></div>
                <div class="alert alert-info" style="font-size:15px; margin-top:8px;"><i class="fas fa-info-circle"></i> ${t('edu.percentInfo')}</div>
            </div>
        </div>
        <div class="edu-card" onclick="toggleEduCard(this)">
            <div class="edu-header">
                <div class="edu-icon" style="background: var(--primary-light); color: var(--primary);"><i class="fas fa-circle"></i></div>
                <div class="edu-title"><h4>${t('patient.edu.card2Title')}</h4><p>${t('patient.edu.card2Sub')}</p></div>
                <i class="fas fa-chevron-down edu-toggle"></i>
            </div>
            <div class="edu-body" style="display:none;">
                <p>${t('edu.cdText')}</p>
                <div class="edu-visual">
                    <div><span>${t('edu.cdNormal')}</span></div>
                    <div><span>${t('edu.cdYours')} ${cd}</span> <span style="font-size:20px; color: var(--danger);">●</span></div>
                </div>
                <div class="alert alert-warning" style="font-size:15px; margin-top:8px;"><i class="fas fa-exclamation-circle"></i> ${t('edu.cdWarning')}</div>
            </div>
        </div>
        <div class="edu-card" onclick="toggleEduCard(this)">
            <div class="edu-header">
                <div class="edu-icon" style="background: var(--secondary-light); color: var(--secondary);"><i class="fas fa-brain"></i></div>
                <div class="edu-title"><h4>${t('patient.edu.card3Title')}</h4><p>${t('patient.edu.card3Sub')}</p></div>
                <i class="fas fa-chevron-down edu-toggle"></i>
            </div>
            <div class="edu-body" style="display:none;">
                <div class="edu-steps">
                    <div><span class="step-num">1</span> ${t('edu.aiStep1')}</div>
                    <div><span class="step-num">2</span> ${t('edu.aiStep2')}</div>
                    <div><span class="step-num">3</span> ${t('edu.aiStep3')}</div>
                    <div><span class="step-num">4</span> ${t('edu.aiStep4')}</div>
                </div>
            </div>
        </div>
        <div class="edu-card" onclick="toggleEduCard(this)">
            <div class="edu-header">
                <div class="edu-icon" style="background: var(--warning-light); color: var(--warning);"><i class="fas fa-heartbeat"></i></div>
                <div class="edu-title"><h4>${t('patient.edu.card4Title')}</h4><p>${t('patient.edu.card4Sub')}</p></div>
                <i class="fas fa-chevron-down edu-toggle"></i>
            </div>
            <div class="edu-body" style="display:none;">
                <div class="alert alert-success" style="font-size:15px;"><i class="fas fa-check-circle"></i> ${t('edu.nextStep1')}</div>
                <div class="alert alert-info" style="font-size:15px;"><i class="fas fa-pills"></i> ${t('edu.nextStep2')}</div>
                <div class="alert alert-info" style="font-size:15px;"><i class="fas fa-sun"></i> ${t('edu.nextStep3')}</div>
                <button class="btn btn-primary btn-sm" onclick="showPatientPanel('panel-citas')"><i class="fas fa-calendar"></i> ${t('patient.nav.appointments')}</button>
            </div>
        </div>
    `;
}

function showPatientPanel(panelId) {
    AppState.UIState.activePatientPanel = panelId;
    document.querySelectorAll('.patient-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-item[data-panel]').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(panelId);
    if (target) target.classList.add('active');
    const navItem = document.querySelector(`.sidebar-nav-item[data-panel="${panelId}"]`);
    if (navItem) navItem.classList.add('active');
    if (panelId === 'panel-reporte') updatePatientReport();
    if (panelId === 'panel-edu') renderEducationCards();
}

function toggleEduCard(card) {
    const body = card.querySelector('.edu-body');
    const isOpen = card.classList.contains('open');
    body.style.display = isOpen ? 'none' : 'block';
    card.classList.toggle('open');
}

function simulatePatientUpload(eye) {
    const statusId = eye === 'od' ? 'pUploadOd' : 'pUploadOi';
    const statusEl = document.getElementById(statusId);
    if (!statusEl) return;
    const zone = statusEl.closest('.upload-zone');
    if (zone) zone.classList.add('uploaded');
    statusEl.textContent = t('patient.upload.loaded');
    statusEl.style.color = 'var(--success)';
    AppState.uploadedImages[eye] = true;
    if (AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        const result = document.getElementById('pUploadResult');
        if (result) result.style.display = 'block';
        showAlert('success', t('alert.success'), t('msg.imagesLoaded'));
    } else {
        showAlert('info', t('alert.info'), t('msg.imageLoaded'));
    }
}

// ============================================================
// AI logic based on IOP and Age
// ============================================================
function calculateAnalysisFromPatient(patient) {
    const pioOd = patient.pioOd || 16;
    const pioOi = patient.pioOi || 16;
    const age = patient.age || getAge(patient.birthDate) || 50;
    const avgPio = (pioOd + pioOi) / 2;

    let probability;
    if (avgPio <= 21 && age <= 50) probability = Math.floor(Math.random() * 15) + 10;
    else if (avgPio <= 21 && age > 50) probability = Math.floor(Math.random() * 20) + 25;
    else if (avgPio > 21 && age <= 50) probability = Math.floor(Math.random() * 20) + 40;
    else probability = Math.floor(Math.random() * 25) + 65;

    if (avgPio > 25) probability = Math.min(95, probability + 10);
    if (avgPio > 30) probability = Math.min(98, probability + 10);
    if (age > 75) probability = Math.min(95, probability + 5);

    const cdRatio = parseFloat((0.3 + (probability / 100) * 0.6).toFixed(2));
    const rnfl = Math.round(100 - (probability / 100) * 50);
    const confidence = Math.floor(Math.random() * 8) + 90;

    let risk;
    if (probability >= 65) risk = 'high';
    else if (probability >= 40) risk = 'medium';
    else risk = 'low';

    return { probability, cdRatio, rnfl, pio: Math.round(avgPio), confidence, risk };
}

function simulatePatientAnalysis() {
    const result = document.getElementById('pUploadResult');
    if (!result) return;
    result.innerHTML = `<div class="alert alert-info"><i class="fas fa-spinner fa-spin"></i><div><strong>${t('doctor.newAnalysis.analyzing')}</strong><p>${t('patient.upload.analyzing')}</p></div></div>`;

    setTimeout(() => {
        const results = calculateAnalysisFromPatient(AppState.patientData);
        AppState.analysisResults = results;

        updatePatientResults();
        updatePatientReport();
        renderEducationCards();

        const patient = AppState.patients.find(p => p.dni === AppState.patientData.dni);
        if (patient) {
            if (!patient.analyses) patient.analyses = [];
            patient.analyses.push({
                date: new Date().toISOString().split('T')[0],
                probability: results.probability, cdRatio: results.cdRatio,
                rnfl: results.rnfl, pio: results.pio,
                confidence: results.confidence, risk: results.risk
            });
            persistAppState();
        }
        addToHistory(AppState.patientData, results);

        result.innerHTML = `
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${t('msg.analysisComplete')}</strong>
                    <p>${t('patient.result.probability')}: <strong>${results.probability}%</strong></p>
                </div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
                <button class="btn btn-primary" onclick="showPatientPanel('panel-result')">
                    <i class="fas fa-chart-bar"></i> ${t('patient.dashboard.viewResult')}
                </button>
            </div>
        `;
        showAlert('success', t('msg.analysisComplete'), t('msg.analysisCompleteDesc'));
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
        cdRatio: results.cdRatio, rnfl: results.rnfl, pio: results.pio,
        confidence: results.confidence, risk: results.risk,
        probability: results.probability, reviewed: false
    });
    persistAppState();
}

function generatePatientPDF() {
    const content = document.getElementById('patientReportContent');
    if (!content) return;
    showAlert('confirm', t('alert.confirm'), t('msg.generateReportConfirm'), () => {
        html2canvas(content, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = 210;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('reporte_paciente_glaucoia.pdf');
            showAlert('success', t('alert.success'), t('msg.reportGenerated'));
        });
    });
}

// ============================================================
// Doctor Logic
// ============================================================
function initDoctorDashboard() {
    const name = AppState.currentUser ? AppState.currentUser.name : '';
    const lastName = AppState.currentUser ? AppState.currentUser.lastName : '';
    const firstLastName = lastName.split(' ')[0] || '';
    const fullShort = `${name} ${firstLastName}`.trim();

    const greeting = document.getElementById('doctorGreeting');
    const dName = document.getElementById('dName');
    const dAvatar = document.getElementById('dAvatar');

    if (greeting) greeting.textContent = `${t('doctor.dashboard.greeting')}, Dr. ${fullShort}`;
    if (dName) dName.textContent = `Dr. ${fullShort}`;
    if (dAvatar) dAvatar.textContent = (name.charAt(0) + (firstLastName.charAt(0) || '')).toUpperCase();

    updateDoctorStats();
    updateHistoryTable();
    updateRegisteredPatientsTable();
}

function updateDoctorStats() {
    const total = AppState.patients.length;
    const analyses = AppState.history.length;
    const highRisk = AppState.history.filter(h => h.risk === 'high').length;
    const pending = AppState.history.filter(h => !h.reviewed).length;

    const totalEl = document.getElementById('totalPatients');
    const monthlyEl = document.getElementById('monthlyAnalyses');
    const highRiskEl = document.getElementById('highRiskCount');
    const pendingAlert = document.getElementById('pendingAlert');

    if (totalEl) totalEl.textContent = total;
    if (monthlyEl) monthlyEl.textContent = analyses;
    if (highRiskEl) highRiskEl.textContent = highRisk;

    if (pendingAlert) {
        if (pending === 0) pendingAlert.style.display = 'none';
        else {
            pendingAlert.style.display = 'flex';
            pendingAlert.innerHTML = `
                <i class="fas fa-clock"></i>
                <span>${t('doctor.dashboard.pendingReviews')} (${pending})</span>
                <button class="btn btn-sm btn-outline-warning" onclick="showDoctorPanel('dpanel-history')">${t('doctor.dashboard.viewHistory')}</button>
            `;
        }
    }

    const tableBody = document.getElementById('recentPatientsTable');
    if (tableBody) {
        const recent = AppState.history.slice(-5).reverse();
        if (recent.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">${t('doctor.history.noRecords')}</td></tr>`;
        } else {
            tableBody.innerHTML = recent.map(h => `
                <tr>
                    <td><b>${h.patientName}</b></td>
                    <td>${h.age}</td>
                    <td>${formatDateShort(h.date)}</td>
                    <td><span class="badge ${getRiskBadge(h.risk)}">${getRiskLabel(h.risk)}</span></td>
                    <td><button class="btn btn-sm btn-secondary" onclick="viewHistoryByDni('${h.patientDni}')">${t('doctor.dashboard.view')}</button></td>
                </tr>
            `).join('');
        }
    }
}

function viewHistoryByDni(dni) {
    const idx = AppState.history.findIndex(h => h.patientDni === dni);
    if (idx >= 0) viewHistoryDetail(idx);
}

function updateRegisteredPatientsTable() {
    const tbody = document.getElementById('registeredPatientsTable');
    if (!tbody) return;

    if (AppState.patients.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:20px;">${t('doctor.registeredPatients.noPatients')}</td></tr>`;
        return;
    }

    tbody.innerHTML = AppState.patients.map(p => `
        <tr>
            <td><b>${p.name} ${p.lastName}</b></td>
            <td>${p.dni}</td>
            <td>${p.age}</td>
            <td>${p.pioOd || '-'} mmHg</td>
            <td>${p.pioOi || '-'} mmHg</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-sm btn-secondary" onclick="viewPatientFromDashboard(${p.id})">${t('doctor.dashboard.view')}</button>
                    <button class="btn btn-sm btn-outline-primary" onclick="openEditPatientModal(${p.id})">${t('doctor.dashboard.edit')}</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterRegisteredPatients() {
    const searchEl = document.getElementById('registeredSearch');
    if (!searchEl) return;
    const search = searchEl.value.toLowerCase();
    const rows = document.querySelectorAll('#registeredPatientsTable tr');
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(search) ? '' : 'none';
    });
}

function clearNewPatientForm() {
    ['docName', 'docLastName', 'docDni', 'docBirth', 'docPassword'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const pioOdEl = document.getElementById('docPioOd');
    const pioOiEl = document.getElementById('docPioOi');
    if (pioOdEl) pioOdEl.value = '16';
    if (pioOiEl) pioOiEl.value = '16';
    const pwToggle = document.querySelector('#docPassword ~ .password-toggle');
    const pwInput = document.getElementById('docPassword');
    if (pwInput) pwInput.type = 'password';
    if (pwToggle) pwToggle.innerHTML = '<i class="fas fa-eye"></i>';
    showDoctorPanel('dpanel-dash');
}

function saveNewPatient() {
    const nameEl = document.getElementById('docName');
    const lastNameEl = document.getElementById('docLastName');
    const dniEl = document.getElementById('docDni');
    const birthEl = document.getElementById('docBirth');
    const pioOdEl = document.getElementById('docPioOd');
    const pioOiEl = document.getElementById('docPioOi');
    const passwordEl = document.getElementById('docPassword');
    if (!nameEl || !lastNameEl || !dniEl || !birthEl || !passwordEl) return;

    const name = nameEl.value.trim();
    const lastName = lastNameEl.value.trim();
    const dni = dniEl.value.trim();
    const birthDate = birthEl.value;
    const pioOd = parseInt(pioOdEl.value) || 16;
    const pioOi = parseInt(pioOiEl.value) || 16;
    const password = passwordEl.value.trim();

    if (!name || !lastName || !dni || !birthDate || !password) {
        showAlert('warning', t('alert.warning'), t('msg.completeFields'));
        return;
    }

    const age = getAge(birthDate);
    let patient = AppState.patients.find(p => p.dni === dni);
    let isUpdate = false;

    if (patient) {
        patient.name = name;
        patient.lastName = lastName;
        patient.birthDate = birthDate;
        patient.age = age;
        patient.pioOd = pioOd;
        patient.pioOi = pioOi;
        patient.password = password;
        isUpdate = true;
    } else {
        patient = {
            id: AppState.patients.length + 1, name, lastName, dni, birthDate, age,
            pioOd, pioOi, password, analyses: []
        };
        AppState.patients.push(patient);
    }

    persistAppState();
    updateRegisteredPatientsTable();
    updateDoctorStats();
    showAlert('success', t('alert.success'), isUpdate ? t('msg.patientUpdated') : t('msg.patientRegistered'));
    clearNewPatientForm();
}

// Edit patient modal (doctor only)
function openEditPatientModal(patientId) {
    const p = AppState.patients.find(pt => pt.id === patientId);
    if (!p) return;

    const existing = document.getElementById('editPatientModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'editPatientModal';
    modal.className = 'auth-modal open';
    modal.innerHTML = `
        <div class="auth-modal-content">
            <div class="auth-modal-header">
                <h3>${t('doctor.editPatient.title')}</h3>
                <button class="auth-modal-close" onclick="closeEditPatientModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="auth-modal-body">
                <div class="form-grid">
                    <div class="form-group"><label>${t('doctor.newPatient.names')}</label><input type="text" class="form-control" id="editName" value="${p.name}" /></div>
                    <div class="form-group"><label>${t('doctor.newPatient.lastNames')}</label><input type="text" class="form-control" id="editLastName" value="${p.lastName}" /></div>
                    <div class="form-group"><label>${t('doctor.newPatient.dni')}</label><input type="text" class="form-control" id="editDni" value="${p.dni}" /></div>
                    <div class="form-group"><label>${t('doctor.newPatient.birthDate')}</label><input type="date" class="form-control" id="editBirth" value="${p.birthDate}" /></div>
                    <div class="form-group"><label>${t('doctor.newPatient.pioOd')}</label><input type="number" class="form-control" id="editPioOd" value="${p.pioOd}" /></div>
                    <div class="form-group"><label>${t('doctor.newPatient.pioOi')}</label><input type="number" class="form-control" id="editPioOi" value="${p.pioOi}" /></div>
                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label>${t('doctor.newPatient.password')}</label>
                        <div class="password-wrapper">
                            <input type="password" class="form-control" id="editPassword" value="${p.password || ''}" />
                            <button type="button" class="password-toggle" onclick="togglePasswordVisibility('editPassword', this)">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auth-modal-footer" style="display:flex; gap:10px; justify-content:center;">
                <button class="btn btn-secondary" onclick="closeEditPatientModal()">${t('doctor.newPatient.cancel')}</button>
                <button class="btn btn-primary" onclick="saveEditedPatient(${patientId})">${t('doctor.editPatient.save')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
        if (e.target === this) closeEditPatientModal();
    });
}

function closeEditPatientModal() {
    const modal = document.getElementById('editPatientModal');
    if (modal) modal.remove();
}

function saveEditedPatient(patientId) {
    const p = AppState.patients.find(pt => pt.id === patientId);
    if (!p) return;

    const name = document.getElementById('editName').value.trim();
    const lastName = document.getElementById('editLastName').value.trim();
    const dni = document.getElementById('editDni').value.trim();
    const birthDate = document.getElementById('editBirth').value;
    const pioOd = parseInt(document.getElementById('editPioOd').value) || 16;
    const pioOi = parseInt(document.getElementById('editPioOi').value) || 16;
    const password = document.getElementById('editPassword').value.trim();

    if (!name || !lastName || !dni || !birthDate) {
        showAlert('warning', t('alert.warning'), t('msg.completeFields'));
        return;
    }

    const dniTaken = AppState.patients.some(pt => pt.dni === dni && pt.id !== patientId);
    if (dniTaken) {
        showAlert('danger', t('alert.danger'), t('msg.dniExists'));
        return;
    }

    p.name = name;
    p.lastName = lastName;
    p.dni = dni;
    p.birthDate = birthDate;
    p.age = getAge(birthDate);
    p.pioOd = pioOd;
    p.pioOi = pioOi;
    if (password) p.password = password;

    persistAppState();
    updateRegisteredPatientsTable();
    closeEditPatientModal();
    showAlert('success', t('alert.success'), t('msg.patientUpdated'));
}

function showDoctorPanel(panelId) {
    AppState.UIState.activeDoctorPanel = panelId;
    document.querySelectorAll('.doctor-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-item[data-dpanel]').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(panelId);
    if (target) target.classList.add('active');
    const navItem = document.querySelector(`.sidebar-nav-item[data-dpanel="${panelId}"]`);
    if (navItem) navItem.classList.add('active');
    if (panelId === 'dpanel-history') updateHistoryTable();
    if (panelId === 'dpanel-dash') updateDoctorStats();
    if (panelId === 'dpanel-registered') updateRegisteredPatientsTable();
}

function viewPatientFromDashboard(patientId) {
    const patient = AppState.patients.find(p => p.id === patientId);
    if (!patient) return;
    showDoctorPanel('dpanel-analysis');
    resetAnalysis();
    selectPatientForAnalysis(patient);
    goToStep(1);
}

// ============================================================
// Patient Search
// ============================================================
function searchPatients(query) {
    const results = document.getElementById('patientSearchResults');
    if (!results) return;
    if (!query || query.length < 1) {
        results.classList.remove('open');
        return;
    }
    const q = query.toLowerCase();
    const matches = AppState.patients.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.lastName.toLowerCase().includes(q) ||
        p.dni.includes(q)
    );
    if (matches.length === 0) {
        results.innerHTML = `<div class="search-result-item" style="cursor:default; color:var(--text-muted);">${t('doctor.newAnalysis.noResults')}</div>`;
    } else {
        results.innerHTML = matches.map(p => {
            const lastAnalysis = p.analyses && p.analyses.length > 0 ? p.analyses[p.analyses.length - 1] : null;
            const risk = lastAnalysis ? lastAnalysis.risk : null;
            const badgeHtml = risk ? `<span class="patient-badge ${risk}">${getRiskLabel(risk)}</span>` : '';
            return `
                <div class="search-result-item" onclick="selectPatientForAnalysisById(${p.id})">
                    <div class="patient-info">
                        <strong>${p.name} ${p.lastName}</strong>
                        <span>DNI: ${p.dni} · ${p.age} años</span>
                    </div>
                    ${badgeHtml}
                </div>
            `;
        }).join('');
    }
    results.classList.add('open');
}

function selectPatientForAnalysisById(patientId) {
    const patient = AppState.patients.find(p => p.id === patientId);
    if (patient) selectPatientForAnalysis(patient);
}

function selectPatientForAnalysis(patient) {
    AppState.selectedPatientForAnalysis = patient;
    AppState.patientData = {
        name: patient.name, lastName: patient.lastName, dni: patient.dni,
        birthDate: patient.birthDate, age: patient.age,
        pioOd: patient.pioOd || 16, pioOi: patient.pioOi || 16
    };

    const results = document.getElementById('patientSearchResults');
    if (results) results.classList.remove('open');

    const info = document.getElementById('selectedPatientInfo');
    if (info) {
        info.style.display = 'block';
        const nameEl = document.getElementById('selectedPatientName');
        const detailsEl = document.getElementById('selectedPatientDetails');
        if (nameEl) nameEl.textContent = `${patient.name} ${patient.lastName}`;
        if (detailsEl) detailsEl.textContent =
            `DNI: ${patient.dni} · ${patient.age} años · PIO OD: ${patient.pioOd} mmHg · PIO OI: ${patient.pioOi} mmHg`;
    }

    const input = document.getElementById('patientSearchInput');
    if (input) input.value = `${patient.name} ${patient.lastName}`;

    const header = document.getElementById('analysisPatientName');
    if (header) header.textContent = `${t('doctor.newAnalysis.patient')}: ${patient.name} ${patient.lastName}`;

    showAlert('success', t('alert.success'), `${t('doctor.newAnalysis.patient')}: ${patient.name} ${patient.lastName}`);
}

// ============================================================
// Analysis Steps
// ============================================================
function goToStep(step) {
    if (step >= 2 && !AppState.selectedPatientForAnalysis) {
        showAlert('warning', t('alert.warning'), t('msg.selectPatient'));
        return;
    }
    if (step >= 3 && (!AppState.uploadedImages.od || !AppState.uploadedImages.oi)) {
        showAlert('warning', t('alert.warning'), t('msg.selectImages'));
        return;
    }
    AppState.UIState.currentAnalysisStep = step;
    forceStepRender(step);
    if (step === 3) startAnalysisSimulation();
    if (step === 4) displayResults();
}

function forceStepRender(step) {
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
    });
    const target = document.getElementById(`dstep${step}`);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
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
}

function simulateUpload(eye) {
    const statusId = eye === 'od' ? 'uploadOd' : 'uploadOi';
    const statusEl = document.getElementById(statusId);
    if (!statusEl) return;
    const zone = statusEl.closest('.upload-zone');
    if (zone) zone.classList.add('uploaded');
    statusEl.textContent = t('patient.upload.loaded');
    statusEl.style.color = 'var(--success)';
    AppState.uploadedImages[eye] = true;
    if (AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        showAlert('success', t('alert.success'), t('msg.imagesLoaded'));
    } else {
        showAlert('info', t('alert.info'), t('msg.imageLoaded'));
    }
}

function startAnalysisSimulation() {
    const steps = [
        { id: 'procStep1', label: 'Pre-procesamiento de imagen', delay: 600 },
        { id: 'procStep2', label: 'Segmentación del disco óptico', delay: 1200 },
        { id: 'procStep3', label: 'Extracción de características morfológicas', delay: 1800 },
        { id: 'procStep4', label: 'Clasificación por modelo ResNet-50', delay: 2400 },
        { id: 'procStep5', label: 'Generación de mapa de atención', delay: 3000 }
    ];
    ['procStep1', 'procStep2', 'procStep3', 'procStep4', 'procStep5'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            el.className = 'processing-step pending';
            el.innerHTML = `<i class="far fa-circle"></i> ${steps[i].label}`;
        }
    });
    steps.forEach(step => {
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
        const btn = document.getElementById('showResultsBtn');
        if (btn) btn.style.display = 'inline-flex';
        showAlert('success', t('msg.analysisComplete'), t('msg.analysisCompleteDesc'));
    }, 3500);
}

function displayResults() {
    const patient = AppState.selectedPatientForAnalysis || AppState.patientData;
    const name = `${patient.name} ${patient.lastName}`;
    const age = patient.age || getAge(patient.birthDate);

    const results = calculateAnalysisFromPatient(patient);
    AppState.analysisResults = results;

    const { probability, cdRatio, rnfl, pio, confidence, risk } = results;

    const resultPatientName = document.getElementById('resultPatientName');
    const probText = document.getElementById('probText');
    const resCd = document.getElementById('resCd');
    const resRnfl = document.getElementById('resRnfl');
    const resPio = document.getElementById('resPio');
    const resConf = document.getElementById('resConf');

    if (resultPatientName) resultPatientName.textContent = `${name} · ${age} años`;
    if (probText) probText.textContent = probability + '%';
    if (resCd) resCd.textContent = cdRatio;
    if (resRnfl) resRnfl.textContent = rnfl + ' µm';
    if (resPio) resPio.textContent = pio + ' mmHg';
    if (resConf) resConf.textContent = confidence + '%';

    const circle = document.getElementById('probCircle');
    if (circle) {
        const offset = 263.89 * (1 - probability / 100);
        circle.setAttribute('stroke-dashoffset', offset);
        circle.setAttribute('stroke', probability > 60 ? '#ef4444' : (probability > 30 ? '#f59e0b' : '#22c55e'));
    }

    const badge = document.getElementById('resultRiskBadge');
    if (badge) {
        badge.className = 'badge ' + getRiskBadge(risk);
        badge.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${getRiskLabel(risk)}`;
    }

    const interp = document.getElementById('interpText');
    const interpBox = document.getElementById('clinicalInterpretation');
    if (interp && interpBox) {
        if (risk === 'high') { interp.textContent = t('report.interpretationHigh'); interpBox.className = 'alert alert-danger'; }
        else if (risk === 'medium') { interp.textContent = t('report.interpretationMedium'); interpBox.className = 'alert alert-warning'; }
        else { interp.textContent = t('report.interpretationLow'); interpBox.className = 'alert alert-success'; }
    }
}

// ============================================================
// Save & Generate Report
// ============================================================
function saveAndGenerateReport() {
    saveAnalysisResult(true);
    showAlert('confirm', t('alert.confirm'), t('msg.generateReportConfirm'), () => {
        generateDoctorPDFWithImages();
        setTimeout(() => { resetFullAnalysisFlow(); }, 800);
    });
}

function saveAnalysisResult(silent = false) {
    const patient = AppState.selectedPatientForAnalysis || AppState.patientData;
    const dni = patient.dni;

    let existingPatient = AppState.patients.find(p => p.dni === dni);
    if (!existingPatient) {
        existingPatient = {
            id: AppState.patients.length + 1, name: patient.name, lastName: patient.lastName,
            dni: dni, birthDate: patient.birthDate || '1970-01-01',
            age: patient.age || getAge(patient.birthDate),
            pioOd: patient.pioOd || 16, pioOi: patient.pioOi || 16,
            password: '123456', analyses: []
        };
        AppState.patients.push(existingPatient);
    }

    const analysis = {
        date: new Date().toISOString().split('T')[0],
        probability: AppState.analysisResults.probability,
        cdRatio: AppState.analysisResults.cdRatio,
        rnfl: AppState.analysisResults.rnfl,
        pio: AppState.analysisResults.pio,
        confidence: AppState.analysisResults.confidence,
        risk: AppState.analysisResults.risk,
        reviewed: true
    };
    if (!existingPatient.analyses) existingPatient.analyses = [];
    existingPatient.analyses.push(analysis);

    addToHistory(patient, AppState.analysisResults);
    persistAppState();
    updateDoctorStats();
    updateHistoryTable();

    if (!silent) showAlert('success', t('alert.success'), t('msg.analysisReset'));
}

function resetFullAnalysisFlow() {
    AppState.selectedPatientForAnalysis = null;
    AppState.uploadedImages = { od: false, oi: false };
    AppState.isAnalysisComplete = false;
    AppState.analysisResults = { probability: 0, cdRatio: 0, rnfl: 0, pio: 0, confidence: 0, risk: 'low' };
    AppState.patientData = { name: '', lastName: '', dni: '', birthDate: '', age: 0, pioOd: 0, pioOi: 0 };
    AppState.UIState.currentAnalysisStep = 1;

    showDoctorPanel('dpanel-analysis');
    resetAnalysis();
    showAlert('success', t('alert.success'), t('msg.analysisReset'));
}

function resetAnalysis() {
    AppState.uploadedImages = { od: false, oi: false };
    AppState.isAnalysisComplete = false;
    AppState.UIState.currentAnalysisStep = 1;

    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
    });
    document.querySelectorAll('.step-item').forEach(el => el.classList.remove('active', 'done'));
    document.querySelectorAll('.step-connector').forEach(el => el.classList.remove('active', 'done'));

    const step1 = document.querySelector('.step-item[data-step="1"]');
    if (step1) step1.classList.add('active');

    const dstep1 = document.getElementById('dstep1');
    if (dstep1) { dstep1.style.display = 'block'; dstep1.classList.add('active'); }

    ['uploadOd', 'uploadOi'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = t('patient.upload.pending');
            el.style.color = '';
            const zone = el.closest('.upload-zone');
            if (zone) zone.classList.remove('uploaded');
        }
    });

    const btn = document.getElementById('showResultsBtn');
    if (btn) btn.style.display = 'none';

    const labels = [
        'Pre-procesamiento de imagen',
        'Segmentación del disco óptico',
        'Extracción de características morfológicas',
        'Clasificación por modelo ResNet-50',
        'Generación de mapa de atención'
    ];
    ['procStep1', 'procStep2', 'procStep3', 'procStep4', 'procStep5'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            el.className = 'processing-step pending';
            el.innerHTML = `<i class="far fa-circle"></i> ${labels[i]}`;
        }
    });

    const searchInput = document.getElementById('patientSearchInput');
    if (searchInput) searchInput.value = '';
    const selectedInfo = document.getElementById('selectedPatientInfo');
    if (selectedInfo) selectedInfo.style.display = 'none';
    const searchResults = document.getElementById('patientSearchResults');
    if (searchResults) searchResults.classList.remove('open');
    const header = document.getElementById('analysisPatientName');
    if (header) header.textContent = '';
}

function generateDoctorPDFWithImages() {
    const patient = AppState.selectedPatientForAnalysis || AppState.patientData;
    const name = `${patient.name} ${patient.lastName}`;
    const age = patient.age || getAge(patient.birthDate);
    const prob = AppState.analysisResults.probability;
    const cd = AppState.analysisResults.cdRatio;
    const rnfl = AppState.analysisResults.rnfl;
    const conf = AppState.analysisResults.confidence;
    const risk = AppState.analysisResults.risk;
    const today = new Date().toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });

    let interpretation = t('report.interpretationLow');
    if (risk === 'high') interpretation = t('report.interpretationHigh');
    else if (risk === 'medium') interpretation = t('report.interpretationMedium');

    const reportHtml = document.createElement('div');
    reportHtml.style.cssText = 'padding: 24px; background: white; font-family: Inter, sans-serif; max-width: 700px; position: fixed; left: -9999px; top: 0;';

    const gradcamOd = document.getElementById('gradcamOd');
    const gradcamOi = document.getElementById('gradcamOi');
    const svgOd = gradcamOd ? gradcamOd.querySelector('svg').outerHTML : '';
    const svgOi = gradcamOi ? gradcamOi.querySelector('svg').outerHTML : '';

    reportHtml.innerHTML = `
        <div style="border-bottom: 2px solid #1A5FA8; padding-bottom: 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 22px; font-weight: 600; color: #1A5FA8;">GlaucoIA</div>
            <div style="text-align: right;">
                <div style="font-size: 13px; font-weight: 600; color: #1A5FA8; text-transform: uppercase;">${t('report.clinicalTitle')}</div>
                <div style="font-size: 14px; color: #64748b;">${today}</div>
            </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">
            <div><strong>${name}</strong><br><span style="font-size: 15px; color: #475569;">DNI: ${patient.dni} · ${age} años</span></div>
            <div><strong>Dr. Carlos Ramírez Torres</strong><br><span style="font-size: 15px; color: #475569;">CMP: 48923 · Oftalmólogo</span></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
            <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; text-align: center;"><span style="font-size: 13px; color: #64748b;">Probabilidad</span><strong style="font-size: 22px; color: #C0392B; display: block;">${prob}%</strong></div>
            <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; text-align: center;"><span style="font-size: 13px; color: #64748b;">C/D Ratio</span><strong style="font-size: 22px; color: #C0392B; display: block;">${cd}</strong></div>
            <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; text-align: center;"><span style="font-size: 13px; color: #64748b;">RNFL</span><strong style="font-size: 22px; color: #C8720A; display: block;">${rnfl} µm</strong></div>
            <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; text-align: center;"><span style="font-size: 13px; color: #64748b;">Confianza IA</span><strong style="font-size: 22px; color: #1A7A4A; display: block;">${conf}%</strong></div>
        </div>
        <div style="background: #FAEEDA; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="font-size: 15px; color: #633806; line-height: 1.7; margin: 0;">${interpretation}</p>
        </div>
        <h4 style="font-size: 16px; margin-bottom: 10px; color: #1A5FA8;">${t('gradcam.reportTitle')}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; background: #0d1117;">
                ${svgOd}
                <p style="text-align: center; font-size: 12px; color: #8899aa; margin: 4px 0 0;">${t('gradcam.eyeOd')}</p>
            </div>
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; background: #0d1117;">
                ${svgOi}
                <p style="text-align: center; font-size: 12px; color: #8899aa; margin: 4px 0 0;">${t('gradcam.eyeOi')}</p>
            </div>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 13px; color: #64748b; text-align: center;">
            <p>${t('report.disclaimer')}</p>
        </div>
    `;

    document.body.appendChild(reportHtml);

    html2canvas(reportHtml, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('reporte_clinico_glaucoia.pdf');
        document.body.removeChild(reportHtml);
        showAlert('success', t('alert.success'), t('msg.reportGenerated'));
    }).catch(() => {
        document.body.removeChild(reportHtml);
        showAlert('danger', t('alert.danger'), 'Error al generar PDF');
    });
}

// ============================================================
// History
// ============================================================
function updateHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;

    if (AppState.history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-muted); font-size:16px; padding:24px;">${t('doctor.history.noRecords')}</td></tr>`;
        return;
    }

    tbody.innerHTML = AppState.history.map((h, index) => `
        <tr>
            <td>${h.id}</td>
            <td><b>${h.patientName}</b></td>
            <td>${h.age}</td>
            <td>${formatDateShort(h.date)}</td>
            <td>${h.cdRatio}</td>
            <td><span class="badge ${getRiskBadge(h.risk)}">${getRiskLabel(h.risk)}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="viewHistoryDetail(${index})">${t('doctor.dashboard.view')}</button></td>
        </tr>
    `).join('');
}

function viewHistoryDetail(index) {
    const h = AppState.history[index];
    if (!h) return;
    h.reviewed = true;
    updateHistoryTable();
    persistAppState();

    const patient = AppState.patients.find(p => p.dni === h.patientDni);
    if (patient) {
        AppState.selectedPatientForAnalysis = patient;
        AppState.patientData = {
            name: patient.name, lastName: patient.lastName, dni: patient.dni,
            birthDate: patient.birthDate, age: patient.age,
            pioOd: patient.pioOd || 16, pioOi: patient.pioOi || 16
        };
        AppState.analysisResults = {
            probability: h.probability, cdRatio: h.cdRatio, rnfl: h.rnfl || 68,
            pio: h.pio || patient.pioOd || 16, confidence: h.confidence || 91, risk: h.risk
        };
        showDoctorPanel('dpanel-analysis');
        AppState.UIState.currentAnalysisStep = 4;
        forceStepRender(4);
        displayResults();
    }
}

function filterHistory() {
    const searchEl = document.getElementById('historySearch');
    const filterEl = document.getElementById('historyFilter');
    if (!searchEl || !filterEl) return;

    const search = searchEl.value.toLowerCase();
    const filter = filterEl.value;
    const rows = document.querySelectorAll('#historyTableBody tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const riskCell = row.querySelector('.badge');
        const riskText = riskCell ? riskCell.textContent.toLowerCase() : '';
        let show = true;
        if (search && !text.includes(search)) show = false;
        if (filter !== 'all') {
            const riskMap = { 'high': 'riesgo alto', 'medium': 'riesgo medio', 'low': 'riesgo bajo' };
            if (!riskText.includes(riskMap[filter])) show = false;
        }
        row.style.display = show ? '' : 'none';
    });
}

// ============================================================
// Profile Editing (patient: no PIO edit)
// ============================================================
function openProfileModal(userType) {
    const user = AppState.currentUser;
    if (!user) return;

    if (userType === 'patient') {
        const p = AppState.patients.find(pt => pt.dni === user.dni);
        if (!p) return;
        showProfileModal({
            type: 'patient',
            title: t('profile.title'),
            fields: [
                { key: 'name', label: t('profile.names'), value: p.name, type: 'text' },
                { key: 'lastName', label: t('profile.lastNames'), value: p.lastName, type: 'text' },
                { key: 'dni', label: t('profile.dni'), value: p.dni, type: 'text' },
                { key: 'birthDate', label: t('profile.birthDate'), value: p.birthDate, type: 'date' },
                { key: 'password', label: t('profile.password'), value: '', type: 'password', placeholder: t('profile.passwordHint') }
            ]
        });
    } else {
        const d = AppState.doctors.find(doc => doc.dni === user.dni);
        if (!d) return;
        showProfileModal({
            type: 'doctor',
            title: t('profile.title'),
            fields: [
                { key: 'name', label: t('profile.names'), value: d.name, type: 'text' },
                { key: 'lastName', label: t('profile.lastNames'), value: d.lastName, type: 'text' },
                { key: 'dni', label: t('profile.dni'), value: d.dni, type: 'text' },
                { key: 'cmp', label: t('profile.cmp'), value: d.cmp || '', type: 'text' },
                { key: 'password', label: t('profile.password'), value: '', type: 'password', placeholder: t('profile.passwordHint') }
            ]
        });
    }
}

function showProfileModal(config) {
    const existing = document.getElementById('profileModal');
    if (existing) existing.remove();

    const fieldsHtml = config.fields.map(f => `
        <div class="form-group">
            <label>${f.label}</label>
            <input type="${f.type}" class="form-control" data-key="${f.key}" value="${f.value || ''}" placeholder="${f.placeholder || ''}" />
        </div>
    `).join('');

    const modal = document.createElement('div');
    modal.id = 'profileModal';
    modal.className = 'auth-modal open';
    modal.innerHTML = `
        <div class="auth-modal-content">
            <div class="auth-modal-header">
                <h3>${config.title}</h3>
                <button class="auth-modal-close" onclick="closeProfileModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="auth-modal-body">
                <div class="form-grid" style="grid-template-columns: 1fr;">${fieldsHtml}</div>
            </div>
            <div class="auth-modal-footer" style="display:flex; gap:10px; justify-content:center;">
                <button class="btn btn-secondary" onclick="closeProfileModal()">${t('profile.cancel')}</button>
                <button class="btn btn-primary" onclick="saveProfile('${config.type}')">${t('profile.save')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) { if (e.target === this) closeProfileModal(); });
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.remove();
}

function saveProfile(type) {
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    const inputs = modal.querySelectorAll('[data-key]');
    const values = {};
    inputs.forEach(input => { values[input.dataset.key] = input.value.trim(); });

    if (!values.name || !values.lastName || !values.dni) {
        showAlert('warning', t('alert.warning'), t('msg.completeFields'));
        return;
    }

    if (type === 'patient') {
        const oldDni = AppState.currentUser.dni;
        const p = AppState.patients.find(pt => pt.dni === oldDni);
        if (!p) return;
        const dniTaken = AppState.patients.some(pt => pt.dni === values.dni && pt.dni !== oldDni);
        if (dniTaken) { showAlert('danger', t('alert.danger'), t('msg.dniExists')); return; }

        p.name = values.name;
        p.lastName = values.lastName;
        p.dni = values.dni;
        p.birthDate = values.birthDate;
        p.age = getAge(values.birthDate);
        if (values.password) p.password = values.password;

        AppState.currentUser.dni = p.dni;
        AppState.currentUser.name = p.name;
        AppState.currentUser.lastName = p.lastName;

        AppState.patientData = {
            name: p.name, lastName: p.lastName, dni: p.dni,
            birthDate: p.birthDate, age: p.age,
            pioOd: p.pioOd, pioOi: p.pioOi
        };

        persistAppState();
        closeProfileModal();
        renderPatientPortalPreservingState();
        showAlert('success', t('alert.success'), t('msg.profileUpdated'));
    } else {
        const oldDni = AppState.currentUser.dni;
        const d = AppState.doctors.find(doc => doc.dni === oldDni);
        if (!d) return;
        const dniTaken = AppState.doctors.some(doc => doc.dni === values.dni && doc.dni !== oldDni);
        if (dniTaken) { showAlert('danger', t('alert.danger'), t('msg.dniExists')); return; }

        d.name = values.name;
        d.lastName = values.lastName;
        d.dni = values.dni;
        d.cmp = values.cmp || d.cmp;
        if (values.password) d.password = values.password;

        AppState.currentUser.dni = d.dni;
        AppState.currentUser.name = d.name;
        AppState.currentUser.lastName = d.lastName;
        AppState.currentUser.cmp = d.cmp;

        persistAppState();
        closeProfileModal();
        renderDoctorPortalPreservingState();
        showAlert('success', t('alert.success'), t('msg.profileUpdated'));
    }
}

// ============================================================
// Re-render preserving state
// ============================================================
function renderPatientPortalPreservingState() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    mainContent.innerHTML = renderPatientPortal();
    AppState.currentScreen = 'patient';
    initPatientDashboard();

    const panelId = AppState.UIState.activePatientPanel || 'panel-dash';
    showPatientPanel(panelId);

    ['od', 'oi'].forEach(eye => {
        if (AppState.uploadedImages[eye]) {
            const statusEl = document.getElementById(eye === 'od' ? 'pUploadOd' : 'pUploadOi');
            if (statusEl) {
                statusEl.textContent = t('patient.upload.loaded');
                statusEl.style.color = 'var(--success)';
                const zone = statusEl.closest('.upload-zone');
                if (zone) zone.classList.add('uploaded');
            }
        }
    });

    if (AppState.uploadedImages.od && AppState.uploadedImages.oi) {
        const pUploadResult = document.getElementById('pUploadResult');
        if (pUploadResult) pUploadResult.style.display = 'block';
    }
}

function renderDoctorPortalPreservingState() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    mainContent.innerHTML = renderDoctorPortal();
    AppState.currentScreen = 'doctor';
    initDoctorDashboard();

    const panelId = AppState.UIState.activeDoctorPanel || 'dpanel-dash';
    showDoctorPanel(panelId);

    const step = AppState.UIState.currentAnalysisStep || 1;

    ['od', 'oi'].forEach(eye => {
        if (AppState.uploadedImages[eye]) {
            const statusEl = document.getElementById(eye === 'od' ? 'uploadOd' : 'uploadOi');
            if (statusEl) {
                statusEl.textContent = t('patient.upload.loaded');
                statusEl.style.color = 'var(--success)';
                const zone = statusEl.closest('.upload-zone');
                if (zone) zone.classList.add('uploaded');
            }
        }
    });

    if (AppState.selectedPatientForAnalysis) {
        const p = AppState.selectedPatientForAnalysis;
        const input = document.getElementById('patientSearchInput');
        const info = document.getElementById('selectedPatientInfo');
        const header = document.getElementById('analysisPatientName');
        if (input) input.value = `${p.name} ${p.lastName}`;
        if (info) {
            info.style.display = 'block';
            const nameEl = document.getElementById('selectedPatientName');
            const detailsEl = document.getElementById('selectedPatientDetails');
            if (nameEl) nameEl.textContent = `${p.name} ${p.lastName}`;
            if (detailsEl) detailsEl.textContent =
                `DNI: ${p.dni} · ${p.age} años · PIO OD: ${p.pioOd} mmHg · PIO OI: ${p.pioOi} mmHg`;
        }
        if (header) header.textContent = `${t('doctor.newAnalysis.patient')}: ${p.name} ${p.lastName}`;
    }

    forceStepRender(step);

    if (AppState.isAnalysisComplete) {
        const labels = [
            'Pre-procesamiento de imagen',
            'Segmentación del disco óptico',
            'Extracción de características morfológicas',
            'Clasificación por modelo ResNet-50',
            'Generación de mapa de atención'
        ];
        ['procStep1', 'procStep2', 'procStep3', 'procStep4', 'procStep5'].forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) {
                el.className = 'processing-step done';
                el.innerHTML = `<i class="fas fa-check-circle"></i> ${labels[i]}`;
            }
        });
        const btn = document.getElementById('showResultsBtn');
        if (btn) btn.style.display = 'inline-flex';
    }

    if (step === 4) displayResults();
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    initAppState();
    document.documentElement.lang = currentLang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAuthModal();
            closeAlertModal();
            closeProfileModal();
            closeEditPatientModal();
        }
    });

    const authModal = document.getElementById('authModal');
    if (authModal) authModal.addEventListener('click', function(e) { if (e.target === this) closeAuthModal(); });

    const alertModal = document.getElementById('alertModal');
    if (alertModal) alertModal.addEventListener('click', function(e) { if (e.target === this) closeAlertModal(); });

    navigateTo('home');
    console.log('GlaucoIA App V9 cargada');
});