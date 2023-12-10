from django.shortcuts import render
import os, pathlib 
dir_path= os.path.dirname(os.getcwd())
'/frontend/templates/frontend/index.html'
# /Users/chloeji/django_workshop_music/goodReads/frontend/templates/frontend/index.html

# must need work on this by tonight. 
# Create your views here.
def index(request):
    return render(request, os.path.join(dir_path, "goodReads", "frontend", "templates", "frontend", "index.html"))