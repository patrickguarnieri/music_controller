from django.shortcuts import render

# Basicaly it render the index template to react take care of it.

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') # Allow us to render the index.html template from templates/frontend.