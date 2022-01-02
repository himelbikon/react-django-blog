from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='categories', blank=True, null=True)

    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blogs', blank=True)
    details = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-id']

    def images(self):
        if self.image:
            self.resize(self.image, 500, 300)

    def resize(self, image, width, height):
        img = Image.open(image.path)
        size = (width, height)
        img = img.resize(size)
        img.save(image.path)
