import csv
import random

# Lista de tipos de produtos
tipos = ["livro", "eletrônicos", "vestuário", "comida", "outros"]

# Cabeçalho do CSV
header = ["nome", "preço(reais)", "quantidade", "código", "descrição", "tipo"]

# Função para gerar um produto aleatório
def gerar_produto():
    nome = f"Produto {random.randint(1, 100)}"
    preço = round(random.uniform(10.0, 100.0), 2)
    quantidade = random.randint(1, 50)
    código = f"C{random.randint(1000, 9999)}"
    descrição = f"Descrição do {nome}"
    tipo = random.choice(tipos)

    return [nome, preço, quantidade, código, descrição, tipo]

# Gera 100 produtos aleatórios
produtos = [gerar_produto() for _ in range(100)]

# Escreve os produtos em um arquivo CSV
with open("produtos.csv", "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)
    writer.writerows(produtos)

print("Arquivo CSV gerado com sucesso: produtos.csv")