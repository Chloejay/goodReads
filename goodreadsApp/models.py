from django.db import models

# Create your models here.
# check django doc: https://docs.djangoproject.com/en/5.0/topics/db/models/

class MusicBox(models.Model): #aka. music box table
    # auto incremental id 
    title= models.CharField(max_length=50, name="") 
    singer= models.CharField(max_length=20, name="")
    lyrics= models.CharField(max_length= 10000, name= "")
    created_at= models.DateTimeField(auto_now_add= True)
    
    ... 

    def __str__(self):
        return self.title

    def __str__(self):
        return self.singer

    

