from django.db import models
import string
import random

def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length)) # Generate a random number.
        if Room.objects.filter(code=code).count() == 0: # Checks if the code is unique inside our database (Room)
            break
    return code
    
    # Room.objects return all the Room objects.
    # Room.objects.filter(code=code) this is filtering inside all the Room objects if the random code is equal to a code already created.
    # .count() is adding +1 if a code is not unique and the code does not break till the random code is unique.

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True) # Quando criado um novo Room, vai chamar a classe generate_unique_code.
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

# Whenever we connect to a website, what happens is that we establish a session.
# Session: is a temporary connection between two computers.