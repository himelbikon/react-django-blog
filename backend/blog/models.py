import datetime
from django.contrib.auth.models import User
from django.db import models
from PIL import Image


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='categories', blank=True, null=True)

    def __str__(self):
        return self.name

    def length(self):
        blogs = Blog.objects.filter(category=self)
        return len(blogs)


class Blog(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blogs', blank=True)
    details = models.TextField()

    views = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-id']

    def save(self, *args, **kwargs):
        super(Blog, self).save(*args, **kwargs)

        if self.image:
            self.resize(self.image, 500, 300)

    def posted_by(self):
        return self.user.username

    def category_name(self):
        return self.category.name

    def ago(self):
        then = self.date_time
        now = datetime.datetime.utcnow()
        diff = now.year - then.year
        unit = 'year' if diff == 1 else 'years'
        if diff < 1:
            diff = now.month - then.month
            unit = 'month' if diff == 1 else 'months'
        if diff < 1:
            diff = now.day - then.day
            unit = 'day' if diff == 1 else 'days'
        if diff < 1:
            diff = now.hour - then.hour
            unit = 'hour' if diff == 1 else 'hours'
        if diff < 1:
            diff = now.minute - then.minute
            unit = 'minute' if diff == 1 else 'minutes'
        return f'{diff} {unit} ago'

    def images(self):
        if self.image:
            self.resize(self.image, 500, 300)

    def resize(self, image, width, height):
        img = Image.open(image.path)
        size = (width, height)
        img = img.resize(size)
        img.save(image.path)
