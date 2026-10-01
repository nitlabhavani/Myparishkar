from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from .models import SchemeApplication


# Main landing page
def main_view(request):
    return render(request, 'index.html')


# User Signup View
def usersignup_view(request):
    if request.user.is_authenticated and not request.user.is_staff:
        return redirect('user_main')

    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()

        # Validation
        if not name or not email or not password:
            messages.error(request, 'All fields are required.')
            return render(request, 'user_signup.html', {'name': name, 'email': email})

        try:
            validate_email(email)
        except ValidationError:
            messages.error(request, 'Please enter a valid email address.')
            return render(request, 'user_signup.html', {'name': name, 'email': email})

        if len(password) < 6:
            messages.error(request, 'Password must be at least 6 characters long.')
            return render(request, 'user_signup.html', {'name': name, 'email': email})

        if User.objects.filter(email__iexact=email).exists():
            messages.error(request, 'An account with this email already exists. Please log in.')
            return render(request, 'user_signup.html', {'name': name, 'email': email})

        # Generate a unique username based on email
        base_username = email.split('@')[0]
        username = base_username
        counter = 1
        while User.objects.filter(username__iexact=username).exists():
            username = f"{base_username}{counter}"
            counter += 1

        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                first_name=name
            )
            # Log the user in directly after signup
            login(request, user)
            messages.success(request, f'Welcome to My Parishkar, {name}!')
            return redirect('user_main')
        except Exception as e:
            messages.error(request, f'Error creating account: {str(e)}')
            return render(request, 'user_signup.html', {'name': name, 'email': email})

    return render(request, 'user_signup.html')


# User Login View
def userlogin_view(request):
    if request.user.is_authenticated and not request.user.is_staff:
        return redirect('user_main')

    if request.method == 'POST':
        email_or_user = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()

        if not email_or_user or not password:
            messages.error(request, 'Please provide both email and password.')
            return render(request, 'user_login.html', {'email': email_or_user})

        # Find user by email or username
        user_obj = User.objects.filter(email__iexact=email_or_user).first()
        username = user_obj.username if user_obj else email_or_user

        user = authenticate(request, username=username, password=password)

        if user is not None:
            if not user.is_active:
                messages.error(request, 'This account is inactive.')
                return render(request, 'user_login.html', {'email': email_or_user})

            login(request, user)
            messages.success(request, f'Welcome back, {user.first_name or user.username}!')
            next_url = request.GET.get('next') or request.POST.get('next')
            if next_url:
                return redirect(next_url)
            return redirect('user_main')
        else:
            messages.error(request, 'Invalid email or password. Please try again.')
            return render(request, 'user_login.html', {'email': email_or_user})

    return render(request, 'user_login.html')


# User Logout View
def userlogout_view(request):
    logout(request)
    messages.info(request, 'You have been logged out successfully.')
    return redirect('user_login')


# User Main/Dashboard View
@login_required(login_url='user_login')
def user_view(request):
    user_apps = []
    if request.user.is_authenticated:
        user_apps = SchemeApplication.objects.filter(user=request.user).order_by('-applied_at')
        if not user_apps and request.user.email:
            user_apps = SchemeApplication.objects.filter(email__iexact=request.user.email).order_by('-applied_at')
    return render(request, 'user_mainpage.html', {'user_applications': user_apps})



# Admin Signup View
def adminsignup_view(request):
    if request.user.is_authenticated and request.user.is_staff:
        return redirect('admin_main')

    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()
        admin_code = request.POST.get('admin_code', '').strip()

        if not username or not email or not password:
            messages.error(request, 'Username, email and password are required.')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

        # Secret verification pass-key (optional check, allows default ADMIN2026 or open)
        valid_codes = ['ADMIN2026', 'PARISHKAR', 'ADMIN123', '']
        if admin_code and admin_code not in valid_codes:
            messages.error(request, 'Invalid Admin Passcode.')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

        if User.objects.filter(username__iexact=username).exists():
            messages.error(request, 'Username is already taken.')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

        if User.objects.filter(email__iexact=email).exists():
            messages.error(request, 'An account with this email already exists.')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

        if len(password) < 6:
            messages.error(request, 'Password must be at least 6 characters.')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

        try:
            admin_user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                first_name=name or username,
                is_staff=True,
                is_superuser=True
            )
            messages.success(request, 'Admin registered successfully! Please log in.')
            return redirect('admin_login')
        except Exception as e:
            messages.error(request, f'Failed to create admin: {str(e)}')
            return render(request, 'admin_signup.html', {'name': name, 'username': username, 'email': email})

    return render(request, 'admin_signup.html')


# Admin Login View
def adminlogin_view(request):
    if request.user.is_authenticated and request.user.is_staff:
        return redirect('admin_main')

    if request.method == 'POST':
        username_or_email = request.POST.get('username', '').strip() or request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()

        if not username_or_email or not password:
            messages.error(request, 'Please provide both admin username/email and password.')
            return render(request, 'admin_login.html', {'username': username_or_email})

        # Try username or email lookup
        user_obj = User.objects.filter(email__iexact=username_or_email).first()
        username = user_obj.username if user_obj else username_or_email

        user = authenticate(request, username=username, password=password)

        if user is not None and user.is_staff:
            login(request, user)
            messages.success(request, f'Welcome Admin {user.username}!')
            return redirect('admin_main')
        else:
            messages.error(request, 'Invalid admin credentials or you do not have staff permissions.')
            return render(request, 'admin_login.html', {'username': username_or_email})

    return render(request, 'admin_login.html')


# Admin Logout View
def adminlogout_view(request):
    logout(request)
    messages.info(request, 'Admin logged out successfully.')
    return redirect('admin_login')


# Admin Dashboard View
def admin_view(request):
    if not request.user.is_authenticated or not request.user.is_staff:
        messages.error(request, 'Access restricted to administrators only. Please log in.')
        return redirect('admin_login')

    users = User.objects.filter(is_staff=False).order_by('-date_joined')
    staff_users = User.objects.filter(is_staff=True).order_by('-date_joined')
    applications = SchemeApplication.objects.all().order_by('-applied_at')

    context = {
        'users': users,
        'staff_users': staff_users,
        'applications': applications,
        'total_users': users.count(),
        'total_staff': staff_users.count(),
        'total_applications': applications.count(),
        'approved_applications': applications.filter(status='Approved').count(),
        'pending_applications': applications.filter(status='Pending').count(),
        'rejected_applications': applications.filter(status='Rejected').count(),
    }
    return render(request, 'admin_mainpage.html', context)


# Admin Update Application Status View
def update_application_status_view(request, app_id):
    if not request.user.is_authenticated or not request.user.is_staff:
        messages.error(request, 'Admin privileges required.')
        return redirect('admin_login')

    if request.method == 'POST':
        new_status = request.POST.get('status', '').strip()
        app = SchemeApplication.objects.filter(id=app_id).first()
        if app and new_status in ['Pending', 'Approved', 'Rejected']:
            app.status = new_status
            app.save()
            messages.success(request, f'Application #{app.id} for {app.applicant_name} updated to {new_status}.')
        else:
            messages.error(request, 'Invalid application or status.')

    return redirect('admin_main')



# Other sections
def sectors_view(request):
    return render(request, 'user_mainpage.html')


def schemes_view(request):
    return render(request, 'schemes.html')


def eligibility_view(request):
    return render(request, 'eligibility.html')



def apply_view(request):
    if request.method == 'POST':
        applicant_name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        sector = request.POST.get('sector', '').strip()
        scheme_name = request.POST.get('scheme_name', '').strip()
        details = request.POST.get('details', '').strip()

        if not applicant_name or not email or not phone or not sector or not scheme_name:
            messages.error(request, 'Please fill in all required fields.')
            return render(request, 'apply.html', request.POST)

        user = request.user if request.user.is_authenticated else None
        SchemeApplication.objects.create(
            user=user,
            applicant_name=applicant_name,
            email=email,
            phone=phone,
            sector=sector,
            scheme_name=scheme_name,
            details=details
        )
        messages.success(request, f'Application for "{scheme_name}" submitted successfully!')
        return redirect('success')

    # Prefill sector or scheme if query params provided
    sector_query = request.GET.get('sector', '')
    scheme_query = request.GET.get('scheme', '')
    return render(request, 'apply.html', {'sector': sector_query, 'scheme_name': scheme_query})


def success_view(request):
    return render(request, 'success.html')


def agriculture_view(request):
    return render(request, 'agriculture.html')


def education_view(request):
    return render(request, 'education.html')


def health_view(request):
    return render(request, 'healthcare.html')


def housing_view(request):
    return render(request, 'housing.html')