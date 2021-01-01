from django.conf.urls import url
from django.urls import  path , include
from rest_framework.routers import  DefaultRouter
from .views import  RecipeViewSet

router =DefaultRouter()
router.register(r'recipes' , RecipeViewSet)

urlpatterns = [
    path("" , include(router.urls)),
url(r'^rest-auth/', include('rest_auth.urls')),
url(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]