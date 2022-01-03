from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class BlogsView(APIView):
    def get(self, request):
        blogs = Blog.objects.all()[0:5]
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)


class CategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
