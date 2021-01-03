import rest_framework_simplejwt
from rest_framework import  viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import RecipeSerializer
from .models import  Recipe

class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated,)

