from django.contrib import admin

# Register your models here.
# import the models and register in the admin, so that u as the superuser can add the new data model directly from the 
# admin page. `http://localhost:8000/admin/login/?next=/admin/`

from .models import MusicBox

class MusicBoxAdmin(admin.ModelAdmin):
    list_display=(
        "title",
    )

admin.site.register(MusicBox, MusicBoxAdmin)