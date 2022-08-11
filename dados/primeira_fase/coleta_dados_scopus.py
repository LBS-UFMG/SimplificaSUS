import requests
import csv
import json
import time
import xml.etree.ElementTree as ET

# rg = int(sys.argv[1])

# o código a seguir lê o arquivo .env (privado)
# e pega a chave de api do pubmed
env = open('../../.env').readlines()
for linha in env:
  i = linha.split('=')
  if i[0] == 'api_pubmed':
    api_pubmed = i[1].strip().replace('"','')

# o mesmo código feito com 1 linha
#api_pubmed2 = [i.strip().split('=')[1].replace('"','') for i in open('../../.env').readlines() if i.strip().split('=')[0]=='api_pubmed'][0]

# INPUT: título do artigo
# OUTPUT (desejado): abstract
# Passo 1. obtendo o pubmed ID
url_pubmed_id = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=1&api_key="+api_pubmed+"&term="

# Passo 2. obtendo o abstract
url_get_abstract = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&rettype=abstract&api_key="+api_pubmed+"&id="
i = 0

pubmed_id = {}

w_pid = open('pubmed_ids.tsv','a+')

with open('categorias/titulos_artigos.csv', newline='') as csvfile:
    
  tabela = csv.reader(csvfile, delimiter=';', quotechar='|')
  
  for linha in tabela:
    i+=1
    if i < 2149: # CONTINUAR A PARTIR DA LINHA (caso o script falhe)
      continue
    
    titulo = linha[0].strip()

    with open('tmp.json','w') as w:
      r = requests.get(url_pubmed_id+titulo)
      w.write(str(r.text))

    with open('tmp.json') as meu_json:
      x = json.load(meu_json)

    try:
      pubmed_id_atual = x['esearchresult']['idlist'][0]
      pubmed_id[pubmed_id_atual] = titulo
      w_pid.write(pubmed_id_atual+"\t"+titulo+"\n")

    except:
      w_pid.write("-\t"+titulo+"\n")

    if i%10==0:
      print(i,'/ 2147')
      time.sleep(1)

      with open('i.txt','a+') as backup:
        backup.write(str(i)+',')
      w_pid.close()
      w_pid = open('pubmed_ids.tsv','a+')

w_pid.close()

# PARTE 2 - ABSTRACT
cont = 0
w = open('saida.csv','a+')

with open('pubmed_ids.tsv') as pid:
    tabela = csv.reader(pid, delimiter='\t', quotechar='|')

    for linha in tabela:
      cont+=1
      if cont%10==0:
        print(cont)
      if cont < 1790: # CONTINUAR A PARTIR DA LINHA (caso o script falhe) 1790 e 1420
        continue
      pubmed_id = linha[0]
      titulo = linha[1]

      if pubmed_id != '-':
        
        r = requests.get(url_get_abstract+pubmed_id)

        # print(r.text)

        tree =  ET.ElementTree(ET.fromstring(r.text))
        root = tree.getroot()

        try:
          for a in root.findall("./PubmedArticle/MedlineCitation/Article/ArticleTitle"):
            titulo_2 = a.text
            # print(titulo, "\n", titulo_2, end="\n\n")
        except:
          titulo_2 = '-'

        try:  
          for a in root.findall("./PubmedArticle/MedlineCitation/Article/Journal/ISSN"):
            issn = a.text
            # print(issn)
        except:
          issn = '-'

        try:
          for a in root.findall("./PubmedArticle/MedlineCitation/Article/Journal/Title"):
            journal = a.text
            # print(journal)
        except:
          journal = '-'

        try:
          for a in root.findall("./PubmedArticle/MedlineCitation/Article/ELocationID"):
            doi = a.text
        except:
          doi = '-'

        try:
          for a in root.findall("./PubmedArticle/MedlineCitation/Article/Abstract/AbstractText"):
            abstract = a.text
            abstract = abstract.replace('\n','')
            abstract = abstract.replace('\t','')
            # print(abstract)
        except:
          abstract = '-'

        tmp_titulo_1 = titulo.split()
        
        try:
          tmp_titulo_2 = titulo_2.split()
        except:
          tmp_titulo_2 = ['-']


        tamanho = len(tmp_titulo_1)
        match = 0

        for i in tmp_titulo_1:
          for j in tmp_titulo_2:
            if i.upper().replace('.','') == j.upper().replace('.',''):
              match += 1

        # print('- ',titulo, '\n-',titulo_2)
        # print(match, '/', tamanho,'\n')

        if match/tamanho > 0.8:
          # print('- ',titulo, '\n-',titulo_2,'\n')
          try:
            w.write(pubmed_id+"\t"+titulo+"\t"+ titulo_2+"\t"+ issn+ "\t"+journal+"\t"+doi+"\t"+abstract+"\n")
          except:
            print(titulo, match, tamanho)

#A preliminary evaluation on the efficacy of ozone therapy in the treatment of COVID-19 18 14
#COVID-19 and Liver Transplantation: lessons learned from three reported cases 10 10

        
          # titulo = root.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ArticleTitle
          # journal = root.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Journal.Title
          # issn = root.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Journal.ISSN
          # # doi = PubmedArticle.MedlineCitation.Article.ArticleTitle
          # abstract = root.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Abstract.AbstractText

          # abstract = abstract.replace('\n', ' ')
          # abstract = abstract.replace('\t', ' ')

        #   print(titulo, journal, issn, abstract)
        # except:
        #   print('falha')

        

        # try:
        #   pubmed_id_atual = x['esearchresult']['idlist'][0]
        #   pubmed_id[pubmed_id_atual] = titulo
        #   w_pid.write(pubmed_id_atual+"\t"+titulo+"\n")

        # except:
        #   w_pid.write("-\t"+titulo+"\n")
