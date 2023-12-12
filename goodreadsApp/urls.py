from django.urls import path 
from .views import MusicBoxView, MusicBoxListView

urlpatterns= [
    path('', MusicBoxView.as_view()),
    path('api/musicList', MusicBoxListView.as_view()),
]