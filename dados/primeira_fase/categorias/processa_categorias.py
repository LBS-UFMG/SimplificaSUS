import csv

arquivo = "categorias.tsv"

titulos_artigos = "titulos_artigos.csv"


categorias = []
artigos = {}

with open(arquivo) as arq:

	tabela = csv.reader(arq, delimiter="\t")

	for l in tabela:
		categoria = l[0]
		artigo = l[1]

		if artigo not in artigos:
			artigos[artigo] = []
			artigos[artigo].append(categoria)
		else:
			artigos[artigo].append(categoria)


with open(titulos_artigos) as arqtit:

	tabela2 = csv.reader(arqtit, delimiter="\t")

	for l in tabela2:
		titulo = l[0]

		force = 0

		for i in artigos:
			if titulo == i:
				print(titulo, artigos[i], sep="\t")
				force = 1
				break
		if force == 0:
			print(titulo, '[]', sep="\t")
		else:
			force = 0

