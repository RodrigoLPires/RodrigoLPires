from Data_Base_Connect import Conectar
from Data_Base_Connect import CursorInserir
import Data_Base_Tabelas as tb

banco_conexao = tb.banco_conexao

Conectar.conexao_on(banco_conexao)

produto = input('Digite um produto: ')
categoria = input('Digite categoria: ')
tipo = input('Digite o tipo: ')


inserir = f"INSERT INTO {tb.tabela_produtos}({tb.coluna_tb_produtos_produto}, {tb.coluna_tb_produtos_categoria}, {tb.coluna_tb_produtos_tipo}) \n" \
          f" VALUES ('{produto}',{categoria},'{tipo}')"

CursorInserir.atributoCursor(inserir)

Conectar.conexao_off(banco_conexao)
