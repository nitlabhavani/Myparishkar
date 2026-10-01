from django.contrib import admin
from .models import SchemeApplication

@admin.register(SchemeApplication)
class SchemeApplicationAdmin(admin.ModelAdmin):
    list_display = ('applicant_name', 'email', 'phone', 'sector', 'scheme_name', 'status', 'applied_at')
    list_filter = ('sector', 'status', 'applied_at')
    search_fields = ('applicant_name', 'email', 'phone', 'scheme_name')

