from django.conf import  settings
from  django.conf.urls.static import  static
from django.contrib import admin
from django.urls import path , include
from django.conf.urls import url
from django.conf.urls import include as included
from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),






]
if settings.DEBUG:
     urlpatterns += static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)
