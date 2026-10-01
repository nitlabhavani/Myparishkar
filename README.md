# 🌾 My Parishkar (మై పరిష్కార్)

**My Parishkar** is a comprehensive, bilingual (English & Telugu) Public Welfare & Citizen Scheme Management Portal built with Django. It empowers citizens to explore government schemes across Agriculture, Education, Healthcare, and Housing, check their eligibility via an interactive calculator, and apply and track applications seamlessly in real time.

---

## ✨ Key Features

- **🌐 Complete Bilingual Support (English & తెలుగు)**:
  - Instant live language switcher that persists user preference in `localStorage`.
  - Comprehensive Telugu translations across all pages, forms, scheme details, calculators, and administrative dashboards.

- **🏛️ Multi-Sector Welfare Schemes**:
  - **Agriculture (వ్యవసాయం)**: PM-KISAN, Rythu Bharosa, Crop Insurance (Fasal Bima), Subsidized Farm Equipment.
  - **Education (విద్య)**: Jagananna Vidya Deevena, Vasathi Deevena, Amma Vodi, Vidya Kanuka Kits.
  - **Healthcare (వైద్యం / ఆరోగ్యం)**: Dr. YSR Aarogyasri, Ayushman Bharat, Aarogya Aasara, Health & Wellness Centers.
  - **Housing (గృహనిర్మాణం)**: PMAY-Urban & Gramin, Pedalandariki Illu, Affordable Rental Housing, Interest Subsidies.

- **🎯 Interactive Eligibility Calculator**:
  - Dynamic rule-based algorithm evaluating Sector, Age, Annual Income, Land Holding, and Occupation.
  - Real-time matched scheme recommendations with estimated benefits and direct one-click application links.

- **📝 Citizen Application Workflow**:
  - Secure signup and login for citizens.
  - Apply with personalized data (Aadhaar, income, sector, scheme name, address).
  - Live status tracking (`Pending`, `Approved`, `Rejected`) on the citizen dashboard.

- **🛡️ Officer & Admin Portal**:
  - Administrative dashboard for government officers to review, approve, or reject citizen applications.
  - Filtering by sector and real-time status updates with feedback notes.

---

## 🛠️ Technology Stack

- **Backend**: Python 3.13 / Django 5.2 (Authentication, ORM, Views, Templates)
- **Frontend**: HTML5, Vanilla CSS3 (Responsive Design System, Glassmorphism, Micro-animations), Vanilla JavaScript
- **Static Assets & Serving**: WhiteNoise for production-ready static asset compression and caching
- **Database**: SQLite (Development) / PostgreSQL-ready (Production)

---

## 🚀 Getting Started

### 1. Prerequisites
- Python 3.11+ (Python 3.13 recommended)
- Git

### 2. Clone the Repository
```bash
git clone https://github.com/nitlabhavani/Myparishkar.git
cd Myparishkar
```

### 3. Create & Activate Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux / macOS
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Apply Database Migrations
```bash
python manage.py migrate
```

### 6. Create Superuser (Admin / Officer Access)
```bash
python manage.py createsuperuser
```

### 7. Run the Development Server
```bash
python manage.py runserver
```
Visit `http://127.0.0.1:8000/` in your browser.

---

## 🧪 Running Unit Tests

Execute the automated test suite covering models, authentication, and eligibility calculation:
```bash
python manage.py test testapp
```

---

## 🌐 Production Deployment Guide

1. Set Environment Variables:
   - `DJANGO_SECRET_KEY`: A secure random secret key.
   - `DJANGO_DEBUG`: `False` for production.
   - `DJANGO_ALLOWED_HOSTS`: `yourdomain.com,your-app.onrender.com`.

2. Collect Static Files:
   ```bash
   python manage.py collectstatic --noinput
   ```

3. Run with Gunicorn:
   ```bash
   gunicorn myparishkar.wsgi
   ```

---

## 📄 License
This project is licensed under the MIT License.
