from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from testapp.models import SchemeApplication

class BackendAuthenticationTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.user_password = 'secretPassword123'
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password=self.user_password,
            first_name='Test User'
        )

        self.admin_password = 'adminSecret123'
        self.admin_user = User.objects.create_user(
            username='adminuser',
            email='admin@example.com',
            password=self.admin_password,
            first_name='Admin User',
            is_staff=True,
            is_superuser=True
        )

    def test_home_page(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_user_signup_success(self):
        response = self.client.post(reverse('user_signup'), {
            'name': 'New Citizen',
            'email': 'citizen@example.com',
            'password': 'citizenPass123'
        })
        self.assertEqual(response.status_code, 302)
        self.assertTrue(User.objects.filter(email='citizen@example.com').exists())

    def test_user_signup_duplicate_email(self):
        response = self.client.post(reverse('user_signup'), {
            'name': 'Duplicate User',
            'email': 'testuser@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'An account with this email already exists')

    def test_user_login_with_email_success(self):
        response = self.client.post(reverse('user_login'), {
            'email': 'testuser@example.com',
            'password': self.user_password
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('user_main'))

    def test_user_login_invalid_password(self):
        response = self.client.post(reverse('user_login'), {
            'email': 'testuser@example.com',
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Invalid email or password')

    def test_user_logout(self):
        self.client.login(username='testuser', password=self.user_password)
        response = self.client.get(reverse('user_logout'))
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('user_login'))

    def test_admin_signup_success(self):
        response = self.client.post(reverse('admin_signup'), {
            'name': 'Super Admin',
            'username': 'newadmin',
            'email': 'newadmin@example.com',
            'password': 'newAdminPass123',
            'admin_code': 'ADMIN2026'
        })
        self.assertEqual(response.status_code, 302)
        created_admin = User.objects.filter(username='newadmin').first()
        self.assertIsNotNone(created_admin)
        self.assertTrue(created_admin.is_staff)

    def test_admin_login_success(self):
        response = self.client.post(reverse('admin_login'), {
            'username': 'adminuser',
            'password': self.admin_password
        })
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('admin_main'))

    def test_admin_dashboard_protected(self):
        # Anonymous user cannot access admin dashboard
        response = self.client.get(reverse('admin_main'))
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('admin_login'))

    def test_admin_dashboard_staff_access(self):
        self.client.login(username='adminuser', password=self.admin_password)
        response = self.client.get(reverse('admin_main'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Administration')

    def test_eligibility_page(self):
        response = self.client.get(reverse('eligibility_calculator'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Eligibility Calculator')

    def test_apply_scheme(self):

        response = self.client.post(reverse('apply'), {
            'name': 'Farmer John',
            'email': 'john@example.com',
            'phone': '9876543210',
            'sector': 'Agriculture',
            'scheme_name': 'PM Kisan',
            'details': 'Small farmer with 2 acres'
        })
        self.assertEqual(response.status_code, 302)
        self.assertEqual(SchemeApplication.objects.count(), 1)
        self.assertEqual(SchemeApplication.objects.first().applicant_name, 'Farmer John')
