/**
 * My Parishkar - Unified Translation Engine (English & Telugu)
 */

const TRANSLATIONS = {
  en: {
    // Brand & Navigation
    "app_title": "My Parishkar",
    "portal_tag": "Citizen Welfare & Governance Portal",
    "home": "Home",
    "dashboard": "Dashboard",
    "all_schemes": "All Schemes",
    "calculator": "Eligibility Calculator",
    "citizen_login": "Citizen Login",
    "officer_login": "Officer Login",
    "logout": "Log Out",
    "back_to_dashboard": "← Back to Dashboard",
    "back_to_gateway": "← Back to Main Gateway",

    // Landing Page
    "hero_badge": "✨ Government of Andhra Pradesh & Central Schemes",
    "hero_title": "Empowering Citizens with Direct Welfare Access",
    "hero_subtitle": "Explore, verify eligibility, and apply for flagship government schemes across Agriculture, Education, Healthcare, and Housing in one unified portal.",
    "stat_sectors": "Welfare Sectors",
    "stat_schemes": "Active Schemes",
    "stat_transparency": "Transparent Tracking",
    "calc_hero_btn": "🎯 Scheme Eligibility Calculator & Filter →",

    // Roles
    "citizen_heading": "Citizen / User Portal",
    "citizen_desc": "Browse sectoral welfare programs, submit digital applications, and monitor your scheme approval status in real time.",
    "feat_1": "Explore 16+ Government Schemes",
    "feat_2": "Quick 1-Click Scheme Application",
    "feat_3": "Live Application Status Tracking",
    "user_login_btn": "Citizen Login",
    "user_signup_btn": "Sign Up",

    "admin_heading": "Admin & Officers",
    "admin_desc": "Authorized officer console to review submitted citizen applications, manage users, and process verification workflows.",
    "feat_4": "Review & Approve Applications",
    "feat_5": "Manage Registered Citizens",
    "feat_6": "Departmental Analytics & Reports",
    "admin_login_btn": "Admin Login",
    "admin_signup_btn": "Register Staff",

    "sectors_title": "Core Welfare Sectors",
    "sectors_desc": "Discover targeted support programs designed for every stage of citizen empowerment",
    "sec_agri": "Agriculture",
    "sec_edu": "Education",
    "sec_health": "Healthcare",
    "sec_house": "Housing",
    "sec_agri_sub": "PM Kisan, Fasal Bima & more",
    "sec_edu_sub": "Vidya Deevena, Kits & Meals",
    "sec_health_sub": "Ayushman Bharat, PMJAY",
    "sec_house_sub": "PMAY, Housing Subsidy",

    // Citizen Dashboard
    "welcome_user": "Welcome",
    "dash_subtitle": "Explore government welfare schemes or track your submitted applications",
    "search_schemes_placeholder": "Search schemes (e.g. Kisan, Vidya, Ayushman, PMAY)...",
    "explore_sectors": "Explore Welfare Sectors",
    "new_app_btn": "+ New Application",
    "active_schemes_count": "4 Active Schemes",
    "view_schemes": "View Schemes →",
    "my_applications": "📋 My Scheme Applications",
    "no_applications": "You haven't submitted any scheme applications yet.",
    "apply_now_prompt": "Apply for a Scheme Now",
    "stat_total_sectors": "Welfare Sectors",
    "stat_total_schemes": "Flagship Schemes",
    "stat_my_apps": "My Applications",
    "stat_verification_rate": "Instant Verification",
    "stat_total_sectors_val": "4 Sectors",
    "stat_total_schemes_val": "16+ Schemes",
    "stat_instant_badge": "⚡ Live Status",

    // Table Headers
    "th_id": "#",
    "th_scheme": "Scheme Name",
    "th_sector": "Sector",
    "th_applicant": "Applicant Name",
    "th_date": "Date Applied",
    "th_status": "Status",
    "th_action": "Action",
    "th_contact": "Contact Info",
    "th_user": "Username",
    "th_email": "Email Address",

    // Status Badges
    "status_approved": "Approved",
    "status_pending": "Pending",
    "status_rejected": "Rejected",
    "status_active": "Active Citizen",

    // Login & Signup Pages
    "login_welcome": "Welcome Back",
    "login_subtitle": "Log in to view schemes and track your applications",
    "email_or_user": "Email or Username",
    "password": "Password",
    "login_btn": "Log In to Citizen Portal",
    "no_account": "Don't have an account?",
    "create_account": "Create Citizen Account",
    "are_you_admin": "Are you an official/staff member?",
    "switch_admin": "Officer Login 🏛️",

    "signup_title": "Join My Parishkar",
    "signup_subtitle": "Create an account to apply for government welfare schemes",
    "full_name": "Full Name",
    "email_address": "Email Address",
    "create_password": "Create Password",
    "signup_btn": "Create Citizen Account",
    "already_account": "Already have an account?",
    "login_here": "Log In Here",

    // Officer Login & Signup
    "officer_login_title": "Officer Login",
    "officer_login_sub": "Access departmental dashboard & application controls",
    "officer_username": "Officer Username or Email",
    "officer_login_btn": "Authenticate & Access Dashboard",
    "need_staff_account": "Need staff credentials?",
    "register_staff": "Register Staff Account",

    "officer_reg_title": "Register Officer",
    "officer_reg_sub": "Create staff access to manage citizen welfare schemes",
    "dept_passcode": "Department Passcode (Optional)",
    "officer_reg_btn": "Register Officer Account",
    "officer_already": "Already registered?",

    // Sector Pages
    "agri_title": "🌱 Agriculture Welfare Schemes",
    "agri_subtitle": "Income support, crop insurance, irrigation assistance, and agricultural infrastructure funding for farmers",
    "edu_title": "🎓 Education & Student Support Schemes",
    "edu_subtitle": "Full tuition fee reimbursements, hostel allowances, educational kits, and nutrition programs",
    "health_title": "🏥 Healthcare & Medical Schemes",
    "health_subtitle": "Free secondary and tertiary medical coverage, cashless hospitalization, and health security",
    "house_title": "🏠 Housing & Urban Development Schemes",
    "house_subtitle": "Pucca houses for homeless citizens, credit subsidies, and affordable rental complexes",

    "search_sector_placeholder": "Search schemes in this sector...",
    "btn_apply_portal": "Apply via Portal",
    "btn_official": "Official ↗",

    // Scheme Names & Benefits
    "pmkisan_title": "PM Kisan",
    "pmkisan_badge": "Direct Benefit Transfer",
    "pmkisan_desc": "Provides direct income support of ₹6,000 per year in three equal installments to all landholding farmer families.",

    "fasalbima_title": "Fasal Bima Yojana",
    "fasalbima_badge": "Crop Insurance",
    "fasalbima_desc": "Comprehensive crop insurance protecting farmers against non-preventable natural risks and yield losses.",

    "sinchai_title": "Krishi Sinchai Yojana",
    "sinchai_badge": "Irrigation Support",
    "sinchai_desc": "Enhances farm water access, micro-irrigation facilities, and sustainable water conservation practices.",

    "agriinfra_title": "Agriculture Infrastructure Fund",
    "agriinfra_badge": "Infra Subsidies",
    "agriinfra_desc": "Medium-long term debt financing facility for investment in viable post-harvest management projects and storage units.",

    "vidyadeevena_title": "Vidya Deevena",
    "vidyadeevena_badge": "100% Fee Reimbursement",
    "vidyadeevena_desc": "Complete tuition fee reimbursement for students pursuing polytechnic, ITI, degree, and postgraduate courses.",

    "vasathideevena_title": "Vasathi Deevena",
    "vasathideevena_badge": "Hostel & Food Allowance",
    "vasathideevena_desc": "Financial assistance of up to ₹20,000 per year towards food and hostel accommodation for pursuing higher studies.",

    "vidyakanuka_title": "Vidya Kanuka",
    "vidyakanuka_badge": "Free Student Kits",
    "vidyakanuka_desc": "Provides student kits including bilingual textbooks, notebooks, 3 pairs of uniforms, shoes, socks, and a school bag.",

    "middaymeal_title": "Mid Day Meal Scheme",
    "middaymeal_badge": "Nutrition Support",
    "middaymeal_desc": "Ensures healthy, hygienic, and nutritious hot cooked meals to school children in government and aided schools.",

    "ayushman_title": "Ayushman Bharat",
    "ayushman_badge": "₹5 Lakh Coverage/Family",
    "ayushman_desc": "Comprehensive health protection providing up to ₹5 Lakh cashless treatment per family per year across empaneled hospitals.",

    "nhm_title": "National Health Mission",
    "nhm_badge": "Maternal & Child Care",
    "nhm_desc": "Strengthens rural and urban healthcare systems, maternal & infant survival, and subsidized essential pharmaceuticals.",

    "pmjay_title": "PMJAY Golden Card",
    "pmjay_badge": "Cashless Surgery & Care",
    "pmjay_desc": "Entitles low-income citizens to cashless secondary and tertiary medical treatments, surgical procedures, and diagnostic care.",

    "rashtriyabima_title": "Rashtriya Bima Yojana",
    "rashtriyabima_badge": "Unorganized Workers",
    "rashtriyabima_desc": "Dedicated health insurance for daily wage earners and unorganized workers, offering protection from catastrophic medical expenses.",

    "pmay_title": "Pradhan Mantri Awas Yojana",
    "pmay_badge": "Pucca House for All",
    "pmay_desc": "Flagship housing mission ensuring all-weather pucca dwellings with basic amenities for low-income and rural families.",

    "clss_title": "Credit Linked Subsidy (CLSS)",
    "clss_badge": "Home Loan Subsidy",
    "clss_desc": "Provides upfront interest subsidy on home loans for first-time buyers in economically weaker and middle-income segments.",

    "arhc_title": "Affordable Rental Housing (ARHC)",
    "arhc_badge": "Rental Housing",
    "arhc_desc": "Comfortable, dignity-focused rental accommodations for urban migrants, industrial laborers, and hospitality workers.",

    "blc_title": "Beneficiary Led Construction",
    "blc_badge": "Direct Construction Grant",
    "blc_desc": "Direct financial assistance to eligible families for constructing new pucca houses or renovating existing homes on their own land.",

    // Eligibility Calculator
    "calc_title": "Scheme Eligibility Calculator",
    "calc_sub": "Answer a few simple profile questions to find all welfare schemes you qualify for",
    "calc_profile_head": "⚙️ Your Citizen Profile",
    "calc_occ_label": "Primary Occupation / Category",
    "calc_income_label": "Annual Household Income",
    "calc_land_label": "Agricultural Land Holding",
    "calc_edu_label": "Education Status",
    "calc_house_label": "Current Housing Type",
    "calc_reset_btn": "Reset Criteria ↺",
    "calc_found": "Found",
    "calc_schemes_text": "Eligible Schemes",
    "apply_online_now": "Apply Online Now →",

    // Options in Calculator
    "occ_all": "Any / General Citizen",
    "occ_farmer": "Farmer / Landowner",
    "occ_student": "Student / Scholar",
    "occ_worker": "Unorganized / Daily Wage Worker",
    "occ_homeless": "Homeless / Renting Citizen",

    "inc_bpl": "Below ₹1,00,000 (BPL / Low Income)",
    "inc_ews": "₹1,00,000 - ₹2,50,000 (EWS)",
    "inc_mig": "₹2,50,000 - ₹5,00,000 (Middle Income)",
    "inc_high": "Above ₹5,00,000",

    "land_any": "Not Applicable",
    "land_small": "Small / Marginal Farmer (< 2 Hectares)",
    "land_large": "Medium or Large Farmer (> 2 Hectares)",
    "land_none": "No Agricultural Land",

    "edu_any": "Not Enrolled / Completed",
    "edu_college": "College / Degree / ITI / Polytechnic",
    "edu_school": "Primary / High School Student",

    "house_any": "Any Housing Condition",
    "house_rent": "Rented House / Migrant Accommodation",
    "house_kutcha": "Kutcha / Temporary House",
    "house_pucca": "Own Pucca House",

    // Application Form
    "app_form_title": "Scheme Application Form",
    "app_form_sub": "Submit your verification details to apply for government support",
    "app_name_label": "Applicant Full Name *",
    "app_phone_label": "Phone Number *",
    "app_email_label": "Email Address *",
    "app_sector_label": "Welfare Sector *",
    "app_scheme_label": "Scheme Name *",
    "app_details_label": "Eligibility Details / Remarks (Optional)",
    "app_details_ph": "Mention your land holding, college course, annual family income, or housing status...",
    "app_submit_btn": "Submit Scheme Application",
    "app_cancel_btn": "← Cancel & Return to Dashboard",

    // Success Page
    "success_title": "Application Submitted!",
    "success_desc": "Thank you. Your scheme application has been received and is currently under review by our department.",
    "return_dash_btn": "Return to Dashboard",

    // Admin Dashboard
    "admin_console_title": "My Parishkar Administration",
    "officer_label": "Officer:",
    "admin_stat_citizens": "Registered Citizens",
    "admin_stat_apps": "Total Applications",
    "admin_stat_approved": "Approved Schemes",
    "admin_stat_pending": "Pending Review",
    "admin_sec_apps": "📋 Citizen Scheme Applications (Review & Action)",
    "admin_sec_citizens": "👥 Registered Citizens",
    "filter_apps_ph": "Filter applications...",
    "filter_citizens_ph": "Filter citizens...",
    "btn_save": "Save"
  },

  te: {
    // Brand & Navigation
    "app_title": "మై పరిష్కార్",
    "portal_tag": "పౌర సంక్షేమ & పరిపాలనా పోర్టల్",
    "home": "హోమ్",
    "dashboard": "డ్యాష్‌బోర్డ్",
    "all_schemes": "అన్ని పథకాలు",
    "calculator": "అర్హత కాలిక్యులేటర్",
    "citizen_login": "పౌరుల లాగిన్",
    "officer_login": "అధికారి లాగిన్",
    "logout": "లాగ్ అవుట్",
    "back_to_dashboard": "← డ్యాష్‌బోర్డ్‌కి తిరిగి వెళ్లండి",
    "back_to_gateway": "← ప్రధాన పోర్టల్‌కి వెళ్లండి",

    // Landing Page
    "hero_badge": "✨ ఆంధ్రప్రదేశ్ మరియు కేంద్ర ప్రభుత్వ పథకాలు",
    "hero_title": "నేరుగా సంక్షేమ పథకాల సేవలు పొందండి",
    "hero_subtitle": "వ్యవసాయం, విద్య, వైద్యం, మరియు గృహ నిర్మాణ రంగాల్లో ప్రభుత్వ పథకాలను అన్వేషించండి మరియు నేరుగా దరఖాస్తు చేసుకోండి.",
    "stat_sectors": "సంక్షేమ రంగాలు",
    "stat_schemes": "అందుబాటులో ఉన్న పథకాలు",
    "stat_transparency": "పారదర్శక ప్రక్రియ",
    "calc_hero_btn": "🎯 పథక అర్హత కాలిక్యులేటర్ & ఫిల్టర్ →",

    // Roles
    "citizen_heading": "పౌరుల పోర్టల్",
    "citizen_desc": "ప్రభుత్వ సంక్షేమ పథకాలను పరిశీలించండి, ఆన్‌లైన్‌లో దరఖాస్తు చేయండి మరియు స్థితిని తెలుసుకోండి.",
    "feat_1": "16+ ప్రభుత్వ పథకాలను పరిశీలించండి",
    "feat_2": "సులభమైన ఆన్‌లైన్ దరఖాస్తు",
    "feat_3": "దరఖాస్తు స్థితిని ప్రత్యక్షంగా ట్రాక్ చేయండి",
    "user_login_btn": "లాగిన్ అవ్వండి",
    "user_signup_btn": "నమోదు చేసుకోండి",

    "admin_heading": "అధికారుల విభాగం",
    "admin_desc": "పౌరుల దరఖాస్తులను సమీక్షించడానికి మరియు ఆమోదించడానికి ప్రత్యేక అధికారి పోర్టల్.",
    "feat_4": "దరఖాస్తులను సమీక్షించి ఆమోదించండి",
    "feat_5": "నమోదైన పౌరుల నిర్వహణ",
    "feat_6": "నివేదికలు మరియు విశ్లేషణలు",
    "admin_login_btn": "అడ్మిన్ లాగిన్",
    "admin_signup_btn": "స్టాఫ్ రిజిస్ట్రేషన్",

    "sectors_title": "ముఖ్య సంక్షేమ రంగాలు",
    "sectors_desc": "రైతులు, విద్యార్థులు, మరియు కుటుంబాల కోసం రూపొందించిన పథకాలు",
    "sec_agri": "వ్యవసాయం",
    "sec_edu": "విద్య",
    "sec_health": "వైద్య & ఆరోగ్యం",
    "sec_house": "గృహ నిర్మాణం",
    "sec_agri_sub": "పీఎం కిసాన్, ఫసల్ బీమా మొదలైనవి",
    "sec_edu_sub": "విద్యా దీవెన, కిట్లు, భోజన పథకం",
    "sec_health_sub": "ఆయుష్మాన్ భారత్, పీఎంజేఏవై",
    "sec_house_sub": "పీఎంఏవై, గృహ సబ్సిడీ పథకాలు",

    // Citizen Dashboard
    "welcome_user": "స్వాగతం",
    "dash_subtitle": "ప్రభుత్వ సంక్షేమ పథకాలను అన్వేషించండి లేదా దరఖాస్తుల స్థితిని ట్రాక్ చేయండి",
    "search_schemes_placeholder": "పథకాలను వెతకండి (ఉదా: కిసాన్, విద్యా, ఆయుష్మాన్, పీఎంఏవై)...",
    "explore_sectors": "సంక్షేమ రంగాలను ఎంచుకోండి",
    "new_app_btn": "+ కొత్త దరఖాస్తు",
    "active_schemes_count": "4 పథకాలు అందుబాటులో ఉన్నాయి",
    "view_schemes": "పథకాలను చూడండి →",
    "my_applications": "📋 నా సంక్షేమ దరఖాస్తులు",
    "no_applications": "మీరు ఇంకా ఎటువంటి పథకానికి దరఖాస్తు చేసుకోలేదు.",
    "apply_now_prompt": "ఇప్పుడే దరఖాస్తు చేసుకోండి",
    "stat_total_sectors": "సంక్షేమ రంగాలు",
    "stat_total_schemes": "ఫ్లాగ్‌షిప్ పథకాలు",
    "stat_my_apps": "నా దరఖాస్తులు",
    "stat_verification_rate": "త్వరిత ధృవీకరణ",
    "stat_total_sectors_val": "4 రంగాలు",
    "stat_total_schemes_val": "16+ పథకాలు",
    "stat_instant_badge": "⚡ లైవ్ స్థితి",

    // Table Headers
    "th_id": "క్రమ సంఖ్య",
    "th_scheme": "పథకం పేరు",
    "th_sector": "రంగం",
    "th_applicant": "దరఖాస్తుదారు పేరు",
    "th_date": "దరఖాస్తు తేదీ",
    "th_status": "స్థితి",
    "th_action": "చర్య",
    "th_contact": "సంప్రదింపు వివరాలు",
    "th_user": "వాడుకరి పేరు",
    "th_email": "ఇమెయిల్ చిరునామా",

    // Status Badges
    "status_approved": "ఆమోదించబడింది",
    "status_pending": "పరిశీలనలో ఉంది",
    "status_rejected": "తిరస్కరించబడింది",
    "status_active": "క్రియాశీల పౌరుడు",

    // Login & Signup Pages
    "login_welcome": "స్వాగతం",
    "login_subtitle": "పథకాలను వీక్షించడానికి మరియు దరఖాస్తులను ట్రాక్ చేయడానికి లాగిన్ అవ్వండి",
    "email_or_user": "ఇమెయిల్ లేదా వాడుకరి పేరు",
    "password": "పాస్‌వర్డ్",
    "login_btn": "పౌరుల పోర్టల్‌లోకి లాగిన్",
    "no_account": "ఖాతా లేదా?",
    "create_account": "కొత్త ఖాతాను సృష్టించండి",
    "are_you_admin": "మీరు ప్రభుత్వ అధికారి లేదా సిబ్బందా?",
    "switch_admin": "అధికారి లాగిన్ 🏛️",

    "signup_title": "మై పరిష్కార్‌లో నమోదు చేసుకోండి",
    "signup_subtitle": "ప్రభుత్వ సంక్షేమ పథకాలకు దరఖాస్తు చేసుకోవడానికి ఖాతాను సృష్టించండి",
    "full_name": "పూర్తి పేరు",
    "email_address": "ఇమెయిల్ చిరునామా",
    "create_password": "పాస్‌వర్డ్‌ను ఎంచుకోండి",
    "signup_btn": "ఖాతాను సృష్టించండి",
    "already_account": "ఇప్పటికే ఖాతా ఉందా?",
    "login_here": "ఇక్కడ లాగిన్ అవ్వండి",

    // Officer Login & Signup
    "officer_login_title": "అధికారుల లాగిన్",
    "officer_login_sub": "దరఖాస్తులను సమీక్షించడానికి అధికారిక డ్యాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి",
    "officer_username": "అధికారి యూజర్‌నేమ్ లేదా ఇమెయిల్",
    "officer_login_btn": "లాగిన్ అవ్వండి",
    "need_staff_account": "స్టాఫ్ ఖాతా కావాలా?",
    "register_staff": "స్టాఫ్ ఖాతా నమోదు",

    "officer_reg_title": "అధికారి నమోదు",
    "officer_reg_sub": "సంక్షేమ పథకాలను నిర్వహించడానికి స్టాఫ్ యాక్సెస్ సృష్టించండి",
    "dept_passcode": "డిపార్ట్‌మెంట్ పాస్‌కోడ్ (ఐచ్ఛికం)",
    "officer_reg_btn": "అధికారి ఖాతాను సృష్టించండి",
    "officer_already": "ఇప్పటికే నమోదయ్యారా?",

    // Sector Pages
    "agri_title": "🌱 వ్యవసాయ సంక్షేమ పథకాలు",
    "agri_subtitle": "రైతులకు ఆర్థిక సహాయం, పంట బీమా, నీటిపారుదల సదుపాయాలు మరియు మౌలిక సదుపాయాల నిధులు",
    "edu_title": "🎓 విద్యా & విద్యార్థి ప్రోత్సాహక పథకాలు",
    "edu_subtitle": "పూర్తి ఫీజు రీయింబర్స్‌మెంట్, వసతి భత్యాలు, ఉచిత విద్యా కిట్లు మరియు పౌష్టికాహార భోజన పథకాలు",
    "health_title": "🏥 వైద్య & ఆరోగ్య సంరక్షణ పథకాలు",
    "health_subtitle": "ఉచిత ద్వితీయ మరియు తృతీయ స్థాయి వైద్య సేవలు, నగదు రహిత చికిత్స మరియు ఆరోగ్య భద్రత",
    "house_title": "🏠 గృహ నిర్మాణ & పట్టణాభివృద్ధి పథకాలు",
    "house_subtitle": "గృహనిర్మాణ రహిత కుటుంబాలకు పక్కా గృహాలు, రుణ సబ్సిడీ మరియు సరసమైన అద్దె గృహాలు",

    "search_sector_placeholder": "ఈ విభాగంలో పథకాలను వెతకండి...",
    "btn_apply_portal": "పోర్టల్ ద్వారా దరఖాస్తు",
    "btn_official": "అధికారిక వెబ్‌సైట్ ↗",

    // Scheme Names & Benefits
    "pmkisan_title": "పీఎం కిసాన్",
    "pmkisan_badge": "ప్రత్యక్ష నగదు బదిలీ",
    "pmkisan_desc": "భూమి కలిగిన రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 ఆర్థిక సహాయం 3 విడతలలో నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.",

    "fasalbima_title": "ఫసల్ బీమా యోజన",
    "fasalbima_badge": "పంట బీమా పథకం",
    "fasalbima_desc": "ప్రకృతి వైపరీత్యాలు, తెగుళ్లు మరియు అకాల వర్షాల వల్ల పంట నష్టపోయిన రైతులకు సమగ్ర బీమా రక్షణ.",

    "sinchai_title": "కృషి సించాయి యోజన",
    "sinchai_badge": "నీటిపారుదల సదుపాయం",
    "sinchai_desc": "రైతులకు మైక్రో ఇరిగేషన్, డ్రిప్ మరియు స్ప్రింక్లర్ సదుపాయాలపై భారీ సబ్సిడీ కల్పిస్తుంది.",

    "agriinfra_title": "వ్యవసాయ మౌలిక వసతుల నిధి",
    "agriinfra_badge": "మౌలిక వసతుల సబ్సిడీ",
    "agriinfra_desc": "కోల్డ్ స్టోరేజ్, గిడ్డంగులు మరియు పంట నిల్వ కేంద్రాల నిర్మాణానికి తక్కువ వడ్డీతో రుణాలు.",

    "vidyadeevena_title": "విద్యా దీవెన",
    "vidyadeevena_badge": "100% పూర్తి ఫీజు రీయింబర్స్‌మెంట్",
    "vidyadeevena_desc": "ఐటీఐ, పాలిటెక్నిక్, డిగ్రీ మరియు పోస్ట్ గ్రాడ్యుయేషన్ చదివే విద్యార్థులకు పూర్తి కాలేజీ ఫీజు రీయింబర్స్‌మెంట్.",

    "vasathideevena_title": "వసతి దీవెన",
    "vasathideevena_badge": "వసతి & భోజన భత్యం",
    "vasathideevena_desc": "ఉన్నత చదువులు చదివే విద్యార్థుల వసతి మరియు మెస్ ఖర్చుల కోసం సంవత్సరానికి ₹20,000 వరకు ఆర్థిక సహాయం.",

    "vidyakanuka_title": "విద్యా కానుక",
    "vidyakanuka_badge": "ఉచిత విద్యార్థి కిట్లు",
    "vidyakanuka_desc": "పాఠశాల విద్యార్థులకు ద్విభాషా పాఠ్యపుస్తకాలు, నోట్‌బుక్స్, 3 జతల యూనిఫాంలు, బూట్లు, సాక్స్ మరియు బ్యాగ్ పంపిణీ.",

    "middaymeal_title": "మధ్యాహ్న భోజన పథకం",
    "middaymeal_badge": "పౌష్టికాహార భోజనం",
    "middaymeal_desc": "ప్రభుత్వ పాఠశాలల విద్యార్థులకు ప్రతిరోజూ పోషకాలతో కూడిన వేడి వేడి రుచికరమైన మధ్యాహ్న భోజనం.",

    "ayushman_title": "ఆయుష్మాన్ భారత్",
    "ayushman_badge": "కుటుంబానికి ₹5 లక్షల ఉచిత వైద్యం",
    "ayushman_desc": "ఎంపిక చేసిన నెట్‌వర్క్ ఆసుపత్రులలో కుటుంబానికి సంవత్సరానికి ₹5 లక్షల వరకు ఉచిత నగదు రహిత చికిత్స.",

    "nhm_title": "జాతీయ ఆరోగ్య మిషన్ (NHM)",
    "nhm_badge": "మాతా శిశు సంరక్షణ",
    "nhm_desc": "గ్రామీణ మరియు పట్టణ ప్రాంతాలలో ఉచిత ప్రసవాలు, నవజాత శిశు సంరక్షణ మరియు ఉచిత ఔషధాలు.",

    "pmjay_title": "పీఎంజేఏవై గోల్డెన్ హెల్త్ కార్డ్",
    "pmjay_badge": "నగదు రహిత శస్త్రచికిత్సలు",
    "pmjay_desc": "తీవ్ర అనారోగ్యాలు, శస్త్రచికిత్సలు మరియు డయాగ్నోస్టిక్స్ కోసం పేద ప్రజలకు తక్షణ వైద్య కార్డు.",

    "rashtriyabima_title": "రాష్ట్రీయ స్వాస్థ్య బీమా యోజన",
    "rashtriyabima_badge": "అసంఘటిత కార్మికుల రక్షణ",
    "rashtriyabima_desc": "రోజువారీ కూలీలు మరియు అసంఘటిత రంగ కార్మికుల కోసం ప్రత్యేక ఆరోగ్య బీమా పథకం.",

    "pmay_title": "ప్రధాన మంత్రి ఆవాస్ యోజన",
    "pmay_badge": "అందరికీ పక్కా ఇల్లు",
    "pmay_desc": "గృహం లేని పేద కుటుంబాలకు అన్ని వసతులతో కూడిన పక్కా గృహాల నిర్మాణానికి ఆర్థిక సహాయం.",

    "clss_title": "క్రెడిట్ లింక్డ్ సబ్సిడీ (CLSS)",
    "clss_badge": "గృహ రుణ వడ్డీ సబ్సిడీ",
    "clss_desc": "మొదటిసారి ఇల్లు కొనుగోలు చేసే మధ్యతరగతి మరియు ఈడబ్ల్యూఎస్ కుటుంబాలకు గృహ రుణ వడ్డీపై సబ్సిడీ.",

    "arhc_title": "సరసమైన అద్దె గృహాలు (ARHC)",
    "arhc_badge": "అద్దె గృహ సముదాయాలు",
    "arhc_desc": "పట్టణ వలస కార్మికులు మరియు శ్రామికుల కోసం స్వల్ప అద్దెతో కూడిన శుభ్రమైన నివాసాలు.",

    "blc_title": "బెనిఫిషియరీ లెడ్ కన్‌స్ట్రక్షన్",
    "blc_badge": "ప్రత్యక్ష నిర్మాణ నిధులు",
    "blc_desc": "సొంత స్థలం ఉన్న అర్హులైన కుటుంబాలు కొత్త పక్కా ఇల్లు నిర్మించుకోవడానికి నేరుగా ₹1.50 లక్షల సహాయం.",

    // Eligibility Calculator
    "calc_title": "పథక అర్హత కాలిక్యులేటర్",
    "calc_sub": "కొన్ని సాధారణ వివరాలను ఎంచుకుని, మీరు ఏయే సంక్షేమ పథకాలకు అర్హులో తెలుసుకోండి",
    "calc_profile_head": "⚙️ మీ పౌర ప్రొఫైల్",
    "calc_occ_label": "ప్రధాన వృత్తి / వర్గం",
    "calc_income_label": "వార్షిక కుటుంబ ఆదాయం",
    "calc_land_label": "వ్యవసాయ భూమి వివరాలు",
    "calc_edu_label": "విద్యా స్థితి",
    "calc_house_label": "ప్రస్తుత గృహ రకం",
    "calc_reset_btn": "తిరిగి ప్రారంభించండి ↺",
    "calc_found": "మీకు లభించినవి:",
    "calc_schemes_text": "అర్హత ఉన్న పథకాలు",
    "apply_online_now": "ఆన్‌లైన్‌లో దరఖాస్తు చేసుకోండి →",

    // Options in Calculator
    "occ_all": "ఏదైనా / సాధారణ పౌరుడు",
    "occ_farmer": "రైతు / భూయజమాని",
    "occ_student": "విద్యార్థి / పరిశోధకుడు",
    "occ_worker": "అసంఘటిత / దినసరి కూలీ",
    "occ_homeless": "నివాస రహితుడు / అద్దెదారు",

    "inc_bpl": "₹1,00,000 లోపు (దారిద్య్రరేఖకు దిగువన)",
    "inc_ews": "₹1,00,000 - ₹2,50,000 (ఈడబ్ల్యూఎస్)",
    "inc_mig": "₹2,50,000 - ₹5,00,000 (మధ్యతరగతి)",
    "inc_high": "₹5,00,000 పైన",

    "land_any": "వర్తించదు",
    "land_small": "చిన్న / సన్నకారు రైతు (2 హెక్టార్ల లోపు)",
    "land_large": "మధ్య / పెద్ద రైతు (2 హెక్టార్ల పైన)",
    "land_none": "వ్యవసాయ భూమి లేదు",

    "edu_any": "చదవడం లేదు / పూర్తయింది",
    "edu_college": "కాలేజ్ / డిగ్రీ / ఐటీఐ / పాలిటెక్నిక్",
    "edu_school": "ప్రాథమిక / ఉన్నత పాఠశాల విద్యార్థి",

    "house_any": "ఏదైనా గృహ స్థితి",
    "house_rent": "అద్దె ఇల్లు / వలస నివాసం",
    "house_kutcha": "కచ్చా / తాత్కాలిక నివాసం",
    "house_pucca": "సొంత పక్కా ఇల్లు",

    // Application Form
    "app_form_title": "పథక దరఖాస్తు ఫారమ్",
    "app_form_sub": "ప్రభుత్వ సహాయం కోసం మీ ధృవీకరణ వివరాలను సమర్పించండి",
    "app_name_label": "దరఖాస్తుదారు పూర్తి పేరు *",
    "app_phone_label": "ఫోన్ నంబర్ *",
    "app_email_label": "ఇమెయిల్ చిరునామా *",
    "app_sector_label": "సంక్షేమ విభాగం *",
    "app_scheme_label": "పథకం పేరు *",
    "app_details_label": "అర్హత వివరాలు / ఇతర సమాచారం (ఐచ్ఛికం)",
    "app_details_ph": "మీ భూమి వివరాలు, చదువుతున్న కోర్సు, వార్షిక ఆదాయం లేదా గృహ స్థితిని పేర్కొనండి...",
    "app_submit_btn": "దరఖాస్తును సమర్పించండి",
    "app_cancel_btn": "← రద్దు చేసి డ్యాష్‌బోర్డ్‌కి వెళ్లండి",

    // Success Page
    "success_title": "దరఖాస్తు సమర్పించబడింది!",
    "success_desc": "ధన్యవాదాలు. మీ సంక్షేమ పథక దరఖాస్తు విజయవంతంగా అందింది మరియు శాఖాధికారుల పరిశీలనలో ఉంది.",
    "return_dash_btn": "డ్యాష్‌బోర్డ్‌కి తిరిగి వెళ్లండి",

    // Admin Dashboard
    "admin_console_title": "మై పరిష్కార్ అధికారిక పరిపాలన",
    "officer_label": "అధికారి:",
    "admin_stat_citizens": "నమోదైన పౌరులు",
    "admin_stat_apps": "మొత్తం దరఖాస్తులు",
    "admin_stat_approved": "ఆమోదించిన పథకాలు",
    "admin_stat_pending": "పరిశీలనలో ఉన్నవి",
    "admin_sec_apps": "📋 పౌరుల దరఖాస్తులు (సమీక్ష & చర్యలు)",
    "admin_sec_citizens": "👥 నమోదైన పౌరుల జాబితా",
    "filter_apps_ph": "దరఖాస్తులను ఫిల్టర్ చేయండి...",
    "filter_citizens_ph": "పౌరులను ఫిల్టర్ చేయండి...",
    "btn_save": "సేవ్ చేయండి"
  }
};

/**
 * Applies translations to all tagged elements and input placeholders
 */
function applyLanguage(lang) {
  const selectedLang = lang === 'te' ? 'te' : 'en';
  const dict = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  // 1. Text elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 2. Input/Textarea Placeholders with data-translate-placeholder
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Select Option elements with data-translate-option
  document.querySelectorAll('option[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 4. Synchronize all language selectors on the page
  document.querySelectorAll('.lang-select, #language, #globalLanguageSelect').forEach(select => {
    select.value = selectedLang;
  });

  // 5. Save preference in localStorage
  localStorage.setItem('myparishkar_lang', selectedLang);

  // 6. Set HTML lang attribute
  document.documentElement.lang = selectedLang;

  // 7. Dispatch a custom event so page-specific dynamic engines (like the calculator) can re-render
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: selectedLang } }));
}

/**
 * Initializes language on DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('myparishkar_lang') || 'en';
  applyLanguage(savedLang);

  // Attach change event listeners to any language selects
  document.querySelectorAll('.lang-select, #language, #globalLanguageSelect').forEach(select => {
    select.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  });
});
