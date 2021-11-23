from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), # Mostra a pagina desse caminho. www.aaa.com/api = chama o API
    path('', include('frontend.urls')) # Mostra a pagina desse caminho. www.aaa.com/ = Chama o frontend urls.
]
