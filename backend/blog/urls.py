from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('all/', BlogsView.as_view()),
    path('showcase/', ShowcaseBlogsView.as_view()),
    path('categories/', CategoriesView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
