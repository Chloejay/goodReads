from django.urls import path 
from .views import MusicBoxView

urlpatterns= [
    path('', MusicBoxView.as_view())
]