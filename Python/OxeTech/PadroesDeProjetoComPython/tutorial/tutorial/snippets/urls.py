from django.urls import path
from snippets import views

urlpatterns = [
    path('snippets/', views.snippet_list),
    path('fornecedores/', views.fornecedor_list),
]