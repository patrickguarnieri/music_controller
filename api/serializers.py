from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')
        # Instead of mentioning all the fields (one by one) in Meta class, we can simply put fields = '__all__'
        # Serialize é um processo para converter uma estrutura de dados ou um objeto em um formato que possa ser armazenado ou transferido.
        
# POST é usado quando o cliente deseja enviar dados para processamento ao servidor, como os dados de um formulário, por exemplo.
class CreateRoomSerializer(serializers.ModelSerializer): # This creates a POST request. 
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')
        # This class is serializing a request, ou seja, vai pegar os dados de um request e vai serializar para o Python entender.
