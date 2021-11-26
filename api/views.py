from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class RoomView(generics.ListAPIView):  # Allow us to view and create a Room.
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


# APIView override some methods, get or post methods, for example.
class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        # Se tem uma seção = Vai. Não tem = A classe cria uma nova.
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        # Serealiza (transforma) os dados para que o Python entenda.
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')

            host = self.request.session.session_key

            # Se o cli já tem alguma sessão ativa, temos que verificar e atualiza-lá, com isso, não é necessario criar outra sessão.

            # Busca o numero do Host e atribui para queryset.
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip

                # Força a atualização do room. Sempre que for atualizar campos, usar o "update_fields"
                room.save(update_fields=[
                          'guest_can_pause', 'votes_to_skip'])

                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)

            else:  # Se não existe um host, criamos um novo.
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
