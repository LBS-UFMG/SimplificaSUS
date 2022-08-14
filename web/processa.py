import pandas as pd
import numpy as np
import csv


arquivo = "../Base_covid.csv"

df = pd.read_csv(arquivo, index_col=0)
#available_indicators = df['Indicator Name'].unique()
#available_indicators = ['a','b','c']
# cont = 0
# for i in df.revista.unique():
#     cont += 1
# print(cont)
# exit()
f = open('public/artigos.csv', 'w', newline='', encoding='utf-8')
w = csv.writer(f, delimiter=";")

with open(arquivo, encoding="utf-8") as arquivo_referencia:

    tabela = csv.reader(arquivo_referencia, delimiter=",")

    for l in tabela:
        id=l[0].replace("\n"," ")
        titulo = l[1].replace("\n"," ")
        resumo_original = l[2].replace("\n"," ")
        resumo = l[3].replace("\n"," ")
        resultados = l[4].replace("\n"," ")
        revista = l[5].replace("\n"," ")
        data = l[6].replace("\n"," ")
        qualis = l[7].replace("\n"," ")
        hindex = l[8].replace("\n"," ")
        doi = l[9].replace("\n"," ")
        #,titulo,resumo_original,resumo,resultados,revista,data,qualis,H-index,doi,
        w.writerow([id, titulo, revista, data, qualis, hindex, doi])

exit()
dados = {'medicamento':[], 'positivo':[], 'negativo':[]}
for c in df.columns[9:]:
    dados['medicamento'].append(c)
    dados['positivo'].append((df[c] == 1).sum())
    dados['negativo'].append((df[c] == 0).sum())
dados = pd.DataFrame(dados)
dados = dados.sort_values('positivo', ascending=False)

print(dados)