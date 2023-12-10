from django.db import models

# Create your models here.
class MusicBox(models.Model):
    title= models.CharField(max_length=50, name="")
    
    ... 

    def __str__(self):
        return self.title

