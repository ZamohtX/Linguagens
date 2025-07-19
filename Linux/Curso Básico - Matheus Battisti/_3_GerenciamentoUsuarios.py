"""
                            Comandos Linux


    sudo -> é o comando que se refere ao administrador da máquina, para termos permissão

    Terminal:

        Criar Usuario                ->              sudo adduser (nomeUsuario)
        
        Deletar Usuario              ->              sudo userdel --remove (nomeUsuario)

        Encerrar sessão              ->              w -> sudo ps x -> sudo kill -9 (numttyUsuario)

        Verificar Grupos Existentes  ->              getent group

        Criar Grupo                  ->              sudo groupadd (nomeGrupo)

        Deletar Grupo                ->              sudo groupdel (nomeGrupo)

        Add User ao Grupo            ->              sudo usermod -a -G (nomeGrupo) (nomeUser)

        Acessar o Root               ->              sudo su

        Verificar Processos          ->              top // htop

        Mudar Dono do arquivo        ->              chown (nomeDonoNovo) (arquivo)

        Mudar Dono e Grupo           ->              chown (nomeDono):(nomeGrupo) (arquivo) 

        Mudar Grupo do arquivo       ->              chgrp (NomeGrupo) (arquivo)    
"""