from django.core.management import BaseCommand
from django.contrib.auth.models import User
from faker import Faker
import random
from blog.models import *


class Command(BaseCommand):
    def handle(self, *args, **options):
        print('<<< --- Product Populating Starts Now --- >>>')
        number = int(input('How many: '))
        for i in range(number):
            self.create(i)
        print('<<< --- Product Populating Ends Now --- >>>')

    def create(self, serial):
        faker = Faker()
        categories = Category.objects.all()
        users = User.objects.all()

        try:
            blog = Blog.objects.create(
                title=faker.name(),
                user=random.choice(users),
                details=faker.text(1000),
                category=random.choice(categories)
            )

            blog.save()
            print(f'[{serial +1}]', blog)

        except Exception as e:
            print(e)
