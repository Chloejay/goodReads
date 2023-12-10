# this module purpose is transform data model to JSON formatted data structure so that frontend can use; 

from rest_framework import serializers 

from .models import MusicBox

class MusicBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model= MusicBox
        fields= ["title", "singer", "lyrics", "created_at"]

        