from django.urls import path
from .views import *

urlpatterns = [
    path('all/', BlogsView.as_view()),
]
