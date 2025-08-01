from django.contrib import admin
from snippets.models import (
    Estado, 
    Cidade,
    Fornecedor
)

# Register your models here.

class EstadoAdmin(admin.ModelAdmin):
    model = Estado

class CidadeAdmin(admin.ModelAdmin):
    model = Cidade

class FornecedorAdmin(admin.ModelAdmin):
    model = Fornecedor



admin.site.register(Estado, EstadoAdmin)
admin.site.register(Cidade, CidadeAdmin)
admin.site.register(Fornecedor, FornecedorAdmin)