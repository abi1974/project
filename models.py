from django.db import models


class Doctor(models.Model):
    name=models.CharField(max_length=50)
    qualification=models.CharField(max_length=50)
    department=models.CharField(max_length=50)
    address=models.TextField()
    consulting=models.CharField(max_length=50)



# Create your models here.
