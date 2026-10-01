"""
URL configuration for myparishkar project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from testapp import views

urlpatterns = [
    # Django admin
    path('admin/', admin.site.urls),

    # Main landing page
    path('', views.main_view, name='home'),

    # User-related pages
    path('signup/', views.usersignup_view, name='user_signup'),
    path('login/', views.userlogin_view, name='user_login'),
    path('logout/', views.userlogout_view, name='user_logout'),
    path('user/', views.user_view, name='user_main'),

    # Admin-related pages
    path('admin-signup/', views.adminsignup_view, name='admin_signup'),
    path('admin-login/', views.adminlogin_view, name='admin_login'),
    path('admin-logout/', views.adminlogout_view, name='admin_logout'),
    path('admin-dashboard/', views.admin_view, name='admin_main'),
    path('admin/update-status/<int:app_id>/', views.update_application_status_view, name='update_status'),


    # Other sections
    path('sectors/', views.sectors_view, name='sectors'),
    path('schemes/', views.schemes_view, name='schemes'),
    path('eligibility/', views.eligibility_view, name='eligibility_calculator'),
    path('apply/', views.apply_view, name='apply'),

    path('success/', views.success_view, name='success'),
    path('agriculture/', views.agriculture_view, name='agriculture'),
    path('education/', views.education_view, name='education'),
    path('health/', views.health_view, name='health'),
    path('housing/', views.housing_view, name='housing'),
]

