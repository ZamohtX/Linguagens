"""
                        Permissões


    As permissões se dividem e 3 propriedades e diretorios:
        |-> Leitura -> ler arquivo              (R)
        |-> Escrita -> alterar arquivo          (W)
        |-> Execução -> execurtar arquivo       (X)
        

                        Modo Alfabético

    Permissões: 1 222 333 444 (drwxr-xr-x)

    diretorio                (d)
    ler arquivo              (r)
    alterar arquivo          (w)
    execurtar arquivo        (x)
    não há permissão         (-)

        |-> 1: diretorio ou arquivo
            |-> d = diretorio | " - " = arquivo
        |-> 222: permissões do owner (dono)
        |-> 333: permissões do grupo (que o arquivo pertence)
        |-> 444: permissões dos demais usuarios (que não são donos do arquivo e nao fazem parte do grupo do arquivo)


    Alterar Permissões:                        chmod (args) file/dir
                                     ex: chmod o=x / chmod a=rwx / chmod g-w / chmod u+rw
        +   ->  Adiciona permissão    
        -   ->  Remove permissão
        =   ->  Determina as permissões, substituindo as anteriores
        u   ->  Dono do item (user / owner)
        g   ->  Grupo  (group)
        o   ->  Outros (others)
        a   ->  Todos  (all)        


                        Modo Númerico

    Alterar permissões:                        chmod (xxx) file/dir

    0   ->    Sem Permissão                  (---)
    1   ->    Executar                       (--x)
    2   ->    Escrever                       (-w-)
    3   ->    Ler e Executar                 (-wx)
    4   ->    Ler                            (r--)
    5   ->    Ler e executar                 (r-x)
    6   ->    Ler e escrever                 (rw-)
    7   ->    Ler, escrever e executar       (rwx)


       
"""