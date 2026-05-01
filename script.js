document.addEventListener('DOMContentLoaded', () => {
    // Add load class to body for initial animations
    document.body.classList.add('loaded');

    // --- Translations Data ---
    const translations = {
        fr: {
            nav_connexion: "Connexion",
            nav_publier: "Publier votre annonce",
            hero_title: "Recrutez vos futurs talents hôteliers en moins de <span class=\"highlight\">48h</span> !",
            hero_subtitle: "La plateforme premium dédiée aux professionnels de l'hôtellerie au Maroc.",
            cta_register: "Inscrivez votre établissement",
            cta_caption: "Inscrivez votre Hotel gratuitement",
            hero_how_it_works: "Comment ça marche",
            partners_title: "Bientôt parmi nous",
            sp_eyebrow: "Ils nous font confiance",
            sp_title: "Déjà adopté par les leaders<br>de l'hôtellerie au Maroc.",
            sp_subtitle: "Plus de <strong>100 établissements</strong> nous font confiance pour stabiliser leurs équipes.",
            stat1_num: "+5 000",
            stat1_label: "candidats qualifiés",
            stat1_text: "prêts à l'emploi, disponibles immédiatement",
            stat2_num: "80%",
            stat2_label: "de gain de temps",
            stat2_text: "sur l'ensemble de vos recrutements",
            stat3_num: "Qualité<br>garantie",
            stat3_label: "Filtrage par IA",
            stat3_text: "Profils vérifiés par intelligence artificielle",
            ps_title: "De la complexité à l'évidence",
            ps_subtitle: "Transformez votre processus de recrutement grâce à notre technologie.",
            ps_before_title: "Avant CoinCarrière",
            ps_before_1: "❌ Trop de CV non pertinents",
            ps_before_2: "❌ Processus de recrutement lent",
            ps_before_3: "❌ Temps perdu en gestion administrative",
            ps_after_title: "Avec CoinCarrière",
            ps_after_1: "✅ Sélection intelligente par IA",
            ps_after_2: "✅ Réponse en moins de 48h",
            ps_after_3: "✅ Profils qualifiés et disponibles",
            hiw_title: "Comment ça marche",
            hiw_subtitle: "Une technologie avancée pour une expérience fluide",
            hiw_step1_title: "Créez votre compte",
            hiw_step1_desc: "Inscrivez votre hôtel ou restaurant en moins de 2 minutes.",
            hiw_step2_title: "Publiez vos besoins",
            hiw_step2_desc: "Décrivez le poste, notre IA optimise l'annonce pour attirer les meilleurs.",
            hiw_step3_title: "Recevez les pépites",
            hiw_step3_desc: "Accédez directement aux profils les plus adaptés et disponibles.",
            hiw_step4_title: "Sélectionnez & Embauchez",
            hiw_step4_desc: "Planifiez vos entretiens et sécurisez vos talents.",
            testimonial_quote: "\"CoinCarrière a radicalement changé notre manière de recruter. Nous trouvons des profils qualifiés en un temps record.\"",
            testimonial_author_name: "Responsable RH",
            testimonial_author_title: "Hôtel de Luxe, Marrakech",
            final_cta_eyebrow: "Passez à l’action maintenant",
            final_cta_title: "Ne laissez plus vos postes vacants<br>nuire à la qualité de votre service.",
            final_cta_subtext: "Publiez votre offre aujourd’hui et trouvez votre prochain collaborateur.",
            final_cta_btn: "Rejoindre Coincarriere gratuitement",
            footer_copyright: "&copy; 2026 CoinCarrière. Tous droits réservés.",
            pfb_title: "Prêt à transformer vos recrutements ?",
            pfb_subtitle: "Rejoignez les leaders de l’hôtellerie au Maroc et trouvez vos prochains talents dès aujourd’hui."
        },
        en: {
            nav_connexion: "Login",
            nav_publier: "Post your ad",
            hero_title: "Recruit your future hospitality talents in less than <span class=\"highlight\">48h</span>!",
            hero_subtitle: "The premium platform dedicated to hospitality professionals in Morocco.",
            cta_register: "Register your establishment",
            cta_caption: "Register your Hotel for free",
            hero_how_it_works: "How it works",
            partners_title: "Coming soon",
            sp_eyebrow: "They trust us",
            sp_title: "Already adopted by hospitality<br>leaders in Morocco.",
            sp_subtitle: "More than <strong>100 establishments</strong> trust us to stabilize their teams.",
            stat1_num: "+5,000",
            stat1_label: "qualified candidates",
            stat1_text: "ready for work, available immediately",
            stat2_num: "80%",
            stat2_label: "time saving",
            stat2_text: "on all your recruitments",
            stat3_num: "Guaranteed<br>Quality",
            stat3_label: "AI Filtering",
            stat3_text: "Profiles verified by artificial intelligence",
            ps_title: "From complexity to clarity",
            ps_subtitle: "Transform your recruitment process with our technology.",
            ps_before_title: "Before CoinCarrière",
            ps_before_1: "❌ Too many irrelevant CVs",
            ps_before_2: "❌ Slow recruitment process",
            ps_before_3: "❌ Time lost in admin tasks",
            ps_after_title: "With CoinCarrière",
            ps_after_1: "✅ Smart AI selection",
            ps_after_2: "✅ Response in less than 48h",
            ps_after_3: "✅ Qualified & available profiles",
            hiw_title: "How it Works",
            hiw_subtitle: "Advanced technology for a smooth experience",
            hiw_step1_title: "Create your account",
            hiw_step1_desc: "Register your hotel or restaurant in less than 2 minutes.",
            hiw_step2_title: "Post your needs",
            hiw_step2_desc: "Describe the position, our AI optimizes the ad to attract the best.",
            hiw_step3_title: "Receive the gems",
            hiw_step3_desc: "Access directly the most suitable and available profiles.",
            hiw_step4_title: "Select & Hire",
            hiw_step4_desc: "Schedule your interviews and secure your talents.",
            testimonial_quote: "\"CoinCarrière has radically changed our way of recruiting. We find qualified profiles in record time.\"",
            testimonial_author_name: "HR Manager",
            testimonial_author_title: "Luxury Hotel, Marrakech",
            final_cta_eyebrow: "Take action now",
            final_cta_title: "Don't let vacant positions<br>harm your service quality.",
            final_cta_subtext: "Post your offer today and find your next collaborator.",
            final_cta_btn: "Join Coincarriere for free",
            footer_copyright: "&copy; 2026 CoinCarrière. All rights reserved.",
            pfb_title: "Ready to transform your recruitment?",
            pfb_subtitle: "Join the hospitality leaders in Morocco and find your next talents today."
        },
        ar: {
            nav_connexion: "تسجيل الدخول",
            nav_publier: "انشر إعلانك",
            hero_title: "وظف مواهبك الفندقية المستقبلية في أقل من <span class=\"highlight\">48 ساعة</span>!",
            hero_subtitle: "المنصة المتميزة المخصصة لمهنيي الفندقة في المغرب.",
            cta_register: "سجل مؤسستك",
            cta_caption: "سجل فندقك مجاناً",
            hero_how_it_works: "كيف يعمل؟",
            partners_title: "قريباً بيننا",
            sp_eyebrow: "هم يثقون بنا",
            sp_title: "تم اعتماده بالفعل من قبل رواد<br>الفندقة في المغرب.",
            sp_subtitle: "أكثر من <strong>100 مؤسسة</strong> تثق بنا لتعزيز فرق عملها.",
            stat1_num: "+5,000",
            stat1_label: "مرشح مؤهل",
            stat1_text: "جاهزون للعمل، متاحون فوراً",
            stat2_num: "80%",
            stat2_label: "توفير في الوقت",
            stat2_text: "على جميع عمليات التوظيف الخاصة بك",
            stat3_num: "جودة<br>مضمونة",
            stat3_label: "تصفية بالذكاء الاصطناعي",
            stat3_text: "ملفات شخصية تم التحقق منها بواسطة الذكاء الاصطناعي",
            ps_title: "من التعقيد إلى البساطة",
            ps_subtitle: "حول عملية التوظيف الخاصة بك بفضل تكنولوجيتنا.",
            ps_before_title: "قبل CoinCarrière",
            ps_before_1: "❌ الكثير من السير الذاتية غير المناسبة",
            ps_before_2: "❌ عملية توظيف بطيئة",
            ps_before_3: "❌ وقت ضائع في الإدارة",
            ps_after_title: "مع CoinCarrière",
            ps_after_1: "✅ اختيار ذكي بالذكاء الاصطناعي",
            ps_after_2: "✅ رد في أقل من 48 ساعة",
            ps_after_3: "✅ ملفات مؤهلة ومتاحة",
            hiw_title: "كيف يعمل الموقع",
            hiw_subtitle: "تكنولوجيا متطورة لتجربة سلسة",
            hiw_step1_title: "أنشئ حسابك",
            hiw_step1_desc: "سجل فندقك أو مطعمك في أقل من دقيقتين.",
            hiw_step2_title: "انشر احتياجاتك",
            hiw_step2_desc: "صف الوظيفة، وسيقوم ذكاؤنا الاصطناعي بتحسين الإعلان لجذب الأفضل.",
            hiw_step3_title: "استلم أفضل الكفاءات",
            hiw_step3_desc: "الوصول المباشر إلى الملفات الشخصية الأكثر ملاءمة والمتاحة.",
            hiw_step4_title: "اختر ووظف",
            hiw_step4_desc: "حدد مواعيد مقابلاتك وضمن أفضل المواهب.",
            testimonial_quote: "\"لقد غيرت CoinCarrière طريقة توظيفنا بشكل جذري. نجد ملفات تعريف مؤهلة في وقت قياسي.\"",
            testimonial_author_name: "مدير الموارد البشرية",
            testimonial_author_title: "فندق فاخر، مراكش",
            final_cta_eyebrow: "اتخذ خطوة الآن",
            final_cta_title: "لا تدع المناصب الشاغرة<br>تؤثر على جودة خدمتك.",
            final_cta_subtext: "انشر عرضك اليوم وجد زميلك التالي.",
            final_cta_btn: "انضم إلى CoinCarrière مجاناً",
            footer_copyright: "&copy; 2026 CoinCarrière. جميع الحقوق محفوظة.",
            pfb_title: "هل أنت مستعد لتحويل توظيفك؟",
            pfb_subtitle: "انضم إلى رواد الفندقة في المغرب وابحث عن مواهبك التالية اليوم."
        }
    };

    // --- Language Switching Logic ---
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }

        // Update active link style
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');

        // Store language preference
        localStorage.setItem('preferredLang', lang);
    }

    // Event Listeners for Lang Switcher
    document.getElementById('lang-fr').addEventListener('click', (e) => { e.preventDefault(); setLanguage('fr'); });
    document.getElementById('lang-en').addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });
    document.getElementById('lang-ar').addEventListener('click', (e) => { e.preventDefault(); setLanguage('ar'); });

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(savedLang);

    // --- Reveal Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up-element, .social-stat-card').forEach(el => {
        observer.observe(el);
    });
});
