# Generated by Django 4.0.4 on 2022-04-23 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_rename_delivery_order_delivery_choice_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='payment_method',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
