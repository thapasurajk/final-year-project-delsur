# Generated by Django 3.2.6 on 2022-04-19 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_slider'),
    ]

    operations = [
        migrations.AddField(
            model_name='slider',
            name='bg_color',
            field=models.CharField(default='#ffffff', max_length=50),
        ),
        migrations.AddField(
            model_name='slider',
            name='featured',
            field=models.BooleanField(default=False),
        ),
    ]
