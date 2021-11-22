from django.db import models
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')
        # Instead of mentioning all the fields (one by one) in Meta class, we can simply put fields = '__all__'