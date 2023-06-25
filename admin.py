from django.contrib import admin
from django.contrib import admin
from .models import Doctor


class Doc(admin.ModelAdmin):
    list_display=('name','qualification','department','address','consulting')

admin.site.register(Doctor,Doc)

# Register your models here.
