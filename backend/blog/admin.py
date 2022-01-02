from django.contrib import admin
from .models import *

models = [
    Category,
    Blog,
]

for model in models:
    admin.site.register(model)
