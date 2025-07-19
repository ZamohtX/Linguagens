"""
                                            Comandos Linux



    Terminal: 

        history -> mostra o historico de comandos utilizados
            
            
        reverse search -> autocompleta o comando baseado nos comandos ja digitados anteriormente
            |-> ctrl + r -                                      -> ativa o reverse search
                

        cd -> Mudar de diretorio
            |-> cd (nomeDoDiretorio / caminhoDiretorio)         -> Entrar 
            |-> cd ..                                           -> Sair 
            |-> cd .                                            -> Diretorio Atual
            |-> cd ~                                            -> Entra na Home


        ls -> Listar Diretorios e Arquivos
            |-> ls -l                                           -> Detalha os itens
            |-> ls -lh                                          -> Detalha os itens 
            |-> ls -ltr                                         -> Detalha os itens por data de modificação
            |-> ls -a                                           -> Mostra itens ocultos


        clear -> Limpa o Terminal


        cat -> Mostra o Conteudo de um arquivo
            |-> cat (nomeDoArquivo)     1                        -> Mostra conteudo
            |-> cat (nomeDoArquivo) (nomeOutroArquivo)           -> Mostra conteudo concatenado dos arquivos
            |-> cat > (nomeArquivoCriado)                        -> Cria um arquivo
            |-> cat (nomeDoArquivo) (outArq) > (arqCriado)       -> Cria um arquivo com o conteudo dos arquivos selecionados
            |-> cat -n (nomeDoArquivo)                           -> Mostra o conteudo com as linhas do arquivo


        touch -> Cria um Arquivo em branco e modifica a data de criação
            |-> touch (nomeDoArquivoCriado)*                     -> Cria um arquivo em branco
            |-> touch (nomeArquivoExistente)                     -> Reseta a data de modificação


        mkdir -> Cria um diretório
            |-> mkdir (nomePastaCriada)*                          -> Cria Diretórios
            |-> mkdir -v (nomePastaCriada)                        -> Cria Diretorio e da feedback no terminal
            |-> mkdir -p (caminhoDaPasta)                         -> Cria uma estrutura de Diretorio


        rm -> Remove arquivos e Diretorios
            |-> rm (nomeArquivoRemovido)*                         -> Remove Arquivos 
            |-> rm -i (nomeArquivoRemovido)*                      -> Remove Arquivos com confirmação
            |-> rm -d (nomeDiretorioVazio)*                       -> Remove Diretorio Vazio        
            |-> rm -rf (nomeDiretorioRemovido)*                   -> Remove Diretorio Forçadamente


        rmdir -> Remove Diretorios
            |-> rmdir (nomeDiretorio)                             -> Remove Diretorio
            |-> rmdir -p (estruturaDiretorios)                    -> Remove Estrutura de Diretorios


        cp -> Copia Itens
            |-> cp (nomeDoArquivo) (nomeArquivoCopiado)           -> Copia o Arquivo para o mesmo diretorio
            |-> cp (nomeDoArquivo) (caminhoDoArquivo)             -> Copia para o caminho especificado
            |-> cp -r (nomeDiretorio) (nomeDiretorioCopiado)      -> Copia o Diretorio para o mesmo diretorio
            |-> cp -r (nomeDiretorio) (caminhoDiretorios)         -> Copia o Diretorio para o caminho especificado
            

        mv -> Mover Itens
            |-> mv (nomeArquivo)(caminho/NomeArquivo)             -> Move o item para o destino especificado
            |-> mv (nomeDiretorio)* (Destino)                     -> Move todos os itens do diretorio         







    Atalhos:
        
        cntrl + alt + T -> Abre o Terminal

















"""