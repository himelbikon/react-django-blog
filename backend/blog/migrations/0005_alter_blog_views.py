# Generated by Django 4.0 on 2022-01-03 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_blog_views'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='views',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
