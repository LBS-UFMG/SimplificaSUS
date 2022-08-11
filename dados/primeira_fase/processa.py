import csv
import json

issn = "issn.csv"
fator_impacto = "if.csv"
qualis = "qualis.csv"

dados_issn = []
dados_qualis = []
dic_issn = {}
dic_qualis = {}

dados_final = []

cont = 0

print("PARTE 1: filtrando dados de fator de impacto das revistas")
with open(fator_impacto) as fator_impacto_file:

	tabela_fi = csv.reader(fator_impacto_file, delimiter=";")

	for i in tabela_fi:
		issn_fi = i[4]

		if len(issn_fi) > 8:
			issn_fi=issn_fi.split(", ")
		else:
			tmp = issn_fi
			issn_fi = []
			issn_fi.append(tmp)

		nome_revista = i[2]
		fi = i[5].replace(",",".")
		hindex = i[7]
		citacoes = i[11]
		docs = i[9]

		if cont != 0:
			try:
				media = int(citacoes)/int(docs)
				media = round(media, 2)

			except: 
				media = '-'
		else:
			media = 'media_de_citacoes' #titulo

		cont+=1

		#print(issn_fi, nome_revista, fi, hindex, citacoes,docs, media, sep="\t")
		dados_issn.append([issn_fi, nome_revista, fi, hindex, citacoes, docs, media])
		for j in issn_fi:
			dic_issn[j] = [issn_fi, nome_revista, fi, hindex, citacoes, docs, media]
		#print(json.dumps(i, indent=4, sort_keys=True))


# exemplo de saída ---------
#['Issn']	Title	SJR	H index	Total Cites (3years)	Total Docs. (3years)	media_de_citacoes
#['15424863', '00079235']	Ca-A Cancer Journal for Clinicians	56.204	182	17959	121	148.42

#print(dados_issn)


print("PARTE 2: pegando o QUALIS")

with open(qualis) as qualis_file:

	tabela_qualis= csv.reader(qualis_file, delimiter=";")

	for i in tabela_qualis:
		issn_qualis = i[0].replace('-','')
		nome_qualis = i[1]
		estrato_qualis = i[2]

		dados_qualis.append([issn_qualis, nome_qualis, estrato_qualis])

		dic_qualis[issn_qualis] = [issn_qualis, nome_qualis, estrato_qualis]


#print(dados_qualis)
# EXEMPLO
# ['ISSN', 'TITULO', 'ESTRATO']
# ['01491423', 'AAPG BULLETIN (PRINT)', 'A1'], 

print("PARTE 3: vinculando FATOR DE IMPACTO + QUALIS")


with open(issn) as issn_file:

	tabela_issn = csv.reader(issn_file, delimiter="\t")

	for i in tabela_issn:
		cada_issn = i[0].replace('-','')

		if cada_issn == '':
			print('-', '-', '-', '-', '-', '-', sep="\t")
		else:
			jrc = ''
			hindex = ''
			media_cite = ''
			titulo = ''
			qualis = ''
			try:
				#['15424863', '00079235']	Ca-A Cancer Journal for Clinicians	56.204	182	17959	121	148.42

				jrc = dic_issn[cada_issn][2]
				hindex = dic_issn[cada_issn][3]
				media_cite = dic_issn[cada_issn][6]
				titulo = dic_qualis[cada_issn][1]
				qualis = dic_qualis[cada_issn][2]

				print(cada_issn, titulo, qualis, jrc, hindex, media_cite, sep="\t")
			except:
				try:
					if qualis != "":
						print(cada_issn, titulo, qualis, '-', '-', '-', sep="\t")
					elif jrc != "":
						print(cada_issn, dic_issn[cada_issn][1], '-', jrc, hindex, media_cite, sep="\t")
					else:
						print(cada_issn, '-', '-', '-', '-', '-', sep="\t")
				except:
					print(cada_issn, '-', '-', '-', '-', '-', sep="\t")






