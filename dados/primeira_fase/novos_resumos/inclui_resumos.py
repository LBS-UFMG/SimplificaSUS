# lê lista de novos resumos presentes em saida.csv
# e os adiciona em artigos.csv que é usado na interface web

fonte_dados = "saida.csv"
arquivo_a_ser_modificado = "artigos.csv"

w = open("artigos_atualizado.csv","w")

novos_dados = {}
pubmedid = {}
journal = {}
issn = {}
doi = {}

# lendo dados de entrada
with open(fonte_dados) as arquivo:
    linhas = arquivo.readlines()

    for linha in linhas:
        linha = linha.split('\t')

        pubmed_id = linha[0]
        titulo = linha[1]
        issn_atual = linha[3]
        journal_atual = linha[4]
        doi_tual = linha[5]
        resumo = linha[6]

        novos_dados[titulo] = resumo.replace('\n','')
        pubmedid[titulo] = pubmed_id
        journal[titulo] = journal_atual
        issn[titulo] = issn_atual
        doi[titulo] = doi_tual


# gravando dados novos
with open(arquivo_a_ser_modificado) as arquivo:
    linhas = arquivo.readlines()

    for linha in linhas:
        linha = linha.strip().replace('\n','')
        celula = linha.split('\t')

        titulo_atual = celula[0]
        
        if titulo_atual in novos_dados:
            
            w.write(
                linha
                +'\t'+novos_dados[titulo_atual]
                +'\t'+pubmedid[titulo_atual]
                +'\t'+journal[titulo_atual]
                +'\t'+issn[titulo_atual]
                +'\t'+doi[titulo_atual]
                +"\n"
            )
        else:
            w.write(linha+"\t-\t-\t-\t-\t-\n")