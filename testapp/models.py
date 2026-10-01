from django.db import models
from django.contrib.auth.models import User

class SchemeApplication(models.Model):
    SECTOR_CHOICES = [
        ('Agriculture', 'Agriculture'),
        ('Education', 'Education'),
        ('Healthcare', 'Healthcare'),
        ('Housing', 'Housing'),
    ]
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    applicant_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    sector = models.CharField(max_length=50, choices=SECTOR_CHOICES)
    scheme_name = models.CharField(max_length=200)
    details = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.applicant_name} - {self.scheme_name} ({self.sector})"

