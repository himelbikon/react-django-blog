import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
from .models import *
from .serializers import *


class BlogsView(APIView):
    def get(self, request):
        blogs = Blog.objects.all()[0:5]
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)


class ShowcaseBlogsView(APIView):
    def get(self, request):
        type = request.GET.get('type', None)

        if type == 'random':
            return self.random_blogs()

    def random_blogs(self):
        blogs = Blog.objects.all()
        sel_blogs = set()

        if len(blogs) < 5:
            sel_blogs = blogs
        else:
            while len(sel_blogs) <= 5:
                sel_blogs.add(random.choice(blogs))

        serializer = BlogSerializer(sel_blogs, many=True)
        return Response(serializer.data)


class CategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
