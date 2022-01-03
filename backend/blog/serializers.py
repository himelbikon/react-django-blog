from rest_framework import serializers
from .models import *


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [
            'id',
            'title',
            'category',
            'user',
            'date_time',
            'details'
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'length',
        ]
