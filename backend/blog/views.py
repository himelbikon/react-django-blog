import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
from .models import *
from .serializers import *


class BlogsView(APIView):
    def get(self, request):
        page = request.GET.get('page', 1)
        try:
            page = int(page)
        except:
            page = 1
        blogs = Blog.objects.all()[5 * (page-1):5 * page]
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
        post_number = 7

        if len(blogs) < post_number:
            sel_blogs = blogs
        else:
            while len(sel_blogs) <= post_number:
                sel_blogs.add(random.choice(blogs))

        serializer = BlogSerializer(sel_blogs, many=True)
        return Response(serializer.data)


class CategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
