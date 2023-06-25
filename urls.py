from django.urls import path, include
from bonge import views



urlpatterns = [
    path('',views.loginpage,name="loginpage"),
    path('index/',views.index,name="index"), 
    path('symptom/',views.symptom,name="symptom"),
    path('doctor/',views.doctor,name="doctor"),
    
 path('home/', views.home, name="home"),
 path('predict', views.predictdisease, name="predictdisease"),
 path('team', views.team, name="team"),
 path('predict', views.predict, name="predict"),
 path('about', views.about, name="about"),

]