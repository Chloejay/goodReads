from django.shortcuts import render
from django.http import HttpResponse 
from rest_framework import generics 
from .serializers import MusicBoxSerializer 
from .models import MusicBox


# Create your views here.

# we create our view for the first component we will build, use DRF 
# view to write our endpoint; 


class MusicBoxView(generics.CreateAPIView):
    queryset= MusicBox.objects.all() 
    serializer_class= MusicBoxSerializer

#  use ListAPI; retrieve; 

    